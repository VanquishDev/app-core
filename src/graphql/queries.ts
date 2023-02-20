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
          profileID
          createdAt
          updatedAt
        }
        nextToken
      }
      logs {
        items {
          id
          userID
          source
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
        logs {
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
export const getConfig = /* GraphQL */ `
  query GetConfig($id: ID!) {
    getConfig(id: $id) {
      id
      googleAnalyticsID
      googleSiteVerification
      facebook
      twitter
      instagram
      youtube
      linkedin
      phoneSac
      phoneWhatsapp
      createdAt
      updatedAt
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
        logs {
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
        logs {
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
        logs {
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
export const listUsersByGroup = /* GraphQL */ `
  query ListUsersByGroup(
    $group: String!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersByGroup(
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
        profileID
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listGroupsByUser = /* GraphQL */ `
  query ListGroupsByUser(
    $userID: ID!
    $group: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupsByUser(
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
        profileID
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
        zipcode
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
        source
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
export const listLogsBySourceCreatedAt = /* GraphQL */ `
  query ListLogsBySourceCreatedAt(
    $source: LogSource!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogsBySourceCreatedAt(
      source: $source
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        source
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
export const notifyByUserDate = /* GraphQL */ `
  query NotifyByUserDate(
    $userID: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotifyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notifyByUserDate(
      userID: $userID
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        date
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
