/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email?: string | null,
  phone?: string | null,
  status?: UserStatus | null,
  active?: boolean | null,
  avatar?: string | null,
  search?: string | null,
  createdAt?: string | null,
};

export enum UserStatus {
  PREREGISTER = "PREREGISTER",
  SUSPENDED = "SUSPENDED",
  ACTIVE = "ACTIVE",
}


export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  status?: ModelUserStatusInput | null,
  active?: ModelBooleanInput | null,
  avatar?: ModelStringInput | null,
  search?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUserStatusInput = {
  eq?: UserStatus | null,
  ne?: UserStatus | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email?: string | null,
  phone?: string | null,
  status?: UserStatus | null,
  active?: boolean | null,
  avatar?: string | null,
  search?: string | null,
  createdAt?: string | null,
  profile?: Profile | null,
  groups?: ModelGroupUserConnection | null,
  logs?: ModelLogConnection | null,
  updatedAt: string,
};

export type Profile = {
  __typename: "Profile",
  userID: string,
  user?: User | null,
  doc?: string | null,
  docType?: DocTypes | null,
  docProfession?: string | null,
  profession?: string | null,
  specialties?: string | null,
  subSpecialties?: string | null,
  bio?: string | null,
  gender?: GenderOptions | null,
  birth?: string | null,
  birthDay?: string | null,
  notes?: string | null,
  allowCookiesPreference?: boolean | null,
  allowCookiesStatistic?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export enum DocTypes {
  CPF = "CPF",
  CNPJ = "CNPJ",
  PASSPORT = "PASSPORT",
}


export enum GenderOptions {
  M = "M",
  F = "F",
  UNKNOWN = "UNKNOWN",
}


export type ModelGroupUserConnection = {
  __typename: "ModelGroupUserConnection",
  items:  Array<GroupUser | null >,
  nextToken?: string | null,
};

export type GroupUser = {
  __typename: "GroupUser",
  id: string,
  group: string,
  userID: string,
  user?: User | null,
  profileID: string,
  profile?: Profile | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type ModelLogConnection = {
  __typename: "ModelLogConnection",
  items:  Array<Log | null >,
  nextToken?: string | null,
};

export type Log = {
  __typename: "Log",
  id: string,
  userID: string,
  source: LogSource,
  user?: User | null,
  title?: string | null,
  description?: string | null,
  manufacturer?: string | null,
  model?: string | null,
  osName?: string | null,
  osVersion?: string | null,
  platform?: string | null,
  uuid?: string | null,
  ip?: string | null,
  city?: string | null,
  region?: string | null,
  country?: string | null,
  provider?: string | null,
  lat?: number | null,
  lng?: number | null,
  createdAt?: string | null,
  isError?: boolean | null,
  updatedAt: string,
};

export enum LogSource {
  APP = "APP",
}


export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  status?: UserStatus | null,
  active?: boolean | null,
  avatar?: string | null,
  search?: string | null,
  createdAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateProfileInput = {
  userID: string,
  doc?: string | null,
  docType?: DocTypes | null,
  docProfession?: string | null,
  profession?: string | null,
  specialties?: string | null,
  subSpecialties?: string | null,
  bio?: string | null,
  gender?: GenderOptions | null,
  birth?: string | null,
  birthDay?: string | null,
  notes?: string | null,
  allowCookiesPreference?: boolean | null,
  allowCookiesStatistic?: boolean | null,
};

export type ModelProfileConditionInput = {
  doc?: ModelStringInput | null,
  docType?: ModelDocTypesInput | null,
  docProfession?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  specialties?: ModelStringInput | null,
  subSpecialties?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  gender?: ModelGenderOptionsInput | null,
  birth?: ModelStringInput | null,
  birthDay?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  allowCookiesPreference?: ModelBooleanInput | null,
  allowCookiesStatistic?: ModelBooleanInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type ModelDocTypesInput = {
  eq?: DocTypes | null,
  ne?: DocTypes | null,
};

export type ModelGenderOptionsInput = {
  eq?: GenderOptions | null,
  ne?: GenderOptions | null,
};

export type UpdateProfileInput = {
  userID: string,
  doc?: string | null,
  docType?: DocTypes | null,
  docProfession?: string | null,
  profession?: string | null,
  specialties?: string | null,
  subSpecialties?: string | null,
  bio?: string | null,
  gender?: GenderOptions | null,
  birth?: string | null,
  birthDay?: string | null,
  notes?: string | null,
  allowCookiesPreference?: boolean | null,
  allowCookiesStatistic?: boolean | null,
};

export type DeleteProfileInput = {
  userID: string,
};

export type CreateGroupUserInput = {
  id?: string | null,
  group: string,
  userID: string,
  profileID: string,
  createdAt?: string | null,
};

export type ModelGroupUserConditionInput = {
  group?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGroupUserConditionInput | null > | null,
  or?: Array< ModelGroupUserConditionInput | null > | null,
  not?: ModelGroupUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type DeleteGroupUserInput = {
  id: string,
};

export type CreateAddressInput = {
  id?: string | null,
  userID: string,
  name?: string | null,
  reference?: string | null,
  street?: string | null,
  number?: string | null,
  complement?: string | null,
  zipcode?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  addressPagarmeID?: string | null,
};

export type ModelAddressConditionInput = {
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  street?: ModelStringInput | null,
  number?: ModelStringInput | null,
  complement?: ModelStringInput | null,
  zipcode?: ModelStringInput | null,
  neighborhood?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  addressPagarmeID?: ModelStringInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
};

export type Address = {
  __typename: "Address",
  id: string,
  userID: string,
  name?: string | null,
  reference?: string | null,
  street?: string | null,
  number?: string | null,
  complement?: string | null,
  zipcode?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  addressPagarmeID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAddressInput = {
  id: string,
  userID?: string | null,
  name?: string | null,
  reference?: string | null,
  street?: string | null,
  number?: string | null,
  complement?: string | null,
  zipcode?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
  country?: string | null,
  addressPagarmeID?: string | null,
};

export type DeleteAddressInput = {
  id: string,
};

export type CreatePayMethodInput = {
  id?: string | null,
  userID: string,
  method: PaymentMethods,
  number?: string | null,
  holderName?: string | null,
  holderDocument?: string | null,
  expMonth?: number | null,
  expYear?: number | null,
  cvv?: string | null,
  brand?: string | null,
  label?: string | null,
  cardPagarmeID?: string | null,
};

export enum PaymentMethods {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
  PIX = "PIX",
  ONDELIVERY = "ONDELIVERY",
}


export type ModelPayMethodConditionInput = {
  userID?: ModelIDInput | null,
  method?: ModelPaymentMethodsInput | null,
  number?: ModelStringInput | null,
  holderName?: ModelStringInput | null,
  holderDocument?: ModelStringInput | null,
  expMonth?: ModelIntInput | null,
  expYear?: ModelIntInput | null,
  cvv?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  label?: ModelStringInput | null,
  cardPagarmeID?: ModelStringInput | null,
  and?: Array< ModelPayMethodConditionInput | null > | null,
  or?: Array< ModelPayMethodConditionInput | null > | null,
  not?: ModelPayMethodConditionInput | null,
};

export type ModelPaymentMethodsInput = {
  eq?: PaymentMethods | null,
  ne?: PaymentMethods | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type PayMethod = {
  __typename: "PayMethod",
  id: string,
  userID: string,
  method: PaymentMethods,
  number?: string | null,
  holderName?: string | null,
  holderDocument?: string | null,
  expMonth?: number | null,
  expYear?: number | null,
  cvv?: string | null,
  brand?: string | null,
  label?: string | null,
  cardPagarmeID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePayMethodInput = {
  id: string,
  userID?: string | null,
  method?: PaymentMethods | null,
  number?: string | null,
  holderName?: string | null,
  holderDocument?: string | null,
  expMonth?: number | null,
  expYear?: number | null,
  cvv?: string | null,
  brand?: string | null,
  label?: string | null,
  cardPagarmeID?: string | null,
};

export type DeletePayMethodInput = {
  id: string,
};

export type CreateLogInput = {
  id?: string | null,
  userID: string,
  source: LogSource,
  title?: string | null,
  description?: string | null,
  manufacturer?: string | null,
  model?: string | null,
  osName?: string | null,
  osVersion?: string | null,
  platform?: string | null,
  uuid?: string | null,
  ip?: string | null,
  city?: string | null,
  region?: string | null,
  country?: string | null,
  provider?: string | null,
  lat?: number | null,
  lng?: number | null,
  createdAt?: string | null,
  isError?: boolean | null,
};

export type ModelLogConditionInput = {
  userID?: ModelIDInput | null,
  source?: ModelLogSourceInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  manufacturer?: ModelStringInput | null,
  model?: ModelStringInput | null,
  osName?: ModelStringInput | null,
  osVersion?: ModelStringInput | null,
  platform?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  ip?: ModelStringInput | null,
  city?: ModelStringInput | null,
  region?: ModelStringInput | null,
  country?: ModelStringInput | null,
  provider?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  isError?: ModelBooleanInput | null,
  and?: Array< ModelLogConditionInput | null > | null,
  or?: Array< ModelLogConditionInput | null > | null,
  not?: ModelLogConditionInput | null,
};

export type ModelLogSourceInput = {
  eq?: LogSource | null,
  ne?: LogSource | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type CreateConfigInput = {
  id?: string | null,
  googleAnalyticsID?: string | null,
  googleSiteVerification?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  youtube?: string | null,
  linkedin?: string | null,
  phoneSac?: string | null,
  phoneWhatsapp?: string | null,
};

export type ModelConfigConditionInput = {
  googleAnalyticsID?: ModelStringInput | null,
  googleSiteVerification?: ModelStringInput | null,
  facebook?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  youtube?: ModelStringInput | null,
  linkedin?: ModelStringInput | null,
  phoneSac?: ModelStringInput | null,
  phoneWhatsapp?: ModelStringInput | null,
  and?: Array< ModelConfigConditionInput | null > | null,
  or?: Array< ModelConfigConditionInput | null > | null,
  not?: ModelConfigConditionInput | null,
};

export type Config = {
  __typename: "Config",
  id: string,
  googleAnalyticsID?: string | null,
  googleSiteVerification?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  youtube?: string | null,
  linkedin?: string | null,
  phoneSac?: string | null,
  phoneWhatsapp?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateConfigInput = {
  id: string,
  googleAnalyticsID?: string | null,
  googleSiteVerification?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  youtube?: string | null,
  linkedin?: string | null,
  phoneSac?: string | null,
  phoneWhatsapp?: string | null,
};

export type CreateMidiaInput = {
  id?: string | null,
  key: string,
  type?: MidiaTypes | null,
  title?: string | null,
  subTitle?: string | null,
  description?: string | null,
  link?: string | null,
  identifyText?: string | null,
};

export enum MidiaTypes {
  AUDIO = "AUDIO",
  VIDEO = "VIDEO",
  IMAGE = "IMAGE",
  PDF = "PDF",
  DOC = "DOC",
  XLS = "XLS",
  FILE = "FILE",
  ZIP = "ZIP",
}


export type ModelMidiaConditionInput = {
  key?: ModelStringInput | null,
  type?: ModelMidiaTypesInput | null,
  title?: ModelStringInput | null,
  subTitle?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  identifyText?: ModelStringInput | null,
  and?: Array< ModelMidiaConditionInput | null > | null,
  or?: Array< ModelMidiaConditionInput | null > | null,
  not?: ModelMidiaConditionInput | null,
};

export type ModelMidiaTypesInput = {
  eq?: MidiaTypes | null,
  ne?: MidiaTypes | null,
};

export type Midia = {
  __typename: "Midia",
  id: string,
  key: string,
  type?: MidiaTypes | null,
  title?: string | null,
  subTitle?: string | null,
  description?: string | null,
  link?: string | null,
  identifyText?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMidiaInput = {
  id: string,
  key?: string | null,
  type?: MidiaTypes | null,
  title?: string | null,
  subTitle?: string | null,
  description?: string | null,
  link?: string | null,
  identifyText?: string | null,
};

export type DeleteMidiaInput = {
  id: string,
};

export type CreateNotifyInput = {
  id?: string | null,
  userID: string,
  date: string,
  content?: string | null,
  link?: string | null,
  viewed?: boolean | null,
};

export type ModelNotifyConditionInput = {
  userID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  content?: ModelStringInput | null,
  link?: ModelStringInput | null,
  viewed?: ModelBooleanInput | null,
  and?: Array< ModelNotifyConditionInput | null > | null,
  or?: Array< ModelNotifyConditionInput | null > | null,
  not?: ModelNotifyConditionInput | null,
};

export type Notify = {
  __typename: "Notify",
  id: string,
  userID: string,
  date: string,
  content?: string | null,
  link?: string | null,
  viewed?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type DeleteNotifyInput = {
  id: string,
};

export type ModelMidiaFilterInput = {
  id?: ModelIDInput | null,
  key?: ModelStringInput | null,
  type?: ModelMidiaTypesInput | null,
  title?: ModelStringInput | null,
  subTitle?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  identifyText?: ModelStringInput | null,
  and?: Array< ModelMidiaFilterInput | null > | null,
  or?: Array< ModelMidiaFilterInput | null > | null,
  not?: ModelMidiaFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelMidiaConnection = {
  __typename: "ModelMidiaConnection",
  items:  Array<Midia | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  status?: ModelUserStatusInput | null,
  active?: ModelBooleanInput | null,
  avatar?: ModelStringInput | null,
  search?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelProfileFilterInput = {
  userID?: ModelIDInput | null,
  doc?: ModelStringInput | null,
  docType?: ModelDocTypesInput | null,
  docProfession?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  specialties?: ModelStringInput | null,
  subSpecialties?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  gender?: ModelGenderOptionsInput | null,
  birth?: ModelStringInput | null,
  birthDay?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  allowCookiesPreference?: ModelBooleanInput | null,
  allowCookiesStatistic?: ModelBooleanInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelGroupUserFilterInput = {
  id?: ModelIDInput | null,
  group?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGroupUserFilterInput | null > | null,
  or?: Array< ModelGroupUserFilterInput | null > | null,
  not?: ModelGroupUserFilterInput | null,
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  street?: ModelStringInput | null,
  number?: ModelStringInput | null,
  complement?: ModelStringInput | null,
  zipcode?: ModelStringInput | null,
  neighborhood?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  addressPagarmeID?: ModelStringInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
};

export type ModelPayMethodFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  method?: ModelPaymentMethodsInput | null,
  number?: ModelStringInput | null,
  holderName?: ModelStringInput | null,
  holderDocument?: ModelStringInput | null,
  expMonth?: ModelIntInput | null,
  expYear?: ModelIntInput | null,
  cvv?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  label?: ModelStringInput | null,
  cardPagarmeID?: ModelStringInput | null,
  and?: Array< ModelPayMethodFilterInput | null > | null,
  or?: Array< ModelPayMethodFilterInput | null > | null,
  not?: ModelPayMethodFilterInput | null,
};

export type ModelPayMethodConnection = {
  __typename: "ModelPayMethodConnection",
  items:  Array<PayMethod | null >,
  nextToken?: string | null,
};

export type ModelLogFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  source?: ModelLogSourceInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  manufacturer?: ModelStringInput | null,
  model?: ModelStringInput | null,
  osName?: ModelStringInput | null,
  osVersion?: ModelStringInput | null,
  platform?: ModelStringInput | null,
  uuid?: ModelStringInput | null,
  ip?: ModelStringInput | null,
  city?: ModelStringInput | null,
  region?: ModelStringInput | null,
  country?: ModelStringInput | null,
  provider?: ModelStringInput | null,
  lat?: ModelFloatInput | null,
  lng?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  isError?: ModelBooleanInput | null,
  and?: Array< ModelLogFilterInput | null > | null,
  or?: Array< ModelLogFilterInput | null > | null,
  not?: ModelLogFilterInput | null,
};

export type ModelNotifyFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  content?: ModelStringInput | null,
  link?: ModelStringInput | null,
  viewed?: ModelBooleanInput | null,
  and?: Array< ModelNotifyFilterInput | null > | null,
  or?: Array< ModelNotifyFilterInput | null > | null,
  not?: ModelNotifyFilterInput | null,
};

export type ModelNotifyConnection = {
  __typename: "ModelNotifyConnection",
  items:  Array<Notify | null >,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    status?: UserStatus | null,
    active?: boolean | null,
    avatar?: string | null,
    search?: string | null,
    createdAt?: string | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        phone?: string | null,
        status?: UserStatus | null,
        active?: boolean | null,
        avatar?: string | null,
        search?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      birthDay?: string | null,
      notes?: string | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    groups?:  {
      __typename: "ModelGroupUserConnection",
      items:  Array< {
        __typename: "GroupUser",
        id: string,
        group: string,
        userID: string,
        profileID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        id: string,
        userID: string,
        source: LogSource,
        title?: string | null,
        description?: string | null,
        manufacturer?: string | null,
        model?: string | null,
        osName?: string | null,
        osVersion?: string | null,
        platform?: string | null,
        uuid?: string | null,
        ip?: string | null,
        city?: string | null,
        region?: string | null,
        country?: string | null,
        provider?: string | null,
        lat?: number | null,
        lng?: number | null,
        createdAt?: string | null,
        isError?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    status?: UserStatus | null,
    active?: boolean | null,
    avatar?: string | null,
    search?: string | null,
    createdAt?: string | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        phone?: string | null,
        status?: UserStatus | null,
        active?: boolean | null,
        avatar?: string | null,
        search?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      birthDay?: string | null,
      notes?: string | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    groups?:  {
      __typename: "ModelGroupUserConnection",
      items:  Array< {
        __typename: "GroupUser",
        id: string,
        group: string,
        userID: string,
        profileID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        id: string,
        userID: string,
        source: LogSource,
        title?: string | null,
        description?: string | null,
        manufacturer?: string | null,
        model?: string | null,
        osName?: string | null,
        osVersion?: string | null,
        platform?: string | null,
        uuid?: string | null,
        ip?: string | null,
        city?: string | null,
        region?: string | null,
        country?: string | null,
        provider?: string | null,
        lat?: number | null,
        lng?: number | null,
        createdAt?: string | null,
        isError?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    status?: UserStatus | null,
    active?: boolean | null,
    avatar?: string | null,
    search?: string | null,
    createdAt?: string | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        phone?: string | null,
        status?: UserStatus | null,
        active?: boolean | null,
        avatar?: string | null,
        search?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      birthDay?: string | null,
      notes?: string | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    groups?:  {
      __typename: "ModelGroupUserConnection",
      items:  Array< {
        __typename: "GroupUser",
        id: string,
        group: string,
        userID: string,
        profileID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        id: string,
        userID: string,
        source: LogSource,
        title?: string | null,
        description?: string | null,
        manufacturer?: string | null,
        model?: string | null,
        osName?: string | null,
        osVersion?: string | null,
        platform?: string | null,
        uuid?: string | null,
        ip?: string | null,
        city?: string | null,
        region?: string | null,
        country?: string | null,
        provider?: string | null,
        lat?: number | null,
        lng?: number | null,
        createdAt?: string | null,
        isError?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      profile?:  {
        __typename: "Profile",
        userID: string,
        doc?: string | null,
        docType?: DocTypes | null,
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        birthDay?: string | null,
        notes?: string | null,
        allowCookiesPreference?: boolean | null,
        allowCookiesStatistic?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    doc?: string | null,
    docType?: DocTypes | null,
    docProfession?: string | null,
    profession?: string | null,
    specialties?: string | null,
    subSpecialties?: string | null,
    bio?: string | null,
    gender?: GenderOptions | null,
    birth?: string | null,
    birthDay?: string | null,
    notes?: string | null,
    allowCookiesPreference?: boolean | null,
    allowCookiesStatistic?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      profile?:  {
        __typename: "Profile",
        userID: string,
        doc?: string | null,
        docType?: DocTypes | null,
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        birthDay?: string | null,
        notes?: string | null,
        allowCookiesPreference?: boolean | null,
        allowCookiesStatistic?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    doc?: string | null,
    docType?: DocTypes | null,
    docProfession?: string | null,
    profession?: string | null,
    specialties?: string | null,
    subSpecialties?: string | null,
    bio?: string | null,
    gender?: GenderOptions | null,
    birth?: string | null,
    birthDay?: string | null,
    notes?: string | null,
    allowCookiesPreference?: boolean | null,
    allowCookiesStatistic?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      profile?:  {
        __typename: "Profile",
        userID: string,
        doc?: string | null,
        docType?: DocTypes | null,
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        birthDay?: string | null,
        notes?: string | null,
        allowCookiesPreference?: boolean | null,
        allowCookiesStatistic?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    doc?: string | null,
    docType?: DocTypes | null,
    docProfession?: string | null,
    profession?: string | null,
    specialties?: string | null,
    subSpecialties?: string | null,
    bio?: string | null,
    gender?: GenderOptions | null,
    birth?: string | null,
    birthDay?: string | null,
    notes?: string | null,
    allowCookiesPreference?: boolean | null,
    allowCookiesStatistic?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupUserMutationVariables = {
  input: CreateGroupUserInput,
  condition?: ModelGroupUserConditionInput | null,
};

export type CreateGroupUserMutation = {
  createGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    group: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      profile?:  {
        __typename: "Profile",
        userID: string,
        doc?: string | null,
        docType?: DocTypes | null,
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        birthDay?: string | null,
        notes?: string | null,
        allowCookiesPreference?: boolean | null,
        allowCookiesStatistic?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    profileID: string,
    profile?:  {
      __typename: "Profile",
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        phone?: string | null,
        status?: UserStatus | null,
        active?: boolean | null,
        avatar?: string | null,
        search?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      birthDay?: string | null,
      notes?: string | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteGroupUserMutationVariables = {
  input: DeleteGroupUserInput,
  condition?: ModelGroupUserConditionInput | null,
};

export type DeleteGroupUserMutation = {
  deleteGroupUser?:  {
    __typename: "GroupUser",
    id: string,
    group: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      profile?:  {
        __typename: "Profile",
        userID: string,
        doc?: string | null,
        docType?: DocTypes | null,
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        birthDay?: string | null,
        notes?: string | null,
        allowCookiesPreference?: boolean | null,
        allowCookiesStatistic?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    profileID: string,
    profile?:  {
      __typename: "Profile",
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        phone?: string | null,
        status?: UserStatus | null,
        active?: boolean | null,
        avatar?: string | null,
        search?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      birthDay?: string | null,
      notes?: string | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    name?: string | null,
    reference?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    addressPagarmeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    name?: string | null,
    reference?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    addressPagarmeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    id: string,
    userID: string,
    name?: string | null,
    reference?: string | null,
    street?: string | null,
    number?: string | null,
    complement?: string | null,
    zipcode?: string | null,
    neighborhood?: string | null,
    city?: string | null,
    state?: string | null,
    country?: string | null,
    addressPagarmeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePayMethodMutationVariables = {
  input: CreatePayMethodInput,
  condition?: ModelPayMethodConditionInput | null,
};

export type CreatePayMethodMutation = {
  createPayMethod?:  {
    __typename: "PayMethod",
    id: string,
    userID: string,
    method: PaymentMethods,
    number?: string | null,
    holderName?: string | null,
    holderDocument?: string | null,
    expMonth?: number | null,
    expYear?: number | null,
    cvv?: string | null,
    brand?: string | null,
    label?: string | null,
    cardPagarmeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePayMethodMutationVariables = {
  input: UpdatePayMethodInput,
  condition?: ModelPayMethodConditionInput | null,
};

export type UpdatePayMethodMutation = {
  updatePayMethod?:  {
    __typename: "PayMethod",
    id: string,
    userID: string,
    method: PaymentMethods,
    number?: string | null,
    holderName?: string | null,
    holderDocument?: string | null,
    expMonth?: number | null,
    expYear?: number | null,
    cvv?: string | null,
    brand?: string | null,
    label?: string | null,
    cardPagarmeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePayMethodMutationVariables = {
  input: DeletePayMethodInput,
  condition?: ModelPayMethodConditionInput | null,
};

export type DeletePayMethodMutation = {
  deletePayMethod?:  {
    __typename: "PayMethod",
    id: string,
    userID: string,
    method: PaymentMethods,
    number?: string | null,
    holderName?: string | null,
    holderDocument?: string | null,
    expMonth?: number | null,
    expYear?: number | null,
    cvv?: string | null,
    brand?: string | null,
    label?: string | null,
    cardPagarmeID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLogMutationVariables = {
  input: CreateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type CreateLogMutation = {
  createLog?:  {
    __typename: "Log",
    id: string,
    userID: string,
    source: LogSource,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      profile?:  {
        __typename: "Profile",
        userID: string,
        doc?: string | null,
        docType?: DocTypes | null,
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        birthDay?: string | null,
        notes?: string | null,
        allowCookiesPreference?: boolean | null,
        allowCookiesStatistic?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    title?: string | null,
    description?: string | null,
    manufacturer?: string | null,
    model?: string | null,
    osName?: string | null,
    osVersion?: string | null,
    platform?: string | null,
    uuid?: string | null,
    ip?: string | null,
    city?: string | null,
    region?: string | null,
    country?: string | null,
    provider?: string | null,
    lat?: number | null,
    lng?: number | null,
    createdAt?: string | null,
    isError?: boolean | null,
    updatedAt: string,
  } | null,
};

export type CreateConfigMutationVariables = {
  input: CreateConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type CreateConfigMutation = {
  createConfig?:  {
    __typename: "Config",
    id: string,
    googleAnalyticsID?: string | null,
    googleSiteVerification?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    youtube?: string | null,
    linkedin?: string | null,
    phoneSac?: string | null,
    phoneWhatsapp?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConfigMutationVariables = {
  input: UpdateConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type UpdateConfigMutation = {
  updateConfig?:  {
    __typename: "Config",
    id: string,
    googleAnalyticsID?: string | null,
    googleSiteVerification?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    youtube?: string | null,
    linkedin?: string | null,
    phoneSac?: string | null,
    phoneWhatsapp?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMidiaMutationVariables = {
  input: CreateMidiaInput,
  condition?: ModelMidiaConditionInput | null,
};

export type CreateMidiaMutation = {
  createMidia?:  {
    __typename: "Midia",
    id: string,
    key: string,
    type?: MidiaTypes | null,
    title?: string | null,
    subTitle?: string | null,
    description?: string | null,
    link?: string | null,
    identifyText?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMidiaMutationVariables = {
  input: UpdateMidiaInput,
  condition?: ModelMidiaConditionInput | null,
};

export type UpdateMidiaMutation = {
  updateMidia?:  {
    __typename: "Midia",
    id: string,
    key: string,
    type?: MidiaTypes | null,
    title?: string | null,
    subTitle?: string | null,
    description?: string | null,
    link?: string | null,
    identifyText?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMidiaMutationVariables = {
  input: DeleteMidiaInput,
  condition?: ModelMidiaConditionInput | null,
};

export type DeleteMidiaMutation = {
  deleteMidia?:  {
    __typename: "Midia",
    id: string,
    key: string,
    type?: MidiaTypes | null,
    title?: string | null,
    subTitle?: string | null,
    description?: string | null,
    link?: string | null,
    identifyText?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotifyMutationVariables = {
  input: CreateNotifyInput,
  condition?: ModelNotifyConditionInput | null,
};

export type CreateNotifyMutation = {
  createNotify?:  {
    __typename: "Notify",
    id: string,
    userID: string,
    date: string,
    content?: string | null,
    link?: string | null,
    viewed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotifyMutationVariables = {
  input: DeleteNotifyInput,
  condition?: ModelNotifyConditionInput | null,
};

export type DeleteNotifyMutation = {
  deleteNotify?:  {
    __typename: "Notify",
    id: string,
    userID: string,
    date: string,
    content?: string | null,
    link?: string | null,
    viewed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    status?: UserStatus | null,
    active?: boolean | null,
    avatar?: string | null,
    search?: string | null,
    createdAt?: string | null,
    profile?:  {
      __typename: "Profile",
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        phone?: string | null,
        status?: UserStatus | null,
        active?: boolean | null,
        avatar?: string | null,
        search?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      birthDay?: string | null,
      notes?: string | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    groups?:  {
      __typename: "ModelGroupUserConnection",
      items:  Array< {
        __typename: "GroupUser",
        id: string,
        group: string,
        userID: string,
        profileID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        id: string,
        userID: string,
        source: LogSource,
        title?: string | null,
        description?: string | null,
        manufacturer?: string | null,
        model?: string | null,
        osName?: string | null,
        osVersion?: string | null,
        platform?: string | null,
        uuid?: string | null,
        ip?: string | null,
        city?: string | null,
        region?: string | null,
        country?: string | null,
        provider?: string | null,
        lat?: number | null,
        lng?: number | null,
        createdAt?: string | null,
        isError?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetProfileQueryVariables = {
  userID: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      profile?:  {
        __typename: "Profile",
        userID: string,
        doc?: string | null,
        docType?: DocTypes | null,
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        birthDay?: string | null,
        notes?: string | null,
        allowCookiesPreference?: boolean | null,
        allowCookiesStatistic?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    doc?: string | null,
    docType?: DocTypes | null,
    docProfession?: string | null,
    profession?: string | null,
    specialties?: string | null,
    subSpecialties?: string | null,
    bio?: string | null,
    gender?: GenderOptions | null,
    birth?: string | null,
    birthDay?: string | null,
    notes?: string | null,
    allowCookiesPreference?: boolean | null,
    allowCookiesStatistic?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetConfigQueryVariables = {
  id: string,
};

export type GetConfigQuery = {
  getConfig?:  {
    __typename: "Config",
    id: string,
    googleAnalyticsID?: string | null,
    googleSiteVerification?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    youtube?: string | null,
    linkedin?: string | null,
    phoneSac?: string | null,
    phoneWhatsapp?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMidiasQueryVariables = {
  id?: string | null,
  filter?: ModelMidiaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMidiasQuery = {
  listMidias?:  {
    __typename: "ModelMidiaConnection",
    items:  Array< {
      __typename: "Midia",
      id: string,
      key: string,
      type?: MidiaTypes | null,
      title?: string | null,
      subTitle?: string | null,
      description?: string | null,
      link?: string | null,
      identifyText?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserByEmailQuery = {
  getUserByEmail?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      profile?:  {
        __typename: "Profile",
        userID: string,
        doc?: string | null,
        docType?: DocTypes | null,
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        birthDay?: string | null,
        notes?: string | null,
        allowCookiesPreference?: boolean | null,
        allowCookiesStatistic?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserByPhoneQueryVariables = {
  phone: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserByPhoneQuery = {
  getUserByPhone?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      profile?:  {
        __typename: "Profile",
        userID: string,
        doc?: string | null,
        docType?: DocTypes | null,
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        birthDay?: string | null,
        notes?: string | null,
        allowCookiesPreference?: boolean | null,
        allowCookiesStatistic?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersByStatusCreatedAtQueryVariables = {
  status: UserStatus,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersByStatusCreatedAtQuery = {
  listUsersByStatusCreatedAt?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      status?: UserStatus | null,
      active?: boolean | null,
      avatar?: string | null,
      search?: string | null,
      createdAt?: string | null,
      profile?:  {
        __typename: "Profile",
        userID: string,
        doc?: string | null,
        docType?: DocTypes | null,
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        birthDay?: string | null,
        notes?: string | null,
        allowCookiesPreference?: boolean | null,
        allowCookiesStatistic?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      groups?:  {
        __typename: "ModelGroupUserConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersByBirthDayQueryVariables = {
  birthDay: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersByBirthDayQuery = {
  listUsersByBirthDay?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        phone?: string | null,
        status?: UserStatus | null,
        active?: boolean | null,
        avatar?: string | null,
        search?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      doc?: string | null,
      docType?: DocTypes | null,
      docProfession?: string | null,
      profession?: string | null,
      specialties?: string | null,
      subSpecialties?: string | null,
      bio?: string | null,
      gender?: GenderOptions | null,
      birth?: string | null,
      birthDay?: string | null,
      notes?: string | null,
      allowCookiesPreference?: boolean | null,
      allowCookiesStatistic?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersByGroupQueryVariables = {
  group: string,
  userID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersByGroupQuery = {
  listUsersByGroup?:  {
    __typename: "ModelGroupUserConnection",
    items:  Array< {
      __typename: "GroupUser",
      id: string,
      group: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        phone?: string | null,
        status?: UserStatus | null,
        active?: boolean | null,
        avatar?: string | null,
        search?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      profileID: string,
      profile?:  {
        __typename: "Profile",
        userID: string,
        doc?: string | null,
        docType?: DocTypes | null,
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        birthDay?: string | null,
        notes?: string | null,
        allowCookiesPreference?: boolean | null,
        allowCookiesStatistic?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListGroupsByUserQueryVariables = {
  userID: string,
  group?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsByUserQuery = {
  listGroupsByUser?:  {
    __typename: "ModelGroupUserConnection",
    items:  Array< {
      __typename: "GroupUser",
      id: string,
      group: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        phone?: string | null,
        status?: UserStatus | null,
        active?: boolean | null,
        avatar?: string | null,
        search?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      profileID: string,
      profile?:  {
        __typename: "Profile",
        userID: string,
        doc?: string | null,
        docType?: DocTypes | null,
        docProfession?: string | null,
        profession?: string | null,
        specialties?: string | null,
        subSpecialties?: string | null,
        bio?: string | null,
        gender?: GenderOptions | null,
        birth?: string | null,
        birthDay?: string | null,
        notes?: string | null,
        allowCookiesPreference?: boolean | null,
        allowCookiesStatistic?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAddressesByUserQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesByUserQuery = {
  listAddressesByUser?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      userID: string,
      name?: string | null,
      reference?: string | null,
      street?: string | null,
      number?: string | null,
      complement?: string | null,
      zipcode?: string | null,
      neighborhood?: string | null,
      city?: string | null,
      state?: string | null,
      country?: string | null,
      addressPagarmeID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPayMethodsByUserQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPayMethodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPayMethodsByUserQuery = {
  listPayMethodsByUser?:  {
    __typename: "ModelPayMethodConnection",
    items:  Array< {
      __typename: "PayMethod",
      id: string,
      userID: string,
      method: PaymentMethods,
      number?: string | null,
      holderName?: string | null,
      holderDocument?: string | null,
      expMonth?: number | null,
      expYear?: number | null,
      cvv?: string | null,
      brand?: string | null,
      label?: string | null,
      cardPagarmeID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLogsByUserCreatedAtQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsByUserCreatedAtQuery = {
  listLogsByUserCreatedAt?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userID: string,
      source: LogSource,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        phone?: string | null,
        status?: UserStatus | null,
        active?: boolean | null,
        avatar?: string | null,
        search?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      title?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      model?: string | null,
      osName?: string | null,
      osVersion?: string | null,
      platform?: string | null,
      uuid?: string | null,
      ip?: string | null,
      city?: string | null,
      region?: string | null,
      country?: string | null,
      provider?: string | null,
      lat?: number | null,
      lng?: number | null,
      createdAt?: string | null,
      isError?: boolean | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLogsBySourceCreatedAtQueryVariables = {
  source: LogSource,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsBySourceCreatedAtQuery = {
  listLogsBySourceCreatedAt?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userID: string,
      source: LogSource,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email?: string | null,
        phone?: string | null,
        status?: UserStatus | null,
        active?: boolean | null,
        avatar?: string | null,
        search?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      title?: string | null,
      description?: string | null,
      manufacturer?: string | null,
      model?: string | null,
      osName?: string | null,
      osVersion?: string | null,
      platform?: string | null,
      uuid?: string | null,
      ip?: string | null,
      city?: string | null,
      region?: string | null,
      country?: string | null,
      provider?: string | null,
      lat?: number | null,
      lng?: number | null,
      createdAt?: string | null,
      isError?: boolean | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMidiaByKeyQueryVariables = {
  key: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMidiaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMidiaByKeyQuery = {
  listMidiaByKey?:  {
    __typename: "ModelMidiaConnection",
    items:  Array< {
      __typename: "Midia",
      id: string,
      key: string,
      type?: MidiaTypes | null,
      title?: string | null,
      subTitle?: string | null,
      description?: string | null,
      link?: string | null,
      identifyText?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotifyByUserDateQueryVariables = {
  userID: string,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotifyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotifyByUserDateQuery = {
  notifyByUserDate?:  {
    __typename: "ModelNotifyConnection",
    items:  Array< {
      __typename: "Notify",
      id: string,
      userID: string,
      date: string,
      content?: string | null,
      link?: string | null,
      viewed?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};
