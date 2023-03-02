/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      profile {
        userID
        user {
          id
          name
          email
          phone
          status
          active
          avatar
          search
          createdAt
          updatedAt
        }
        doc
        docType
        docProfession
        profession
        specialties
        subSpecialties
        bio
        gender
        birth
        birthDay
        notes
        allowCookiesPreference
        createdAt
        updatedAt
      }
      groups {
        items {
          id
          group
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          tagID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      logs {
        items {
          id
          userID
          title
          description
          manufacturer
          model
          osName
          osVersion
          platform
          uuid
          ip
          city
          region
          country
          provider
          lat
          lng
          createdAt
          isError
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          title
          description
          content
          thumbnail
          videoProvider
          video
          search
          createdAt
          userID
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          postID
          userID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      profile {
        userID
        user {
          id
          name
          email
          phone
          status
          active
          avatar
          search
          createdAt
          updatedAt
        }
        doc
        docType
        docProfession
        profession
        specialties
        subSpecialties
        bio
        gender
        birth
        birthDay
        notes
        allowCookiesPreference
        createdAt
        updatedAt
      }
      groups {
        items {
          id
          group
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          tagID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      logs {
        items {
          id
          userID
          title
          description
          manufacturer
          model
          osName
          osVersion
          platform
          uuid
          ip
          city
          region
          country
          provider
          lat
          lng
          createdAt
          isError
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          title
          description
          content
          thumbnail
          videoProvider
          video
          search
          createdAt
          userID
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          postID
          userID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      profile {
        userID
        user {
          id
          name
          email
          phone
          status
          active
          avatar
          search
          createdAt
          updatedAt
        }
        doc
        docType
        docProfession
        profession
        specialties
        subSpecialties
        bio
        gender
        birth
        birthDay
        notes
        allowCookiesPreference
        createdAt
        updatedAt
      }
      groups {
        items {
          id
          group
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          tagID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      logs {
        items {
          id
          userID
          title
          description
          manufacturer
          model
          osName
          osVersion
          platform
          uuid
          ip
          city
          region
          country
          provider
          lat
          lng
          createdAt
          isError
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          title
          description
          content
          thumbnail
          videoProvider
          video
          search
          createdAt
          userID
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          postID
          userID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      doc
      docType
      docProfession
      profession
      specialties
      subSpecialties
      bio
      gender
      birth
      birthDay
      notes
      allowCookiesPreference
      createdAt
      updatedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      doc
      docType
      docProfession
      profession
      specialties
      subSpecialties
      bio
      gender
      birth
      birthDay
      notes
      allowCookiesPreference
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      doc
      docType
      docProfession
      profession
      specialties
      subSpecialties
      bio
      gender
      birth
      birthDay
      notes
      allowCookiesPreference
      createdAt
      updatedAt
    }
  }
`;
export const createUserGroup = /* GraphQL */ `
  mutation CreateUserGroup(
    $input: CreateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    createUserGroup(input: $input, condition: $condition) {
      id
      group
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserGroup = /* GraphQL */ `
  mutation DeleteUserGroup(
    $input: DeleteUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    deleteUserGroup(input: $input, condition: $condition) {
      id
      group
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserTag = /* GraphQL */ `
  mutation CreateUserTag(
    $input: CreateUserTagInput!
    $condition: ModelUserTagConditionInput
  ) {
    createUserTag(input: $input, condition: $condition) {
      id
      tagID
      tag {
        id
        name
        type
        status
        createdAt
        updatedAt
      }
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserTag = /* GraphQL */ `
  mutation DeleteUserTag(
    $input: DeleteUserTagInput!
    $condition: ModelUserTagConditionInput
  ) {
    deleteUserTag(input: $input, condition: $condition) {
      id
      tagID
      tag {
        id
        name
        type
        status
        createdAt
        updatedAt
      }
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      type
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      type
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      type
      status
      createdAt
      updatedAt
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      userID
      name
      reference
      street
      number
      complement
      zipCode
      neighborhood
      city
      state
      country
      addressPagarmeID
      createdAt
      updatedAt
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      userID
      name
      reference
      street
      number
      complement
      zipCode
      neighborhood
      city
      state
      country
      addressPagarmeID
      createdAt
      updatedAt
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      userID
      name
      reference
      street
      number
      complement
      zipCode
      neighborhood
      city
      state
      country
      addressPagarmeID
      createdAt
      updatedAt
    }
  }
`;
export const createPayMethod = /* GraphQL */ `
  mutation CreatePayMethod(
    $input: CreatePayMethodInput!
    $condition: ModelPayMethodConditionInput
  ) {
    createPayMethod(input: $input, condition: $condition) {
      id
      userID
      method
      number
      holderName
      holderDocument
      expMonth
      expYear
      cvv
      brand
      label
      cardPagarmeID
      createdAt
      updatedAt
    }
  }
`;
export const updatePayMethod = /* GraphQL */ `
  mutation UpdatePayMethod(
    $input: UpdatePayMethodInput!
    $condition: ModelPayMethodConditionInput
  ) {
    updatePayMethod(input: $input, condition: $condition) {
      id
      userID
      method
      number
      holderName
      holderDocument
      expMonth
      expYear
      cvv
      brand
      label
      cardPagarmeID
      createdAt
      updatedAt
    }
  }
`;
export const deletePayMethod = /* GraphQL */ `
  mutation DeletePayMethod(
    $input: DeletePayMethodInput!
    $condition: ModelPayMethodConditionInput
  ) {
    deletePayMethod(input: $input, condition: $condition) {
      id
      userID
      method
      number
      holderName
      holderDocument
      expMonth
      expYear
      cvv
      brand
      label
      cardPagarmeID
      createdAt
      updatedAt
    }
  }
`;
export const createLog = /* GraphQL */ `
  mutation CreateLog(
    $input: CreateLogInput!
    $condition: ModelLogConditionInput
  ) {
    createLog(input: $input, condition: $condition) {
      id
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      title
      description
      manufacturer
      model
      osName
      osVersion
      platform
      uuid
      ip
      city
      region
      country
      provider
      lat
      lng
      createdAt
      isError
      updatedAt
    }
  }
`;
export const createConfig = /* GraphQL */ `
  mutation CreateConfig(
    $input: CreateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    createConfig(input: $input, condition: $condition) {
      id
      googleAnalyticsID
      googleSiteVerification
      facebook
      twitter
      instagram
      youtube
      linkedin
      phoneSac
      WhatsApp
      createdAt
      updatedAt
    }
  }
`;
export const updateConfig = /* GraphQL */ `
  mutation UpdateConfig(
    $input: UpdateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    updateConfig(input: $input, condition: $condition) {
      id
      googleAnalyticsID
      googleSiteVerification
      facebook
      twitter
      instagram
      youtube
      linkedin
      phoneSac
      WhatsApp
      createdAt
      updatedAt
    }
  }
`;
export const createMidia = /* GraphQL */ `
  mutation CreateMidia(
    $input: CreateMidiaInput!
    $condition: ModelMidiaConditionInput
  ) {
    createMidia(input: $input, condition: $condition) {
      id
      key
      type
      title
      subTitle
      description
      link
      identifyText
      createdAt
      updatedAt
    }
  }
`;
export const updateMidia = /* GraphQL */ `
  mutation UpdateMidia(
    $input: UpdateMidiaInput!
    $condition: ModelMidiaConditionInput
  ) {
    updateMidia(input: $input, condition: $condition) {
      id
      key
      type
      title
      subTitle
      description
      link
      identifyText
      createdAt
      updatedAt
    }
  }
`;
export const deleteMidia = /* GraphQL */ `
  mutation DeleteMidia(
    $input: DeleteMidiaInput!
    $condition: ModelMidiaConditionInput
  ) {
    deleteMidia(input: $input, condition: $condition) {
      id
      key
      type
      title
      subTitle
      description
      link
      identifyText
      createdAt
      updatedAt
    }
  }
`;
export const createNotify = /* GraphQL */ `
  mutation CreateNotify(
    $input: CreateNotifyInput!
    $condition: ModelNotifyConditionInput
  ) {
    createNotify(input: $input, condition: $condition) {
      id
      userID
      content
      link
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const deleteNotify = /* GraphQL */ `
  mutation DeleteNotify(
    $input: DeleteNotifyInput!
    $condition: ModelNotifyConditionInput
  ) {
    deleteNotify(input: $input, condition: $condition) {
      id
      userID
      content
      link
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
      id
      alias
      name
      description
      order
      orderDesc
      thumbnail
      thumbnailSrc
      thumbnailCropper
      showDescriptionPage
      showThumbnailPage
      hide
      createdAt
      updatedAt
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
      id
      alias
      name
      description
      order
      orderDesc
      thumbnail
      thumbnailSrc
      thumbnailCropper
      showDescriptionPage
      showThumbnailPage
      hide
      createdAt
      updatedAt
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
      id
      alias
      name
      description
      order
      orderDesc
      thumbnail
      thumbnailSrc
      thumbnailCropper
      showDescriptionPage
      showThumbnailPage
      hide
      createdAt
      updatedAt
    }
  }
`;
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
      id
      alias
      status
      menuID
      menu {
        id
        alias
        name
        description
        order
        orderDesc
        thumbnail
        thumbnailSrc
        thumbnailCropper
        showDescriptionPage
        showThumbnailPage
        hide
        createdAt
        updatedAt
      }
      order
      title
      description
      content
      tags
      thumbnail
      thumbnailSrc
      thumbnailCropper
      changeFreq
      priority
      hide
      search
      createdAt
      components {
        items {
          id
          pageID
          order
          component
          content
          config
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
      id
      alias
      status
      menuID
      menu {
        id
        alias
        name
        description
        order
        orderDesc
        thumbnail
        thumbnailSrc
        thumbnailCropper
        showDescriptionPage
        showThumbnailPage
        hide
        createdAt
        updatedAt
      }
      order
      title
      description
      content
      tags
      thumbnail
      thumbnailSrc
      thumbnailCropper
      changeFreq
      priority
      hide
      search
      createdAt
      components {
        items {
          id
          pageID
          order
          component
          content
          config
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
      id
      alias
      status
      menuID
      menu {
        id
        alias
        name
        description
        order
        orderDesc
        thumbnail
        thumbnailSrc
        thumbnailCropper
        showDescriptionPage
        showThumbnailPage
        hide
        createdAt
        updatedAt
      }
      order
      title
      description
      content
      tags
      thumbnail
      thumbnailSrc
      thumbnailCropper
      changeFreq
      priority
      hide
      search
      createdAt
      components {
        items {
          id
          pageID
          order
          component
          content
          config
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const createComponent = /* GraphQL */ `
  mutation CreateComponent(
    $input: CreateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    createComponent(input: $input, condition: $condition) {
      id
      pageID
      order
      component
      content
      config
      page {
        id
        alias
        status
        menuID
        menu {
          id
          alias
          name
          description
          order
          orderDesc
          thumbnail
          thumbnailSrc
          thumbnailCropper
          showDescriptionPage
          showThumbnailPage
          hide
          createdAt
          updatedAt
        }
        order
        title
        description
        content
        tags
        thumbnail
        thumbnailSrc
        thumbnailCropper
        changeFreq
        priority
        hide
        search
        createdAt
        components {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateComponent = /* GraphQL */ `
  mutation UpdateComponent(
    $input: UpdateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    updateComponent(input: $input, condition: $condition) {
      id
      pageID
      order
      component
      content
      config
      page {
        id
        alias
        status
        menuID
        menu {
          id
          alias
          name
          description
          order
          orderDesc
          thumbnail
          thumbnailSrc
          thumbnailCropper
          showDescriptionPage
          showThumbnailPage
          hide
          createdAt
          updatedAt
        }
        order
        title
        description
        content
        tags
        thumbnail
        thumbnailSrc
        thumbnailCropper
        changeFreq
        priority
        hide
        search
        createdAt
        components {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteComponent = /* GraphQL */ `
  mutation DeleteComponent(
    $input: DeleteComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    deleteComponent(input: $input, condition: $condition) {
      id
      pageID
      order
      component
      content
      config
      page {
        id
        alias
        status
        menuID
        menu {
          id
          alias
          name
          description
          order
          orderDesc
          thumbnail
          thumbnailSrc
          thumbnailCropper
          showDescriptionPage
          showThumbnailPage
          hide
          createdAt
          updatedAt
        }
        order
        title
        description
        content
        tags
        thumbnail
        thumbnailSrc
        thumbnailCropper
        changeFreq
        priority
        hide
        search
        createdAt
        components {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      description
      content
      thumbnail
      videoProvider
      video
      search
      createdAt
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          postID
          userID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      description
      content
      thumbnail
      videoProvider
      video
      search
      createdAt
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          postID
          userID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      description
      content
      thumbnail
      videoProvider
      video
      search
      createdAt
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          postID
          userID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const createPostTag = /* GraphQL */ `
  mutation CreatePostTag(
    $input: CreatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    createPostTag(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        title
        description
        content
        thumbnail
        videoProvider
        video
        search
        createdAt
        userID
        user {
          id
          name
          email
          phone
          status
          active
          avatar
          search
          createdAt
          updatedAt
        }
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      tagID
      tag {
        id
        name
        type
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePostTag = /* GraphQL */ `
  mutation DeletePostTag(
    $input: DeletePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    deletePostTag(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        title
        description
        content
        thumbnail
        videoProvider
        video
        search
        createdAt
        userID
        user {
          id
          name
          email
          phone
          status
          active
          avatar
          search
          createdAt
          updatedAt
        }
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      tagID
      tag {
        id
        name
        type
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        title
        description
        content
        thumbnail
        videoProvider
        video
        search
        createdAt
        userID
        user {
          id
          name
          email
          phone
          status
          active
          avatar
          search
          createdAt
          updatedAt
        }
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        title
        description
        content
        thumbnail
        videoProvider
        video
        search
        createdAt
        userID
        user {
          id
          name
          email
          phone
          status
          active
          avatar
          search
          createdAt
          updatedAt
        }
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        title
        description
        content
        thumbnail
        videoProvider
        video
        search
        createdAt
        userID
        user {
          id
          name
          email
          phone
          status
          active
          avatar
          search
          createdAt
          updatedAt
        }
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      userID
      user {
        id
        name
        email
        phone
        status
        active
        avatar
        search
        createdAt
        profile {
          userID
          doc
          docType
          docProfession
          profession
          specialties
          subSpecialties
          bio
          gender
          birth
          birthDay
          notes
          allowCookiesPreference
          createdAt
          updatedAt
        }
        groups {
          nextToken
        }
        tags {
          nextToken
        }
        logs {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
