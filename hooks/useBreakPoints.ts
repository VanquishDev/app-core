import { useEffect, useState } from 'react';

export const useBreakPoints = () => {
  const [breakPoint, setBreakPoint] = useState('');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 576) {
        setBreakPoint('xs');
      } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        setBreakPoint('sm');
      } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        setBreakPoint('md');
      } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
        setBreakPoint('lg');
      } else if (window.innerWidth >= 1200) {
        setBreakPoint('xl');
      } 
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    breakPoint,
    isXs: breakPoint === 'xs',
    isSm: breakPoint === 'sm',
    isMd: breakPoint === 'md',
    isLg: breakPoint === 'lg',
    isXl: breakPoint === 'xl',
  };
};
