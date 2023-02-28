class LavSw extends HTMLElement{
    static get observedAttributes() {return ['autoconnect'];}
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
          case 'autoconnect':
            console.log( 'attribute ' + name + ' changed from '+ oldValue + ' to ' + newValue);

            break;
        }
      }
      get autoconnect(){return this.getAttribute('autoconnect')}
      set autoconnect(newValue){this.setAttribute('autoconnect',newValue)}
    connectedCallback(){
        console.log("connectedCallback()");
        let _this=this;
        let shadow= this.attachShadow({ mode: 'open' });   
        this._shadow=shadow;
        this.display=document.createElement('div');
        this.display.part='display';
        this.display.classList.add('lavsw_display');
        this.display.title="Lav-Sw ver: 1.1";
        shadow.appendChild(this.display)
        this.btconnect=document.createElement('button');
        this.btconnect.part='btconnect';
        this.btconnect.innerHTML='Conectar';
        shadow.appendChild(this.btconnect);
        this.btconnect.addEventListener('click',function(e){
            _this._ports=[];
            _this.connect();  
        })
        this.lavstartcounter=0;
        this.ports = [5019,1080,5018,5017];
        this.callbacks = [];
        this.msgcounter = 0;
        this.session=null;
        this.lavobj=null;
        this.lsStatus=0;
        this.lsStatusText="";
        this._lavswStatus(0);  
        
        console.log('autoconnect:',this.getAttribute('autoconnect'));
        if(this.getAttribute('autoconnect')!==null) this.connect();
    }
    disconnectedCallback(){
        this.disconnect();
    }
    connect(){
        console.log("connect()-----------", this._ports);
        let _this=this;
        clearTimeout(this._tm);
        if(this._ports.length==0) {
            console.log("redefinido portas")
            this._ports = this.ports.slice();
            let saved_port = localStorage.getItem("LavSw_port");
            if(saved_port){
                this._ports.splice(this._ports.indexOf(parseInt(saved_port)),1);
                this._ports.unshift(parseInt(saved_port));
            }
            console.log(this._ports);
        }
        this._lavswStatus(-1);//connecting
        if(this._ports.length>0){
            this.port = this._ports.shift(); //remove do inicio do array
            console.log("port:",this.port);
            this.lavSocket= new WebSocket("ws://127.0.0.1:"+this.port+"/LavSwControl"); 
            this.lavSocket.binaryType="blob";
            this.lavSocket.onerror = function(event){
                console.error("Websocket onerror:", event);
                _this._retry();
            }    
        }
        this.lavSocket.onopen = function(event){
            console.log("Websocket onopen:", event);
            _this.connected=true;
            _this.lavstartcounter=0;
            _this._lavswStatus(1);//connected
           localStorage.setItem("LavSw_port",_this.port)
           clearTimeout(_this._tm);
           if(_this.session!==null){
            _this.newSession(_this.session );
            _this.session=null;
           } 
           if(_this.lavobj!==null){
            _this.newLav(_this.lavobj);
            _this.lavobj=null;
           }          
        }
        this.lavSocket.onclose = function(event){
            console.log("Websocket onclose:", event);
            if(_this.connected){
                _this.connected=false;
                _this._lavswStatus(0);
                _this.session=null;
                _this.lavobj=null;
                if(_this.getAttribute('autoconnect')!==null){
                    _this._ports=[];
                    this.tm= setTimeout(_this.connect.bind(_this),20000);
                } 
            }
            
        }
        this.lavSocket.onmessage = function(event){
            console.log("Websocket onmessage:",event);
            _this._decodeMessage(event.data);
        }
        
    }
    _retry(){
        clearTimeout(this._tm);
        if(this._ports.length>0){
            this.connect();
        }else if(this.lavstartcounter<1){
            this.lavstartcounter++;
            this.startLavSw();
            console.log(this._ports);
            this._tm=setTimeout(this.connect.bind(this), 4000);
        }else{
            this.lavstartcounter=0;
            this._lavswStatus(0);
            console.log("-----Não foi possível conectar com LavSw----");
            if(this.getAttribute('autoconnect')!==null) this._tm= setTimeout(this.connect.bind(this),20000);
        }
    }
    disconnect(){
        console.log("disconnect()");
        if(this.lavSocket){
            this.lavSocket.close();
            console.log("lavSocket.close()");
            this._lavswStatus(0);
            this.connected=false;
        }
        
    }    
    startLavSw(){
        console.log("startLavSw()================");
        var a = document.createElement("a");
        a.href="lav://start";
        a.click();
    }
    async newLav(obj,callback){
        console.log("newLav()",JSON.stringify(obj));
        if(obj.institution.avatar !== null && obj.institution.avatar!=='') 
            obj.institution.avatar_dataurl=await this._toDataUrl(obj.institution.avatar);
        if(obj.institution.bgImage !== null && obj.institution.bgImage!=='') 
            obj.institution.bgImage_dataurl=await this._toDataUrl(obj.institution.bgImage);
        if(obj.emitter.avatar !== null && obj.emitter.avatar!=='') 
            obj.emitter.avatar_dataurl=await this._toDataUrl(obj.emitter.avatar);
        this.lavobj=obj;
        if(this.connected!=true){
            this._ports=[];
            this.connect();    
        }else{
            this._sendCmdToLavSw('NEWLAV',obj,callback);
        }
    }
    async newSession(obj,callback){
        console.log("newSession()",JSON.stringify(obj));
        //this.session=obj;
        if(obj.institution.avatar!==null && obj.institution.avatar!=='') 
            obj.institution.avatar_dataurl=await this._toDataUrl(obj.institution.avatar);
        if(obj.institution.bgImage!==null && obj.institution.bgImage!=='') 
            obj.institution.bgImage_dataurl=await this._toDataUrl(obj.institution.bgImage);
        if(obj.emitter.avatar!==null && obj.emitter.avatar!=='') 
            obj.emitter.avatar_dataurl=await this._toDataUrl(obj.emitter.avatar);
        this.session=obj;
        if(this.connected!=true){
            this._ports=[];
            this.connect();    
        }else{
            this._sendCmdToLavSw('NEWSESSION',obj,callback);
        }
        
    }
    status(callback){
        console.log("status()");
        this._sendCmdToLavSw('STATUS',null,callback)
    }
    _sendCmdToLavSw(msgtype,obj,callback){
        console.log("_sendCmdToLavSw()", JSON.stringify(obj));
        if(this.lavSocket) if(this.lavSocket.readyState==1){
            if(callback) this.callbacks.push({i:this.msgcounter,f:callback});
            let pkt = {msg_id:this.msgcounter,msg_type:msgtype,msg:obj};
            const msgtxt = JSON.stringify(pkt);
            this.lavSocket.send(msgtxt);
            this.msgcounter++;    
        }
    }
    _lavswStatus(status){
        console.log("_lavswStatus",status)
        this.lsStatus=parseInt(status);
        console.log(this.lsStatus);
        this.classList.remove('ls_ready','ls_busy','ls_none','ls_connected','ls_connecting','ls_finalizing');
        this.lsStatusText="";
        switch(this.lsStatus){
            case -1: //connecting
                this.classList.add('ls_connecting');
                this.btconnect.style.visibility='hidden';
                this.lsStatusText="Conectando...";
                break;
            case 0: //none
                this.classList.add('ls_none');
                this.btconnect.style.visibility='visible';
                this.lsStatusText="Não Conectado"
                break;
            case 1: // connected
                this.classList.add('ls_connected'); 
                this.btconnect.style.visibility='hidden';
                this.lsStatusText="Conectado";
                break;
            case 2: // ready
                this.classList.add('ls_ready'); 
                this.btconnect.style.visibility='hidden';
                this.lsStatusText= "Pronto!";
                break;
            case 3: //busy
                this.classList.add('ls_busy'); 
                this.btconnect.style.visibility='hidden';
                this.lsStatusText="Em uso";
                break;
            case 4: //Finalizing
                this.classList.add('ls_finalizing'); 
                this.btconnect.style.visibility='hidden';
                this.lsStatusText="Finalizando";
                break;
            
        }
        this.display.innerHTML="LavSw: " + this.lsStatusText;
        this.dispatchEvent(new CustomEvent('status',
            {
                bubbles: true,
                cancelable:true,
                detail:{
                    status:this.lsStatus,
                    status_text:this.lsStatusText
                }
            }))
    }

    _decodeMessage(data){
        console.log("_decodeMessage:", data)
        if (data instanceof Blob){ //binary
            console.log(this.recMsg);
            if(this.recMsg.video_report.content_type)
                console.log(" é video?")
                if(this.recMsg.video_report.content_type.startsWith('video')){
                    console.log(" é video!");
                    console.log("lavready", this.lavReady);
                    if(this.lavReady){
                        this.video_blob= new Blob([data],{type:this.recMsg.video_report.content_type});
                        console.log("video_blob",this.video_blob);
                    }

                }else if(this.recMsg.video_report.content_type.startsWith('image')){
                    console.log(" é imagem!");
                    console.log("lavready", this.lavReady)
                    if(this.lavReady){
                        this.dispatchEvent(new CustomEvent('lavready',
                        {
                          bubbles: true,
                          cancelable:true,
                          detail:{
                              video_report:this.video_report,
                              video_blob:this.video_blob,
                              thumbnail:data
                          }
                        })) ;
                        console.log("event lavready dispatched");
                    }
                }
        }else{ //string
            this.recMsg = JSON.parse(data);      
            console.log("recMsg",this.recMsg);  
            if(this.recMsg.msg_type){
                console.log("msg_type", this.recMsg.msg_type);
                switch(this.recMsg.msg_type){
                    case "GETURL":this._getUrl(this.recMsg.url);break;
                    case "NEWLAV_RESP": this._sendResponse(this.recMsg); break;
                    case "NEWSESSION_RESP": this._sendResponse(this.recMsg); break;
                    case "LAVREADY":{
                        this.lavReady=true; 
                        this.video_report=this.recMsg.msg;
                        console.log("video_report",this.video_report); 
                        break;
                    }
                    case "LAVCLOSED":{
                        this.dispatchEvent(new CustomEvent('lavclosed',
                        {
                            bubbles: true,
                            cancelable:true,
                            detail:{
                              video_report:this.recMsg.msg
                            }
                        }))
                        break;
                    }
                    case "CREATELAV":{
                        this.dispatchEvent(new CustomEvent('createlav',
                        {
                          bubbles: true,
                          cancelable:true,
                          detail:{
                              video_report:this.recMsg.msg,
                              lav_recorder:this.recMsg.lav_recorder
                          }
                        })) ;
                        console.log("event createlav dispatched");
                    } 
                    case "STATUS" :{ 
                        this._lavswStatus(this.recMsg.msg.status);
                        this._sendResponse(this.recMsg);
                        break;
                    }
                    
                }           
            }
            if(this.recMsg.video_report) if(this.recMsg.video_report.test_image){
                var newimg = document.createElement("img");
                document.body.appendChild(newimg);
                newimg.src=this.recMsg.video_report.test_image;
            }
        }
    }
    _sendResponse(msg){
        console.log("_sendResponse");
        for(var i=0;i<this.callbacks.length;i++){
            console.log(this.callbacks[i]);
            if(this.callbacks[i].i==msg.msg_id){
                this.callbacks[i].f(msg.msg);
                this.callbacks.splice(i,1);
                break;
            }
        }
    }
    _toDataUrl(url) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                var reader = new FileReader();
                reader.onloadend = function () {
                    resolve(reader.result);
                };
                reader.readAsDataURL(xhr.response);
            };
            xhr.onerror = reject;
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.send();
        });
    }
    

}
customElements.define('lav-sw', LavSw);