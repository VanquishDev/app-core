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
  groups?: ModelUserGroupConnection | null,
  tags?: ModelUserTagConnection | null,
  logs?: ModelLogConnection | null,
  posts?: ModelPostConnection | null,
  comments?: ModelCommentConnection | null,
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


export type ModelUserGroupConnection = {
  __typename: "ModelUserGroupConnection",
  items:  Array<UserGroup | null >,
  nextToken?: string | null,
};

export type UserGroup = {
  __typename: "UserGroup",
  id: string,
  group: string,
  userID: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserTagConnection = {
  __typename: "ModelUserTagConnection",
  items:  Array<UserTag | null >,
  nextToken?: string | null,
};

export type UserTag = {
  __typename: "UserTag",
  id: string,
  tagID: string,
  tag?: Tag | null,
  userID: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  name: string,
  type: TagTypes,
  status: TagStatus,
  createdAt: string,
  updatedAt: string,
};

export enum TagTypes {
  MODALITIES = "MODALITIES",
  SPECIALTIES = "SPECIALTIES",
  REGIONS = "REGIONS",
  GROUPS = "GROUPS",
  AREAS = "AREAS",
}


export enum TagStatus {
  ON = "ON",
  OFF = "OFF",
}


export type ModelLogConnection = {
  __typename: "ModelLogConnection",
  items:  Array<Log | null >,
  nextToken?: string | null,
};

export type Log = {
  __typename: "Log",
  id: string,
  userID: string,
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
  createdAt: string,
  isError?: boolean | null,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  type: PostProviders,
  title: string,
  description?: string | null,
  content?: string | null,
  vimeoCode?: string | null,
  videoKey?: string | null,
  thumbnail?: string | null,
  createdAt?: string | null,
  userID: string,
  user?: User | null,
  tags?: ModelPostTagConnection | null,
  comments?: ModelCommentConnection | null,
  updatedAt: string,
};

export enum PostProviders {
  VIMEO = "VIMEO",
  S3 = "S3",
}


export type ModelPostTagConnection = {
  __typename: "ModelPostTagConnection",
  items:  Array<PostTag | null >,
  nextToken?: string | null,
};

export type PostTag = {
  __typename: "PostTag",
  id: string,
  postID: string,
  post?: Post | null,
  tagID: string,
  tag?: Tag | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  postID: string,
  post?: Post | null,
  userID: string,
  user?: User | null,
  content: string,
  createdAt?: string | null,
  updatedAt: string,
};

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

export type CreateUserGroupInput = {
  id?: string | null,
  group: string,
  userID: string,
};

export type ModelUserGroupConditionInput = {
  group?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelUserGroupConditionInput | null > | null,
  or?: Array< ModelUserGroupConditionInput | null > | null,
  not?: ModelUserGroupConditionInput | null,
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

export type DeleteUserGroupInput = {
  id: string,
};

export type CreateUserTagInput = {
  id?: string | null,
  tagID: string,
  userID: string,
};

export type ModelUserTagConditionInput = {
  tagID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelUserTagConditionInput | null > | null,
  or?: Array< ModelUserTagConditionInput | null > | null,
  not?: ModelUserTagConditionInput | null,
};

export type DeleteUserTagInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  name: string,
  type: TagTypes,
  status: TagStatus,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelTagTypesInput | null,
  status?: ModelTagStatusInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type ModelTagTypesInput = {
  eq?: TagTypes | null,
  ne?: TagTypes | null,
};

export type ModelTagStatusInput = {
  eq?: TagStatus | null,
  ne?: TagStatus | null,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
  type?: TagTypes | null,
  status?: TagStatus | null,
};

export type DeleteTagInput = {
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
  zipCode?: string | null,
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
  zipCode?: ModelStringInput | null,
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
  zipCode?: string | null,
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
  zipCode?: string | null,
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
  WhatsApp?: string | null,
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
  WhatsApp?: ModelStringInput | null,
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
  WhatsApp?: string | null,
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
  WhatsApp?: string | null,
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
  content?: string | null,
  link?: string | null,
  viewed?: boolean | null,
  createdAt?: string | null,
};

export type ModelNotifyConditionInput = {
  userID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  link?: ModelStringInput | null,
  viewed?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNotifyConditionInput | null > | null,
  or?: Array< ModelNotifyConditionInput | null > | null,
  not?: ModelNotifyConditionInput | null,
};

export type Notify = {
  __typename: "Notify",
  id: string,
  userID: string,
  content?: string | null,
  link?: string | null,
  viewed?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type DeleteNotifyInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  type: PostProviders,
  title: string,
  description?: string | null,
  content?: string | null,
  vimeoCode?: string | null,
  videoKey?: string | null,
  thumbnail?: string | null,
  createdAt?: string | null,
  userID: string,
};

export type ModelPostConditionInput = {
  type?: ModelPostProvidersInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  vimeoCode?: ModelStringInput | null,
  videoKey?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelPostProvidersInput = {
  eq?: PostProviders | null,
  ne?: PostProviders | null,
};

export type UpdatePostInput = {
  id: string,
  type?: PostProviders | null,
  title?: string | null,
  description?: string | null,
  content?: string | null,
  vimeoCode?: string | null,
  videoKey?: string | null,
  thumbnail?: string | null,
  createdAt?: string | null,
  userID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreatePostTagInput = {
  id?: string | null,
  postID: string,
  tagID: string,
};

export type ModelPostTagConditionInput = {
  postID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelPostTagConditionInput | null > | null,
  or?: Array< ModelPostTagConditionInput | null > | null,
  not?: ModelPostTagConditionInput | null,
};

export type DeletePostTagInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  postID: string,
  userID: string,
  content: string,
  createdAt?: string | null,
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  userID?: string | null,
  content?: string | null,
  createdAt?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelTagTypesInput | null,
  status?: ModelTagStatusInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelConfigFilterInput = {
  id?: ModelIDInput | null,
  googleAnalyticsID?: ModelStringInput | null,
  googleSiteVerification?: ModelStringInput | null,
  facebook?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  youtube?: ModelStringInput | null,
  linkedin?: ModelStringInput | null,
  phoneSac?: ModelStringInput | null,
  WhatsApp?: ModelStringInput | null,
  and?: Array< ModelConfigFilterInput | null > | null,
  or?: Array< ModelConfigFilterInput | null > | null,
  not?: ModelConfigFilterInput | null,
};

export type ModelConfigConnection = {
  __typename: "ModelConfigConnection",
  items:  Array<Config | null >,
  nextToken?: string | null,
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

export type ModelUserGroupFilterInput = {
  id?: ModelIDInput | null,
  group?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelUserGroupFilterInput | null > | null,
  or?: Array< ModelUserGroupFilterInput | null > | null,
  not?: ModelUserGroupFilterInput | null,
};

export type ModelUserTagFilterInput = {
  id?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelUserTagFilterInput | null > | null,
  or?: Array< ModelUserTagFilterInput | null > | null,
  not?: ModelUserTagFilterInput | null,
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  street?: ModelStringInput | null,
  number?: ModelStringInput | null,
  complement?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
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
  content?: ModelStringInput | null,
  link?: ModelStringInput | null,
  viewed?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNotifyFilterInput | null > | null,
  or?: Array< ModelNotifyFilterInput | null > | null,
  not?: ModelNotifyFilterInput | null,
};

export type ModelNotifyConnection = {
  __typename: "ModelNotifyConnection",
  items:  Array<Notify | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelPostProvidersInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  content?: ModelStringInput | null,
  vimeoCode?: ModelStringInput | null,
  videoKey?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostTagFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelPostTagFilterInput | null > | null,
  or?: Array< ModelPostTagFilterInput | null > | null,
  not?: ModelPostTagFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
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
      __typename: "ModelUserGroupConnection",
      items:  Array< {
        __typename: "UserGroup",
        id: string,
        group: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelUserTagConnection",
      items:  Array< {
        __typename: "UserTag",
        id: string,
        tagID: string,
        userID: string,
        createdAt: string,
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
        createdAt: string,
        isError?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        type: PostProviders,
        title: string,
        description?: string | null,
        content?: string | null,
        vimeoCode?: string | null,
        videoKey?: string | null,
        thumbnail?: string | null,
        createdAt?: string | null,
        userID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userID: string,
        content: string,
        createdAt?: string | null,
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
      __typename: "ModelUserGroupConnection",
      items:  Array< {
        __typename: "UserGroup",
        id: string,
        group: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelUserTagConnection",
      items:  Array< {
        __typename: "UserTag",
        id: string,
        tagID: string,
        userID: string,
        createdAt: string,
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
        createdAt: string,
        isError?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        type: PostProviders,
        title: string,
        description?: string | null,
        content?: string | null,
        vimeoCode?: string | null,
        videoKey?: string | null,
        thumbnail?: string | null,
        createdAt?: string | null,
        userID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userID: string,
        content: string,
        createdAt?: string | null,
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
      __typename: "ModelUserGroupConnection",
      items:  Array< {
        __typename: "UserGroup",
        id: string,
        group: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelUserTagConnection",
      items:  Array< {
        __typename: "UserTag",
        id: string,
        tagID: string,
        userID: string,
        createdAt: string,
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
        createdAt: string,
        isError?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        type: PostProviders,
        title: string,
        description?: string | null,
        content?: string | null,
        vimeoCode?: string | null,
        videoKey?: string | null,
        thumbnail?: string | null,
        createdAt?: string | null,
        userID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userID: string,
        content: string,
        createdAt?: string | null,
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
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

export type CreateUserGroupMutationVariables = {
  input: CreateUserGroupInput,
  condition?: ModelUserGroupConditionInput | null,
};

export type CreateUserGroupMutation = {
  createUserGroup?:  {
    __typename: "UserGroup",
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserGroupMutationVariables = {
  input: DeleteUserGroupInput,
  condition?: ModelUserGroupConditionInput | null,
};

export type DeleteUserGroupMutation = {
  deleteUserGroup?:  {
    __typename: "UserGroup",
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserTagMutationVariables = {
  input: CreateUserTagInput,
  condition?: ModelUserTagConditionInput | null,
};

export type CreateUserTagMutation = {
  createUserTag?:  {
    __typename: "UserTag",
    id: string,
    tagID: string,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      type: TagTypes,
      status: TagStatus,
      createdAt: string,
      updatedAt: string,
    } | null,
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserTagMutationVariables = {
  input: DeleteUserTagInput,
  condition?: ModelUserTagConditionInput | null,
};

export type DeleteUserTagMutation = {
  deleteUserTag?:  {
    __typename: "UserTag",
    id: string,
    tagID: string,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      type: TagTypes,
      status: TagStatus,
      createdAt: string,
      updatedAt: string,
    } | null,
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    type: TagTypes,
    status: TagStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    type: TagTypes,
    status: TagStatus,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    type: TagTypes,
    status: TagStatus,
    createdAt: string,
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
    zipCode?: string | null,
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
    zipCode?: string | null,
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
    zipCode?: string | null,
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
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
    createdAt: string,
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
    WhatsApp?: string | null,
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
    WhatsApp?: string | null,
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
    content?: string | null,
    link?: string | null,
    viewed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    type: PostProviders,
    title: string,
    description?: string | null,
    content?: string | null,
    vimeoCode?: string | null,
    videoKey?: string | null,
    thumbnail?: string | null,
    createdAt?: string | null,
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelPostTagConnection",
      items:  Array< {
        __typename: "PostTag",
        id: string,
        postID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userID: string,
        content: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    type: PostProviders,
    title: string,
    description?: string | null,
    content?: string | null,
    vimeoCode?: string | null,
    videoKey?: string | null,
    thumbnail?: string | null,
    createdAt?: string | null,
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelPostTagConnection",
      items:  Array< {
        __typename: "PostTag",
        id: string,
        postID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userID: string,
        content: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    type: PostProviders,
    title: string,
    description?: string | null,
    content?: string | null,
    vimeoCode?: string | null,
    videoKey?: string | null,
    thumbnail?: string | null,
    createdAt?: string | null,
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelPostTagConnection",
      items:  Array< {
        __typename: "PostTag",
        id: string,
        postID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userID: string,
        content: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreatePostTagMutationVariables = {
  input: CreatePostTagInput,
  condition?: ModelPostTagConditionInput | null,
};

export type CreatePostTagMutation = {
  createPostTag?:  {
    __typename: "PostTag",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      type: PostProviders,
      title: string,
      description?: string | null,
      content?: string | null,
      vimeoCode?: string | null,
      videoKey?: string | null,
      thumbnail?: string | null,
      createdAt?: string | null,
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
      tags?:  {
        __typename: "ModelPostTagConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    tagID: string,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      type: TagTypes,
      status: TagStatus,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostTagMutationVariables = {
  input: DeletePostTagInput,
  condition?: ModelPostTagConditionInput | null,
};

export type DeletePostTagMutation = {
  deletePostTag?:  {
    __typename: "PostTag",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      type: PostProviders,
      title: string,
      description?: string | null,
      content?: string | null,
      vimeoCode?: string | null,
      videoKey?: string | null,
      thumbnail?: string | null,
      createdAt?: string | null,
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
      tags?:  {
        __typename: "ModelPostTagConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    tagID: string,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      type: TagTypes,
      status: TagStatus,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      type: PostProviders,
      title: string,
      description?: string | null,
      content?: string | null,
      vimeoCode?: string | null,
      videoKey?: string | null,
      thumbnail?: string | null,
      createdAt?: string | null,
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
      tags?:  {
        __typename: "ModelPostTagConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      type: PostProviders,
      title: string,
      description?: string | null,
      content?: string | null,
      vimeoCode?: string | null,
      videoKey?: string | null,
      thumbnail?: string | null,
      createdAt?: string | null,
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
      tags?:  {
        __typename: "ModelPostTagConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content: string,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      type: PostProviders,
      title: string,
      description?: string | null,
      content?: string | null,
      vimeoCode?: string | null,
      videoKey?: string | null,
      thumbnail?: string | null,
      createdAt?: string | null,
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
      tags?:  {
        __typename: "ModelPostTagConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content: string,
    createdAt?: string | null,
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
      __typename: "ModelUserGroupConnection",
      items:  Array< {
        __typename: "UserGroup",
        id: string,
        group: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelUserTagConnection",
      items:  Array< {
        __typename: "UserTag",
        id: string,
        tagID: string,
        userID: string,
        createdAt: string,
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
        createdAt: string,
        isError?: boolean | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        type: PostProviders,
        title: string,
        description?: string | null,
        content?: string | null,
        vimeoCode?: string | null,
        videoKey?: string | null,
        thumbnail?: string | null,
        createdAt?: string | null,
        userID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        userID: string,
        content: string,
        createdAt?: string | null,
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
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

export type ListTagsQueryVariables = {
  id?: string | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      type: TagTypes,
      status: TagStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListConfigQueryVariables = {
  id?: string | null,
  filter?: ModelConfigFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListConfigQuery = {
  listConfig?:  {
    __typename: "ModelConfigConnection",
    items:  Array< {
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
      WhatsApp?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
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
        __typename: "ModelUserGroupConnection",
        nextToken?: string | null,
      } | null,
      tags?:  {
        __typename: "ModelUserTagConnection",
        nextToken?: string | null,
      } | null,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
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

export type ListUsersByGroupUserQueryVariables = {
  group: string,
  userID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersByGroupUserQuery = {
  listUsersByGroupUser?:  {
    __typename: "ModelUserGroupConnection",
    items:  Array< {
      __typename: "UserGroup",
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListGroupsByUserGroupQueryVariables = {
  userID: string,
  group?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsByUserGroupQuery = {
  listGroupsByUserGroup?:  {
    __typename: "ModelUserGroupConnection",
    items:  Array< {
      __typename: "UserGroup",
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersByTagQueryVariables = {
  tagID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersByTagQuery = {
  listUsersByTag?:  {
    __typename: "ModelUserTagConnection",
    items:  Array< {
      __typename: "UserTag",
      id: string,
      tagID: string,
      tag?:  {
        __typename: "Tag",
        id: string,
        name: string,
        type: TagTypes,
        status: TagStatus,
        createdAt: string,
        updatedAt: string,
      } | null,
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTagsByUserQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsByUserQuery = {
  listTagsByUser?:  {
    __typename: "ModelUserTagConnection",
    items:  Array< {
      __typename: "UserTag",
      id: string,
      tagID: string,
      tag?:  {
        __typename: "Tag",
        id: string,
        name: string,
        type: TagTypes,
        status: TagStatus,
        createdAt: string,
        updatedAt: string,
      } | null,
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
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTagsByTypeNameQueryVariables = {
  type: TagTypes,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsByTypeNameQuery = {
  listTagsByTypeName?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      type: TagTypes,
      status: TagStatus,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTagsByStatusNameQueryVariables = {
  status: TagStatus,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsByStatusNameQuery = {
  listTagsByStatusName?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      type: TagTypes,
      status: TagStatus,
      createdAt: string,
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
      zipCode?: string | null,
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
      createdAt: string,
      isError?: boolean | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMidiasByKeyQueryVariables = {
  key: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMidiaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMidiasByKeyQuery = {
  listMidiasByKey?:  {
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

export type ListNotifyByUserCreatedAtQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotifyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotifyByUserCreatedAtQuery = {
  listNotifyByUserCreatedAt?:  {
    __typename: "ModelNotifyConnection",
    items:  Array< {
      __typename: "Notify",
      id: string,
      userID: string,
      content?: string | null,
      link?: string | null,
      viewed?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPostsByUserCreatedAtQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsByUserCreatedAtQuery = {
  listPostsByUserCreatedAt?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      type: PostProviders,
      title: string,
      description?: string | null,
      content?: string | null,
      vimeoCode?: string | null,
      videoKey?: string | null,
      thumbnail?: string | null,
      createdAt?: string | null,
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
      tags?:  {
        __typename: "ModelPostTagConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTagsByPostQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsByPostQuery = {
  listTagsByPost?:  {
    __typename: "ModelPostTagConnection",
    items:  Array< {
      __typename: "PostTag",
      id: string,
      postID: string,
      post?:  {
        __typename: "Post",
        id: string,
        type: PostProviders,
        title: string,
        description?: string | null,
        content?: string | null,
        vimeoCode?: string | null,
        videoKey?: string | null,
        thumbnail?: string | null,
        createdAt?: string | null,
        userID: string,
        updatedAt: string,
      } | null,
      tagID: string,
      tag?:  {
        __typename: "Tag",
        id: string,
        name: string,
        type: TagTypes,
        status: TagStatus,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPostsByTagQueryVariables = {
  tagID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsByTagQuery = {
  listPostsByTag?:  {
    __typename: "ModelPostTagConnection",
    items:  Array< {
      __typename: "PostTag",
      id: string,
      postID: string,
      post?:  {
        __typename: "Post",
        id: string,
        type: PostProviders,
        title: string,
        description?: string | null,
        content?: string | null,
        vimeoCode?: string | null,
        videoKey?: string | null,
        thumbnail?: string | null,
        createdAt?: string | null,
        userID: string,
        updatedAt: string,
      } | null,
      tagID: string,
      tag?:  {
        __typename: "Tag",
        id: string,
        name: string,
        type: TagTypes,
        status: TagStatus,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCommentsByPostCreatedAtQueryVariables = {
  postID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsByPostCreatedAtQuery = {
  listCommentsByPostCreatedAt?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      post?:  {
        __typename: "Post",
        id: string,
        type: PostProviders,
        title: string,
        description?: string | null,
        content?: string | null,
        vimeoCode?: string | null,
        videoKey?: string | null,
        thumbnail?: string | null,
        createdAt?: string | null,
        userID: string,
        updatedAt: string,
      } | null,
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
      content: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCommentsByUserCreatedAtQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsByUserCreatedAtQuery = {
  listCommentsByUserCreatedAt?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      post?:  {
        __typename: "Post",
        id: string,
        type: PostProviders,
        title: string,
        description?: string | null,
        content?: string | null,
        vimeoCode?: string | null,
        videoKey?: string | null,
        thumbnail?: string | null,
        createdAt?: string | null,
        userID: string,
        updatedAt: string,
      } | null,
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
      content: string,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};
