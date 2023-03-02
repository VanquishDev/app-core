/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const getProfile = /* GraphQL */ `
  query GetProfile($userID: ID!) {
    getProfile(userID: $userID) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $id: ID
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTags(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        type
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listConfig = /* GraphQL */ `
  query ListConfig(
    $id: ID
    $filter: ModelConfigFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listConfig(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listMidias = /* GraphQL */ `
  query ListMidias(
    $id: ID
    $filter: ModelMidiaFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMidias(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $id: ID
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMenus(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getUserByEmail = /* GraphQL */ `
  query GetUserByEmail(
    $email: AWSEmail!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getUserByPhone = /* GraphQL */ `
  query GetUserByPhone(
    $phone: AWSPhone!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByPhone(
      phone: $phone
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listUsersByStatusCreatedAt = /* GraphQL */ `
  query ListUsersByStatusCreatedAt(
    $status: UserStatus!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersByStatusCreatedAt(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listUsersByBirthDay = /* GraphQL */ `
  query ListUsersByBirthDay(
    $birthDay: String!
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersByBirthDay(
      birthDay: $birthDay
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listUsersByGroupUser = /* GraphQL */ `
  query ListUsersByGroupUser(
    $group: String!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersByGroupUser(
      group: $group
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listGroupsByUserGroup = /* GraphQL */ `
  query ListGroupsByUserGroup(
    $userID: ID!
    $group: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupsByUserGroup(
      userID: $userID
      group: $group
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUsersByTagUser = /* GraphQL */ `
  query ListUsersByTagUser(
    $tagID: ID!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersByTagUser(
      tagID: $tagID
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listTagsByUserTag = /* GraphQL */ `
  query ListTagsByUserTag(
    $userID: ID!
    $tagID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagsByUserTag(
      userID: $userID
      tagID: $tagID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listTagsByTypeName = /* GraphQL */ `
  query ListTagsByTypeName(
    $type: String!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagsByTypeName(
      type: $type
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        type
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listTagsByStatusName = /* GraphQL */ `
  query ListTagsByStatusName(
    $status: TagStatus!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagsByStatusName(
      status: $status
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        type
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAddressesByUser = /* GraphQL */ `
  query ListAddressesByUser(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddressesByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listPayMethodsByUser = /* GraphQL */ `
  query ListPayMethodsByUser(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPayMethodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayMethodsByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listLogsByUserCreatedAt = /* GraphQL */ `
  query ListLogsByUserCreatedAt(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogsByUserCreatedAt(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listMidiasByKey = /* GraphQL */ `
  query ListMidiasByKey(
    $key: String!
    $sortDirection: ModelSortDirection
    $filter: ModelMidiaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMidiasByKey(
      key: $key
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listNotifyByUserCreatedAt = /* GraphQL */ `
  query ListNotifyByUserCreatedAt(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotifyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifyByUserCreatedAt(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        content
        link
        viewed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listMenuByAlias = /* GraphQL */ `
  query ListMenuByAlias(
    $alias: String!
    $sortDirection: ModelSortDirection
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuByAlias(
      alias: $alias
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listPageByAlias = /* GraphQL */ `
  query ListPageByAlias(
    $alias: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPageByAlias(
      alias: $alias
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listPagesByStatusMenuOrder = /* GraphQL */ `
  query ListPagesByStatusMenuOrder(
    $status: PageStatus!
    $menuIDOrder: ModelPagePagesByStatusMenuOrderCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPagesByStatusMenuOrder(
      status: $status
      menuIDOrder: $menuIDOrder
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listPagesByStatusMenuTitle = /* GraphQL */ `
  query ListPagesByStatusMenuTitle(
    $status: PageStatus!
    $menuIDTitle: ModelPagePagesByStatusMenuTitleCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPagesByStatusMenuTitle(
      status: $status
      menuIDTitle: $menuIDTitle
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listComponentsByPageOrder = /* GraphQL */ `
  query ListComponentsByPageOrder(
    $pageID: ID!
    $order: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComponentsByPageOrder(
      pageID: $pageID
      order: $order
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listPostsByUserCreatedAt = /* GraphQL */ `
  query ListPostsByUserCreatedAt(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsByUserCreatedAt(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const listTagsByPost = /* GraphQL */ `
  query ListTagsByPost(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagsByPost(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listPostsByTag = /* GraphQL */ `
  query ListPostsByTag(
    $tagID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsByTag(
      tagID: $tagID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listCommentsByPostCreatedAt = /* GraphQL */ `
  query ListCommentsByPostCreatedAt(
    $postID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentsByPostCreatedAt(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCommentsByUserCreatedAt = /* GraphQL */ `
  query ListCommentsByUserCreatedAt(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentsByUserCreatedAt(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
