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
        allowCookiesStatistic
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
          type
          title
          description
          content
          vimeoCode
          videoKey
          thumbnail
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
          allowCookiesStatistic
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
      allowCookiesStatistic
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
    ListConfig(
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
          allowCookiesStatistic
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
          allowCookiesStatistic
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
          allowCookiesStatistic
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
        allowCookiesStatistic
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
export const listUsersByTag = /* GraphQL */ `
  query ListUsersByTag(
    $tagID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersByTag(
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
export const listTagsByUser = /* GraphQL */ `
  query ListTagsByUser(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagsByUser(
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
export const listTagsByTypeName = /* GraphQL */ `
  query ListTagsByTypeName(
    $type: TagTypes!
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
export const listMidiaByKey = /* GraphQL */ `
  query ListMidiaByKey(
    $key: String!
    $sortDirection: ModelSortDirection
    $filter: ModelMidiaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMidiaByKey(
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
export const notifyByUserCreatedAt = /* GraphQL */ `
  query NotifyByUserCreatedAt(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotifyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notifyByUserCreatedAt(
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
        type
        title
        description
        content
        vimeoCode
        videoKey
        thumbnail
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
          type
          title
          description
          content
          vimeoCode
          videoKey
          thumbnail
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
          type
          title
          description
          content
          vimeoCode
          videoKey
          thumbnail
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
          type
          title
          description
          content
          vimeoCode
          videoKey
          thumbnail
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
          type
          title
          description
          content
          vimeoCode
          videoKey
          thumbnail
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
