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
export const createGroupUser = /* GraphQL */ `
  mutation CreateGroupUser(
    $input: CreateGroupUserInput!
    $condition: ModelGroupUserConditionInput
  ) {
    createGroupUser(input: $input, condition: $condition) {
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
      profileID
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroupUser = /* GraphQL */ `
  mutation DeleteGroupUser(
    $input: DeleteGroupUserInput!
    $condition: ModelGroupUserConditionInput
  ) {
    deleteGroupUser(input: $input, condition: $condition) {
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
      profileID
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
      zipcode
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
      zipcode
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
      zipcode
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
      phoneWhatsapp
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
      phoneWhatsapp
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
      date
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
      date
      content
      link
      viewed
      createdAt
      updatedAt
    }
  }
`;
