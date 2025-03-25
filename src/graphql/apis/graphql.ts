/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Alcohol = {
  __typename?: 'Alcohol';
  alcoholId?: Maybe<Scalars['ID']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  distilillery?: Maybe<Scalars['String']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subType?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type AlcoholDeleted = {
  alcoholId: Scalars['Int']['input'];
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AlcoholInput = {
  brand?: InputMaybe<Scalars['Int']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  distilillery?: InputMaybe<Scalars['String']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  subType?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

export type AlcoholModifiedInput = {
  alcoholId: Scalars['Int']['input'];
  brand?: InputMaybe<Scalars['Int']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  distilillery?: InputMaybe<Scalars['String']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subType?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

export type AttachFile = {
  __typename?: 'AttachFile';
  attachFileId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  fileExtension?: Maybe<Scalars['String']['output']>;
  fileFullPath?: Maybe<Scalars['String']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['Int']['output']>;
  fileType?: Maybe<Scalars['String']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  originalFileName?: Maybe<Scalars['String']['output']>;
};

export type CmtRequestAdd = {
  content?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
  tastingNoteId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type CmtRequestDeleted = {
  commentId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type CmtRequestModify = {
  commentId: Scalars['ID']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type CmtResponseGet = {
  __typename?: 'CmtResponseGet';
  commentId?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  hasMoreReplies?: Maybe<Scalars['Boolean']['output']>;
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  likeCount?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  replies?: Maybe<Array<Maybe<Comment>>>;
  tastingNoteId?: Maybe<Scalars['Int']['output']>;
  totalReplies?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userNickName?: Maybe<Scalars['String']['output']>;
  userProfileImg?: Maybe<Scalars['String']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  commentId?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  depth?: Maybe<Scalars['Int']['output']>;
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  likeCount?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userNickName?: Maybe<Scalars['String']['output']>;
  userProfileImg?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Alcohol 관리 */
  alcoholCreate?: Maybe<Alcohol>;
  alcoholDeleted?: Maybe<Alcohol>;
  alcoholModified?: Maybe<Alcohol>;
  /**  댓글 관리 */
  cmtCreate?: Maybe<CmtResponseGet>;
  cmtLike?: Maybe<Scalars['Boolean']['output']>;
  deleteComment?: Maybe<CmtResponseGet>;
  editComment?: Maybe<CmtResponseGet>;
  /**  Tasting Note 관리 */
  tnCreate?: Maybe<TastingNoteCreate>;
  tnDeleted?: Maybe<TastingNote>;
  tnLike?: Maybe<Scalars['Boolean']['output']>;
  tnModify?: Maybe<TastingNote>;
  tnTCreate?: Maybe<TastingNoteTempCreate>;
  tnTDeleted?: Maybe<TastingNoteTemp>;
  tnTModify?: Maybe<TastingNoteTemp>;
  /**  유저 관리 */
  userCreate?: Maybe<UserResponseGet>;
  userDelete?: Maybe<Scalars['Boolean']['output']>;
  userModify?: Maybe<UserResponseGet>;
};


export type MutationAlcoholCreateArgs = {
  request?: InputMaybe<AlcoholInput>;
};


export type MutationAlcoholDeletedArgs = {
  request?: InputMaybe<AlcoholDeleted>;
};


export type MutationAlcoholModifiedArgs = {
  request?: InputMaybe<AlcoholModifiedInput>;
};


export type MutationCmtCreateArgs = {
  request?: InputMaybe<CmtRequestAdd>;
};


export type MutationCmtLikeArgs = {
  request?: InputMaybe<CmtRequestLike>;
};


export type MutationDeleteCommentArgs = {
  request?: InputMaybe<CmtRequestDeleted>;
};


export type MutationEditCommentArgs = {
  request?: InputMaybe<CmtRequestModify>;
};


export type MutationTnCreateArgs = {
  request?: InputMaybe<TnRequestAdd>;
};


export type MutationTnDeletedArgs = {
  request?: InputMaybe<TnRequestDeleted>;
};


export type MutationTnLikeArgs = {
  request?: InputMaybe<TnRequestLike>;
};


export type MutationTnModifyArgs = {
  request?: InputMaybe<TnRequestModify>;
};


export type MutationTnTCreateArgs = {
  request?: InputMaybe<TnTRequestAdd>;
};


export type MutationTnTDeletedArgs = {
  request?: InputMaybe<TnTRequestDeleted>;
};


export type MutationTnTModifyArgs = {
  request?: InputMaybe<TnTRequestModify>;
};


export type MutationUserCreateArgs = {
  request?: InputMaybe<UserRequestAdd>;
};


export type MutationUserDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUserModifyArgs = {
  id: Scalars['ID']['input'];
  request?: InputMaybe<UserRequestModify>;
};

export type PageResponseAlcohol = {
  __typename?: 'PageResponseAlcohol';
  currentPage?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<Alcohol>>>;
  perPage?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PageResponseCmt = {
  __typename?: 'PageResponseCmt';
  currentPage?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<CmtResponseGet>>>;
  perPage?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PageResponseReplies = {
  __typename?: 'PageResponseReplies';
  currentPage?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<Comment>>>;
  perPage?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PageResponseTastingNote = {
  __typename?: 'PageResponseTastingNote';
  currentPage?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<TastingNote>>>;
  perPage?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PageResponseTastingNoteTemp = {
  __typename?: 'PageResponseTastingNoteTemp';
  currentPage?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<TastingNoteTemp>>>;
  perPage?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAlcoholToAlcholId?: Maybe<Alcohol>;
  getAlcoholToCountry?: Maybe<PageResponseAlcohol>;
  getAlcoholToDistilillery?: Maybe<PageResponseAlcohol>;
  getAlcoholToName?: Maybe<PageResponseAlcohol>;
  getAlcoholToSubType?: Maybe<Array<Maybe<Alcohol>>>;
  getAlcoholToType?: Maybe<Array<Maybe<Alcohol>>>;
  /**  Alcohol 조회 (페이징) */
  getAlcohols?: Maybe<PageResponseAlcohol>;
  /**  전체 Tasting Note 조회 (페이징) */
  getAllTastingNotes?: Maybe<PageResponseTastingNote>;
  /**  댓글 조회 (페이징) */
  getCommentsByTastingNoteId?: Maybe<PageResponseCmt>;
  /**  대댓글 조회 (페이징) */
  getRepliesByParentId?: Maybe<PageResponseReplies>;
  getSystemCodeAll?: Maybe<Array<Maybe<SystemCode>>>;
  /**  System Code 조회 */
  getSystemCodeByCdId?: Maybe<SystemCode>;
  getSystemCodeByCdType?: Maybe<Array<Maybe<SystemCode>>>;
  getSystemCodeByParentCdId?: Maybe<Array<Maybe<SystemCode>>>;
  getTastingNotesByAlcoholId?: Maybe<PageResponseTastingNote>;
  getTastingNotesByHashTag?: Maybe<PageResponseTastingNote>;
  getTastingNotesByIsDeleted?: Maybe<PageResponseTastingNote>;
  getTastingNotesByTitle?: Maybe<PageResponseTastingNote>;
  getTastingNotesId?: Maybe<TastingNote>;
  getTastingNotesUser?: Maybe<PageResponseTastingNote>;
  /**  Tasting Note 조회 (단일) */
  getTempTastingNotesId?: Maybe<TastingNoteTemp>;
  /**  Tasting Note 조회 (페이징) */
  getTempTastingNotesUser?: Maybe<PageResponseTastingNoteTemp>;
  /**  유저 조회 */
  getUser?: Maybe<UserResponseGet>;
  getUserList?: Maybe<Array<Maybe<UserResponseGetList>>>;
};


export type QueryGetAlcoholToAlcholIdArgs = {
  alcoholId: Scalars['ID']['input'];
};


export type QueryGetAlcoholToCountryArgs = {
  country: Scalars['String']['input'];
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAlcoholToDistililleryArgs = {
  distilillery: Scalars['String']['input'];
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAlcoholToNameArgs = {
  name: Scalars['String']['input'];
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAlcoholToSubTypeArgs = {
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  subType: Scalars['Int']['input'];
};


export type QueryGetAlcoholToTypeArgs = {
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['Int']['input'];
};


export type QueryGetAlcoholsArgs = {
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllTastingNotesArgs = {
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


export type QueryGetCommentsByTastingNoteIdArgs = {
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  tastingNoteId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetRepliesByParentIdArgs = {
  pageNum: Scalars['Int']['input'];
  parentId: Scalars['ID']['input'];
  perPage: Scalars['Int']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetSystemCodeByCdIdArgs = {
  cdId: Scalars['ID']['input'];
};


export type QueryGetSystemCodeByCdTypeArgs = {
  cdType: Scalars['String']['input'];
};


export type QueryGetSystemCodeByParentCdIdArgs = {
  parentCdId: Scalars['ID']['input'];
};


export type QueryGetTastingNotesByAlcoholIdArgs = {
  alcoholId: Scalars['ID']['input'];
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


export type QueryGetTastingNotesByHashTagArgs = {
  hashTag: Scalars['String']['input'];
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


export type QueryGetTastingNotesByIsDeletedArgs = {
  isDeleted: Scalars['Boolean']['input'];
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


export type QueryGetTastingNotesByTitleArgs = {
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetTastingNotesIdArgs = {
  tastingNoteId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetTastingNotesUserArgs = {
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetTempTastingNotesIdArgs = {
  tastingNoteTempId: Scalars['ID']['input'];
};


export type QueryGetTempTastingNotesUserArgs = {
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type SystemCode = {
  __typename?: 'SystemCode';
  cdId?: Maybe<Scalars['ID']['output']>;
  cdTitle?: Maybe<Scalars['String']['output']>;
  cdType?: Maybe<Scalars['String']['output']>;
  cdValue?: Maybe<Scalars['String']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  parentCdId?: Maybe<Scalars['Int']['output']>;
};

export type TastingNote = {
  __typename?: 'TastingNote';
  acidity?: Maybe<Scalars['Int']['output']>;
  afterglow?: Maybe<Scalars['Int']['output']>;
  alcoholId?: Maybe<Scalars['Int']['output']>;
  alcoholName?: Maybe<Scalars['String']['output']>;
  attachFileGroupId?: Maybe<Scalars['Int']['output']>;
  attachFiles?: Maybe<Array<Maybe<AttachFile>>>;
  body?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  commentCount?: Maybe<Scalars['Int']['output']>;
  concentration?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  drinkAmount?: Maybe<Scalars['Int']['output']>;
  drinkAmountType?: Maybe<Scalars['Int']['output']>;
  drinkDate?: Maybe<Scalars['String']['output']>;
  etcScentType?: Maybe<Scalars['String']['output']>;
  fruity?: Maybe<Scalars['Int']['output']>;
  grainy?: Maybe<Scalars['Int']['output']>;
  hashTag?: Maybe<Scalars['String']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  likeCount?: Maybe<Scalars['Int']['output']>;
  pairingRate?: Maybe<Scalars['Int']['output']>;
  purchasePrice?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  scentType?: Maybe<Scalars['String']['output']>;
  sparkling?: Maybe<Scalars['Int']['output']>;
  sweety?: Maybe<Scalars['Int']['output']>;
  tastingNoteId?: Maybe<Scalars['ID']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  togetherComment?: Maybe<Scalars['String']['output']>;
  togetherFood?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userNickName?: Maybe<Scalars['String']['output']>;
};

export type TastingNoteCreate = {
  __typename?: 'TastingNoteCreate';
  acidity?: Maybe<Scalars['Int']['output']>;
  afterglow?: Maybe<Scalars['Int']['output']>;
  alcoholId?: Maybe<Scalars['Int']['output']>;
  attachFileGroupId?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  concentration?: Maybe<Scalars['Int']['output']>;
  drinkAmount?: Maybe<Scalars['Int']['output']>;
  drinkAmountType?: Maybe<Scalars['Int']['output']>;
  drinkDate?: Maybe<Scalars['String']['output']>;
  etcScentType?: Maybe<Scalars['String']['output']>;
  fruity?: Maybe<Scalars['Int']['output']>;
  grainy?: Maybe<Scalars['Int']['output']>;
  hashTag?: Maybe<Scalars['String']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  pairingRate?: Maybe<Scalars['Int']['output']>;
  purchasePrice?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  scentType?: Maybe<Scalars['String']['output']>;
  sparkling?: Maybe<Scalars['Int']['output']>;
  sweety?: Maybe<Scalars['Int']['output']>;
  tastingNoteId?: Maybe<Scalars['ID']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  togetherComment?: Maybe<Scalars['String']['output']>;
  togetherFood?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type TastingNoteTemp = {
  __typename?: 'TastingNoteTemp';
  acidity?: Maybe<Scalars['Int']['output']>;
  afterglow?: Maybe<Scalars['Int']['output']>;
  alcoholId?: Maybe<Scalars['Int']['output']>;
  alcoholName?: Maybe<Scalars['String']['output']>;
  attachFileGroupId?: Maybe<Scalars['Int']['output']>;
  attachFiles?: Maybe<Array<Maybe<AttachFile>>>;
  body?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  concentration?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  drinkAmount?: Maybe<Scalars['Int']['output']>;
  drinkAmountType?: Maybe<Scalars['Int']['output']>;
  drinkDate?: Maybe<Scalars['String']['output']>;
  etcScentType?: Maybe<Scalars['String']['output']>;
  fruity?: Maybe<Scalars['Int']['output']>;
  grainy?: Maybe<Scalars['Int']['output']>;
  hashTag?: Maybe<Scalars['String']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  pairingRate?: Maybe<Scalars['Int']['output']>;
  purchasePrice?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  scentType?: Maybe<Scalars['String']['output']>;
  sparkling?: Maybe<Scalars['Int']['output']>;
  sweety?: Maybe<Scalars['Int']['output']>;
  tastingNoteTempId?: Maybe<Scalars['ID']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  togetherComment?: Maybe<Scalars['String']['output']>;
  togetherFood?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userNickName?: Maybe<Scalars['String']['output']>;
};

export type TastingNoteTempCreate = {
  __typename?: 'TastingNoteTempCreate';
  acidity?: Maybe<Scalars['Int']['output']>;
  afterglow?: Maybe<Scalars['Int']['output']>;
  alcoholId?: Maybe<Scalars['Int']['output']>;
  attachFileGroupId?: Maybe<Scalars['Int']['output']>;
  body?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  concentration?: Maybe<Scalars['Int']['output']>;
  drinkAmount?: Maybe<Scalars['Int']['output']>;
  drinkAmountType?: Maybe<Scalars['Int']['output']>;
  drinkDate?: Maybe<Scalars['String']['output']>;
  etcScentType?: Maybe<Scalars['String']['output']>;
  fruity?: Maybe<Scalars['Int']['output']>;
  grainy?: Maybe<Scalars['Int']['output']>;
  hashTag?: Maybe<Scalars['String']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  pairingRate?: Maybe<Scalars['Int']['output']>;
  purchasePrice?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  scentType?: Maybe<Scalars['String']['output']>;
  sparkling?: Maybe<Scalars['Int']['output']>;
  sweety?: Maybe<Scalars['Int']['output']>;
  tastingNoteTempId?: Maybe<Scalars['ID']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  togetherComment?: Maybe<Scalars['String']['output']>;
  togetherFood?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type TnRequestAdd = {
  acidity?: InputMaybe<Scalars['Int']['input']>;
  afterglow?: InputMaybe<Scalars['Int']['input']>;
  alcoholId?: InputMaybe<Scalars['Int']['input']>;
  attachFileGroupId?: InputMaybe<Scalars['Int']['input']>;
  body?: InputMaybe<Scalars['Int']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  concentration?: InputMaybe<Scalars['Int']['input']>;
  drinkAmount?: InputMaybe<Scalars['Int']['input']>;
  drinkAmountType?: InputMaybe<Scalars['Int']['input']>;
  drinkDate?: InputMaybe<Scalars['String']['input']>;
  etcScentType?: InputMaybe<Scalars['String']['input']>;
  fruity?: InputMaybe<Scalars['Int']['input']>;
  grainy?: InputMaybe<Scalars['Int']['input']>;
  hashTag?: InputMaybe<Scalars['String']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  pairingRate?: InputMaybe<Scalars['Int']['input']>;
  purchasePrice?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  scentType?: InputMaybe<Scalars['String']['input']>;
  sparkling?: InputMaybe<Scalars['Int']['input']>;
  sweety?: InputMaybe<Scalars['Int']['input']>;
  temperature?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  togetherComment?: InputMaybe<Scalars['String']['input']>;
  togetherFood?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type TnRequestDeleted = {
  tastingNoteId: Scalars['ID']['input'];
};

export type TnRequestModify = {
  acidity?: InputMaybe<Scalars['Int']['input']>;
  afterglow?: InputMaybe<Scalars['Int']['input']>;
  alcoholId?: InputMaybe<Scalars['Int']['input']>;
  attachFileGroupId?: InputMaybe<Scalars['Int']['input']>;
  body?: InputMaybe<Scalars['Int']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  concentration?: InputMaybe<Scalars['Int']['input']>;
  drinkAmount?: InputMaybe<Scalars['Int']['input']>;
  drinkAmountType?: InputMaybe<Scalars['Int']['input']>;
  drinkDate?: InputMaybe<Scalars['String']['input']>;
  etcScentType?: InputMaybe<Scalars['String']['input']>;
  fruity?: InputMaybe<Scalars['Int']['input']>;
  grainy?: InputMaybe<Scalars['Int']['input']>;
  hashTag?: InputMaybe<Scalars['String']['input']>;
  pairingRate?: InputMaybe<Scalars['Int']['input']>;
  purchasePrice?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  scentType?: InputMaybe<Scalars['String']['input']>;
  sparkling?: InputMaybe<Scalars['Int']['input']>;
  sweety?: InputMaybe<Scalars['Int']['input']>;
  tastingNoteId: Scalars['ID']['input'];
  temperature?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  togetherComment?: InputMaybe<Scalars['String']['input']>;
  togetherFood?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type TnTRequestAdd = {
  acidity?: InputMaybe<Scalars['Int']['input']>;
  afterglow?: InputMaybe<Scalars['Int']['input']>;
  alcoholId?: InputMaybe<Scalars['Int']['input']>;
  attachFileGroupId?: InputMaybe<Scalars['Int']['input']>;
  body?: InputMaybe<Scalars['Int']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  concentration?: InputMaybe<Scalars['Int']['input']>;
  drinkAmount?: InputMaybe<Scalars['Int']['input']>;
  drinkAmountType?: InputMaybe<Scalars['Int']['input']>;
  drinkDate?: InputMaybe<Scalars['String']['input']>;
  etcScentType?: InputMaybe<Scalars['String']['input']>;
  fruity?: InputMaybe<Scalars['Int']['input']>;
  grainy?: InputMaybe<Scalars['Int']['input']>;
  hashTag?: InputMaybe<Scalars['String']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  pairingRate?: InputMaybe<Scalars['Int']['input']>;
  purchasePrice?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  scentType?: InputMaybe<Scalars['String']['input']>;
  sparkling?: InputMaybe<Scalars['Int']['input']>;
  sweety?: InputMaybe<Scalars['Int']['input']>;
  temperature?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  togetherComment?: InputMaybe<Scalars['String']['input']>;
  togetherFood?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type TnTRequestDeleted = {
  tastingNoteTempId: Scalars['ID']['input'];
};

export type TnTRequestModify = {
  acidity?: InputMaybe<Scalars['Int']['input']>;
  afterglow?: InputMaybe<Scalars['Int']['input']>;
  alcoholId?: InputMaybe<Scalars['Int']['input']>;
  attachFileGroupId?: InputMaybe<Scalars['Int']['input']>;
  body?: InputMaybe<Scalars['Int']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  concentration?: InputMaybe<Scalars['Int']['input']>;
  drinkAmount?: InputMaybe<Scalars['Int']['input']>;
  drinkAmountType?: InputMaybe<Scalars['Int']['input']>;
  drinkDate?: InputMaybe<Scalars['String']['input']>;
  etcScentType?: InputMaybe<Scalars['String']['input']>;
  fruity?: InputMaybe<Scalars['Int']['input']>;
  grainy?: InputMaybe<Scalars['Int']['input']>;
  hashTag?: InputMaybe<Scalars['String']['input']>;
  pairingRate?: InputMaybe<Scalars['Int']['input']>;
  purchasePrice?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  scentType?: InputMaybe<Scalars['String']['input']>;
  sparkling?: InputMaybe<Scalars['Int']['input']>;
  sweety?: InputMaybe<Scalars['Int']['input']>;
  tastingNoteTempId: Scalars['ID']['input'];
  temperature?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  togetherComment?: InputMaybe<Scalars['String']['input']>;
  togetherFood?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserRequestAdd = {
  email: Scalars['String']['input'];
  loginId: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserRequestModify = {
  birthday?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profileImageId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserResponseGet = {
  __typename?: 'UserResponseGet';
  birthday?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  loginId: Scalars['String']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profileImageId?: Maybe<Scalars['Int']['output']>;
  userId: Scalars['ID']['output'];
  userProfileImg?: Maybe<Scalars['String']['output']>;
};

export type UserResponseGetList = {
  __typename?: 'UserResponseGetList';
  birthday?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  loginId: Scalars['String']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profileImageId?: Maybe<Scalars['Int']['output']>;
  userId: Scalars['ID']['output'];
  userProfileImg?: Maybe<Scalars['String']['output']>;
};

export type CmtRequestLike = {
  commentId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type TnRequestLike = {
  tastingNoteId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type SystemCodeQueryVariables = Exact<{ [key: string]: never; }>;


export type SystemCodeQuery = { __typename?: 'Query', getSystemCodeAll?: Array<{ __typename?: 'SystemCode', isDeleted?: boolean | null, parentCdId?: number | null, cdValue?: string | null, cdType?: string | null, cdTitle?: string | null, cdId?: string | null } | null> | null };

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'UserResponseGet', email?: string | null, userId: string, loginId: string } | null };

export type GetUserListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserListQuery = { __typename?: 'Query', getUserList?: Array<{ __typename?: 'UserResponseGetList', email?: string | null, userId: string, loginId: string } | null> | null };

export type GetAlcoholDetailQueryVariables = Exact<{
  alcoholId: Scalars['ID']['input'];
}>;


export type GetAlcoholDetailQuery = { __typename?: 'Query', getAlcoholToAlcholId?: { __typename?: 'Alcohol', alcoholId?: string | null, country?: string | null, distilillery?: string | null, name?: string | null, subType?: string | null, type: string, isDeleted?: boolean | null } | null };

export type GetAlcoholListQueryVariables = Exact<{
  alcohol: Scalars['String']['input'];
  sortDirection: Scalars['String']['input'];
  sortBy: Scalars['String']['input'];
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
}>;


export type GetAlcoholListQuery = { __typename?: 'Query', getAlcoholToName?: { __typename?: 'PageResponseAlcohol', currentPage?: number | null, perPage?: number | null, totalCount?: number | null, totalPages?: number | null, data?: Array<{ __typename?: 'Alcohol', alcoholId?: string | null, country?: string | null, distilillery?: string | null, name?: string | null, subType?: string | null, type: string, isDeleted?: boolean | null } | null> | null } | null };

export type GetTastingNoteListQueryVariables = Exact<{
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  sortDirection: Scalars['String']['input'];
  sortBy: Scalars['String']['input'];
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
}>;


export type GetTastingNoteListQuery = { __typename?: 'Query', getTastingNotesByTitle?: { __typename?: 'PageResponseTastingNote', currentPage?: number | null, perPage?: number | null, totalCount?: number | null, totalPages?: number | null, data?: Array<{ __typename?: 'TastingNote', alcoholId?: number | null, alcoholName?: string | null, userId?: number | null, userNickName?: string | null, hashTag?: string | null, rating?: number | null, review?: string | null, tastingNoteId?: string | null, drinkDate?: string | null, isLiked?: boolean | null, likeCount?: number | null, commentCount?: number | null, title?: string | null, updatedAt?: string | null, createdAt?: string | null, attachFiles?: Array<{ __typename?: 'AttachFile', attachFileId?: number | null, filePath?: string | null, originalFileName?: string | null } | null> | null } | null> | null } | null };

export type GetTastingNoteListByUserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  sortDirection: Scalars['String']['input'];
  sortBy: Scalars['String']['input'];
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
}>;


export type GetTastingNoteListByUserQuery = { __typename?: 'Query', getTastingNotesUser?: { __typename?: 'PageResponseTastingNote', currentPage?: number | null, perPage?: number | null, totalCount?: number | null, totalPages?: number | null, data?: Array<{ __typename?: 'TastingNote', alcoholId?: number | null, alcoholName?: string | null, userId?: number | null, userNickName?: string | null, hashTag?: string | null, rating?: number | null, review?: string | null, tastingNoteId?: string | null, drinkDate?: string | null, title?: string | null, isLiked?: boolean | null, likeCount?: number | null, updatedAt?: string | null, createdAt?: string | null, commentCount?: number | null, attachFiles?: Array<{ __typename?: 'AttachFile', attachFileId?: number | null, filePath?: string | null, originalFileName?: string | null } | null> | null } | null> | null } | null };

export type GetTastingNoteDetailQueryVariables = Exact<{
  tastingNoteId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
}>;


export type GetTastingNoteDetailQuery = { __typename?: 'Query', getTastingNotesId?: { __typename?: 'TastingNote', acidity?: number | null, afterglow?: number | null, alcoholId?: number | null, alcoholName?: string | null, userId?: number | null, body?: number | null, color?: string | null, concentration?: number | null, drinkAmount?: number | null, drinkAmountType?: number | null, drinkDate?: string | null, etcScentType?: string | null, fruity?: number | null, grainy?: number | null, isDeleted?: boolean | null, isLiked?: boolean | null, likeCount?: number | null, commentCount?: number | null, hashTag?: string | null, pairingRate?: number | null, purchasePrice?: number | null, rating?: number | null, review?: string | null, scentType?: string | null, sweety?: number | null, tastingNoteId?: string | null, sparkling?: number | null, temperature?: number | null, title?: string | null, togetherComment?: string | null, togetherFood?: string | null, updatedAt?: string | null, createdAt?: string | null, attachFiles?: Array<{ __typename?: 'AttachFile', attachFileId?: number | null, filePath?: string | null, originalFileName?: string | null } | null> | null } | null };

export type CreateTastingNoteMutationVariables = Exact<{
  tastingNote: TnRequestAdd;
}>;


export type CreateTastingNoteMutation = { __typename?: 'Mutation', tnCreate?: { __typename?: 'TastingNoteCreate', acidity?: number | null, afterglow?: number | null, alcoholId?: number | null, body?: number | null, color?: string | null, concentration?: number | null, drinkAmount?: number | null, drinkAmountType?: number | null, drinkDate?: string | null, etcScentType?: string | null, fruity?: number | null, grainy?: number | null, hashTag?: string | null, isDeleted?: boolean | null, pairingRate?: number | null, purchasePrice?: number | null, rating?: number | null, review?: string | null, scentType?: string | null, sparkling?: number | null, sweety?: number | null, tastingNoteId?: string | null, temperature?: number | null, title?: string | null, togetherComment?: string | null, togetherFood?: string | null, userId?: number | null, attachFileGroupId?: number | null } | null };

export type ModifyTastingNoteMutationVariables = Exact<{
  tastingNote: TnRequestModify;
}>;


export type ModifyTastingNoteMutation = { __typename?: 'Mutation', tnModify?: { __typename?: 'TastingNote', acidity?: number | null, afterglow?: number | null, alcoholId?: number | null, body?: number | null, color?: string | null, concentration?: number | null, drinkAmount?: number | null, drinkAmountType?: number | null, drinkDate?: string | null, etcScentType?: string | null, fruity?: number | null, grainy?: number | null, hashTag?: string | null, isDeleted?: boolean | null, pairingRate?: number | null, purchasePrice?: number | null, rating?: number | null, review?: string | null, scentType?: string | null, sparkling?: number | null, sweety?: number | null, tastingNoteId?: string | null, temperature?: number | null, title?: string | null, togetherComment?: string | null, togetherFood?: string | null, userId?: number | null, updatedAt?: string | null, createdAt?: string | null, attachFiles?: Array<{ __typename?: 'AttachFile', attachFileId?: number | null, filePath?: string | null, originalFileName?: string | null } | null> | null } | null };

export type DeleteTastingNoteMutationVariables = Exact<{
  tastingNoteId: Scalars['ID']['input'];
}>;


export type DeleteTastingNoteMutation = { __typename?: 'Mutation', tnDeleted?: { __typename?: 'TastingNote', tastingNoteId?: string | null } | null };

export type CreateTastingNoteTempMutationVariables = Exact<{
  tastingNoteTemp: TnTRequestAdd;
}>;


export type CreateTastingNoteTempMutation = { __typename?: 'Mutation', tnTCreate?: { __typename?: 'TastingNoteTempCreate', acidity?: number | null, afterglow?: number | null, alcoholId?: number | null, body?: number | null, color?: string | null, concentration?: number | null, drinkAmount?: number | null, drinkAmountType?: number | null, drinkDate?: string | null, etcScentType?: string | null, fruity?: number | null, grainy?: number | null, hashTag?: string | null, isDeleted?: boolean | null, pairingRate?: number | null, purchasePrice?: number | null, rating?: number | null, review?: string | null, scentType?: string | null, sparkling?: number | null, sweety?: number | null, temperature?: number | null, title?: string | null, togetherComment?: string | null, togetherFood?: string | null, userId?: number | null, attachFileGroupId?: number | null, tastingNoteTempId?: string | null } | null };

export type ModifyTastingNoteTempMutationVariables = Exact<{
  tastingNoteTemp: TnTRequestModify;
}>;


export type ModifyTastingNoteTempMutation = { __typename?: 'Mutation', tnTModify?: { __typename?: 'TastingNoteTemp', tastingNoteTempId?: string | null, acidity?: number | null, afterglow?: number | null, alcoholId?: number | null, body?: number | null, color?: string | null, concentration?: number | null, drinkAmount?: number | null, drinkAmountType?: number | null, drinkDate?: string | null, etcScentType?: string | null, fruity?: number | null, grainy?: number | null, hashTag?: string | null, isDeleted?: boolean | null, pairingRate?: number | null, purchasePrice?: number | null, rating?: number | null, review?: string | null, scentType?: string | null, sparkling?: number | null, sweety?: number | null, temperature?: number | null, title?: string | null, togetherComment?: string | null, togetherFood?: string | null, userId?: number | null, attachFileGroupId?: number | null } | null };

export type DeleteTastingNoteTempMutationVariables = Exact<{
  tastingNoteTempId: Scalars['ID']['input'];
}>;


export type DeleteTastingNoteTempMutation = { __typename?: 'Mutation', tnTDeleted?: { __typename?: 'TastingNoteTemp', tastingNoteTempId?: string | null } | null };

export type GetTastingNoteTempListByUserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  sortDirection: Scalars['String']['input'];
  sortBy: Scalars['String']['input'];
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
}>;


export type GetTastingNoteTempListByUserQuery = { __typename?: 'Query', getTempTastingNotesUser?: { __typename?: 'PageResponseTastingNoteTemp', currentPage?: number | null, perPage?: number | null, totalCount?: number | null, totalPages?: number | null, data?: Array<{ __typename?: 'TastingNoteTemp', acidity?: number | null, afterglow?: number | null, alcoholId?: number | null, alcoholName?: string | null, userId?: number | null, body?: number | null, color?: string | null, concentration?: number | null, drinkAmount?: number | null, drinkAmountType?: number | null, drinkDate?: string | null, etcScentType?: string | null, fruity?: number | null, grainy?: number | null, hashTag?: string | null, isDeleted?: boolean | null, pairingRate?: number | null, purchasePrice?: number | null, rating?: number | null, review?: string | null, scentType?: string | null, sweety?: number | null, tastingNoteTempId?: string | null, sparkling?: number | null, temperature?: number | null, title?: string | null, togetherComment?: string | null, togetherFood?: string | null, updatedAt?: string | null, createdAt?: string | null, attachFiles?: Array<{ __typename?: 'AttachFile', attachFileId?: number | null, createdAt?: string | null, deletedAt?: string | null, fileExtension?: string | null, fileFullPath?: string | null, filePath?: string | null, fileSize?: number | null, fileType?: string | null, isDeleted?: boolean | null, originalFileName?: string | null } | null> | null } | null> | null } | null };

export type GetCommentsByTastingNoteIdQueryVariables = Exact<{
  tastingNoteId: Scalars['ID']['input'];
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  userId: Scalars['ID']['input'];
}>;


export type GetCommentsByTastingNoteIdQuery = { __typename?: 'Query', getCommentsByTastingNoteId?: { __typename?: 'PageResponseCmt', currentPage?: number | null, perPage?: number | null, totalCount?: number | null, totalPages?: number | null, data?: Array<{ __typename?: 'CmtResponseGet', commentId?: number | null, content?: string | null, createdAt?: string | null, deletedAt?: string | null, hasMoreReplies?: boolean | null, parentId?: number | null, isLiked?: boolean | null, likeCount?: number | null, totalReplies?: number | null, tastingNoteId?: number | null, updatedAt?: string | null, userId?: number | null, userNickName?: string | null, userProfileImg?: string | null, replies?: Array<{ __typename?: 'Comment', commentId?: number | null, parentId?: number | null, depth?: number | null } | null> | null } | null> | null } | null };

export type GetRepliesByParentIdQueryVariables = Exact<{
  parentId: Scalars['ID']['input'];
  pageNum: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  userId: Scalars['ID']['input'];
}>;


export type GetRepliesByParentIdQuery = { __typename?: 'Query', getRepliesByParentId?: { __typename?: 'PageResponseReplies', currentPage?: number | null, perPage?: number | null, totalCount?: number | null, totalPages?: number | null, data?: Array<{ __typename?: 'Comment', userProfileImg?: string | null, userNickName?: string | null, userId?: number | null, updatedAt?: string | null, parentId?: number | null, depth?: number | null, createdAt?: string | null, deletedAt?: string | null, content?: string | null, commentId?: number | null, isLiked?: boolean | null, likeCount?: number | null } | null> | null } | null };

export type CmtCreateMutationVariables = Exact<{
  cmtRequestAdd: CmtRequestAdd;
}>;


export type CmtCreateMutation = { __typename?: 'Mutation', cmtCreate?: { __typename?: 'CmtResponseGet', commentId?: number | null, parentId?: number | null, tastingNoteId?: number | null, userId?: number | null, createdAt?: string | null } | null };

export type CmtDeleteMutationVariables = Exact<{
  commentId: Scalars['ID']['input'];
  userId: Scalars['Int']['input'];
}>;


export type CmtDeleteMutation = { __typename?: 'Mutation', deleteComment?: { __typename?: 'CmtResponseGet', commentId?: number | null, parentId?: number | null, tastingNoteId?: number | null, userId?: number | null, deletedAt?: string | null } | null };

export type CmtModifyMutationVariables = Exact<{
  cmtRequestAdd: CmtRequestModify;
}>;


export type CmtModifyMutation = { __typename?: 'Mutation', editComment?: { __typename?: 'CmtResponseGet', commentId?: number | null, parentId?: number | null, tastingNoteId?: number | null, userId?: number | null, updatedAt?: string | null } | null };

export type TnLikeMutationVariables = Exact<{
  tastingNoteId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
}>;


export type TnLikeMutation = { __typename?: 'Mutation', tnLike?: boolean | null };

export type CmtLikeMutationVariables = Exact<{
  commentId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
}>;


export type CmtLikeMutation = { __typename?: 'Mutation', cmtLike?: boolean | null };


export const SystemCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"systemCode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSystemCodeAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"parentCdId"}},{"kind":"Field","name":{"kind":"Name","value":"cdValue"}},{"kind":"Field","name":{"kind":"Name","value":"cdType"}},{"kind":"Field","name":{"kind":"Name","value":"cdTitle"}},{"kind":"Field","name":{"kind":"Name","value":"cdId"}}]}}]}}]} as unknown as DocumentNode<SystemCodeQuery, SystemCodeQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"loginId"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUserListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"loginId"}}]}}]}}]} as unknown as DocumentNode<GetUserListQuery, GetUserListQueryVariables>;
export const GetAlcoholDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAlcoholDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alcoholId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAlcoholToAlcholId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"alcoholId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alcoholId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alcoholId"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"distilillery"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"subType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}}]}}]}}]} as unknown as DocumentNode<GetAlcoholDetailQuery, GetAlcoholDetailQueryVariables>;
export const GetAlcoholListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAlcoholList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"alcohol"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortDirection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAlcoholToName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"alcohol"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alcoholId"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"distilillery"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"subType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<GetAlcoholListQuery, GetAlcoholListQueryVariables>;
export const GetTastingNoteListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTastingNoteList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortDirection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTastingNotesByTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alcoholId"}},{"kind":"Field","name":{"kind":"Name","value":"alcoholName"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userNickName"}},{"kind":"Field","name":{"kind":"Name","value":"attachFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachFileId"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hashTag"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"tastingNoteId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"drinkDate"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<GetTastingNoteListQuery, GetTastingNoteListQueryVariables>;
export const GetTastingNoteListByUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTastingNoteListByUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortDirection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTastingNotesUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alcoholId"}},{"kind":"Field","name":{"kind":"Name","value":"alcoholName"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userNickName"}},{"kind":"Field","name":{"kind":"Name","value":"attachFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachFileId"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hashTag"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"tastingNoteId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"drinkDate"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<GetTastingNoteListByUserQuery, GetTastingNoteListByUserQueryVariables>;
export const GetTastingNoteDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTastingNoteDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTastingNotesId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tastingNoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acidity"}},{"kind":"Field","name":{"kind":"Name","value":"afterglow"}},{"kind":"Field","name":{"kind":"Name","value":"alcoholId"}},{"kind":"Field","name":{"kind":"Name","value":"alcoholName"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"attachFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachFileId"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"drinkAmount"}},{"kind":"Field","name":{"kind":"Name","value":"drinkAmountType"}},{"kind":"Field","name":{"kind":"Name","value":"drinkDate"}},{"kind":"Field","name":{"kind":"Name","value":"etcScentType"}},{"kind":"Field","name":{"kind":"Name","value":"fruity"}},{"kind":"Field","name":{"kind":"Name","value":"grainy"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"hashTag"}},{"kind":"Field","name":{"kind":"Name","value":"pairingRate"}},{"kind":"Field","name":{"kind":"Name","value":"purchasePrice"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"scentType"}},{"kind":"Field","name":{"kind":"Name","value":"sweety"}},{"kind":"Field","name":{"kind":"Name","value":"tastingNoteId"}},{"kind":"Field","name":{"kind":"Name","value":"sparkling"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"togetherComment"}},{"kind":"Field","name":{"kind":"Name","value":"togetherFood"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetTastingNoteDetailQuery, GetTastingNoteDetailQueryVariables>;
export const CreateTastingNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTastingNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tastingNote"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TnRequestAdd"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tnCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tastingNote"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acidity"}},{"kind":"Field","name":{"kind":"Name","value":"afterglow"}},{"kind":"Field","name":{"kind":"Name","value":"alcoholId"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"drinkAmount"}},{"kind":"Field","name":{"kind":"Name","value":"drinkAmountType"}},{"kind":"Field","name":{"kind":"Name","value":"drinkDate"}},{"kind":"Field","name":{"kind":"Name","value":"etcScentType"}},{"kind":"Field","name":{"kind":"Name","value":"fruity"}},{"kind":"Field","name":{"kind":"Name","value":"grainy"}},{"kind":"Field","name":{"kind":"Name","value":"hashTag"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"pairingRate"}},{"kind":"Field","name":{"kind":"Name","value":"purchasePrice"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"scentType"}},{"kind":"Field","name":{"kind":"Name","value":"sparkling"}},{"kind":"Field","name":{"kind":"Name","value":"sweety"}},{"kind":"Field","name":{"kind":"Name","value":"tastingNoteId"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"togetherComment"}},{"kind":"Field","name":{"kind":"Name","value":"togetherFood"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"attachFileGroupId"}}]}}]}}]} as unknown as DocumentNode<CreateTastingNoteMutation, CreateTastingNoteMutationVariables>;
export const ModifyTastingNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyTastingNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tastingNote"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TnRequestModify"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tnModify"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tastingNote"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acidity"}},{"kind":"Field","name":{"kind":"Name","value":"afterglow"}},{"kind":"Field","name":{"kind":"Name","value":"alcoholId"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"drinkAmount"}},{"kind":"Field","name":{"kind":"Name","value":"drinkAmountType"}},{"kind":"Field","name":{"kind":"Name","value":"drinkDate"}},{"kind":"Field","name":{"kind":"Name","value":"etcScentType"}},{"kind":"Field","name":{"kind":"Name","value":"fruity"}},{"kind":"Field","name":{"kind":"Name","value":"grainy"}},{"kind":"Field","name":{"kind":"Name","value":"hashTag"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"pairingRate"}},{"kind":"Field","name":{"kind":"Name","value":"purchasePrice"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"scentType"}},{"kind":"Field","name":{"kind":"Name","value":"sparkling"}},{"kind":"Field","name":{"kind":"Name","value":"sweety"}},{"kind":"Field","name":{"kind":"Name","value":"tastingNoteId"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"togetherComment"}},{"kind":"Field","name":{"kind":"Name","value":"togetherFood"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"attachFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachFileId"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tastingNoteId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ModifyTastingNoteMutation, ModifyTastingNoteMutationVariables>;
export const DeleteTastingNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTastingNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tnDeleted"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tastingNoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tastingNoteId"}}]}}]}}]} as unknown as DocumentNode<DeleteTastingNoteMutation, DeleteTastingNoteMutationVariables>;
export const CreateTastingNoteTempDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTastingNoteTemp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteTemp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TnTRequestAdd"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tnTCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteTemp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acidity"}},{"kind":"Field","name":{"kind":"Name","value":"afterglow"}},{"kind":"Field","name":{"kind":"Name","value":"alcoholId"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"drinkAmount"}},{"kind":"Field","name":{"kind":"Name","value":"drinkAmountType"}},{"kind":"Field","name":{"kind":"Name","value":"drinkDate"}},{"kind":"Field","name":{"kind":"Name","value":"etcScentType"}},{"kind":"Field","name":{"kind":"Name","value":"fruity"}},{"kind":"Field","name":{"kind":"Name","value":"grainy"}},{"kind":"Field","name":{"kind":"Name","value":"hashTag"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"pairingRate"}},{"kind":"Field","name":{"kind":"Name","value":"purchasePrice"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"scentType"}},{"kind":"Field","name":{"kind":"Name","value":"sparkling"}},{"kind":"Field","name":{"kind":"Name","value":"sweety"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"togetherComment"}},{"kind":"Field","name":{"kind":"Name","value":"togetherFood"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"attachFileGroupId"}},{"kind":"Field","name":{"kind":"Name","value":"tastingNoteTempId"}}]}}]}}]} as unknown as DocumentNode<CreateTastingNoteTempMutation, CreateTastingNoteTempMutationVariables>;
export const ModifyTastingNoteTempDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyTastingNoteTemp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteTemp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TnTRequestModify"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tnTModify"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteTemp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tastingNoteTempId"}},{"kind":"Field","name":{"kind":"Name","value":"acidity"}},{"kind":"Field","name":{"kind":"Name","value":"afterglow"}},{"kind":"Field","name":{"kind":"Name","value":"alcoholId"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"drinkAmount"}},{"kind":"Field","name":{"kind":"Name","value":"drinkAmountType"}},{"kind":"Field","name":{"kind":"Name","value":"drinkDate"}},{"kind":"Field","name":{"kind":"Name","value":"etcScentType"}},{"kind":"Field","name":{"kind":"Name","value":"fruity"}},{"kind":"Field","name":{"kind":"Name","value":"grainy"}},{"kind":"Field","name":{"kind":"Name","value":"hashTag"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"pairingRate"}},{"kind":"Field","name":{"kind":"Name","value":"purchasePrice"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"scentType"}},{"kind":"Field","name":{"kind":"Name","value":"sparkling"}},{"kind":"Field","name":{"kind":"Name","value":"sweety"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"togetherComment"}},{"kind":"Field","name":{"kind":"Name","value":"togetherFood"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"attachFileGroupId"}}]}}]}}]} as unknown as DocumentNode<ModifyTastingNoteTempMutation, ModifyTastingNoteTempMutationVariables>;
export const DeleteTastingNoteTempDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTastingNoteTemp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteTempId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tnTDeleted"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tastingNoteTempId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteTempId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tastingNoteTempId"}}]}}]}}]} as unknown as DocumentNode<DeleteTastingNoteTempMutation, DeleteTastingNoteTempMutationVariables>;
export const GetTastingNoteTempListByUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTastingNoteTempListByUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortDirection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTempTastingNotesUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acidity"}},{"kind":"Field","name":{"kind":"Name","value":"afterglow"}},{"kind":"Field","name":{"kind":"Name","value":"alcoholId"}},{"kind":"Field","name":{"kind":"Name","value":"alcoholName"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"attachFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachFileId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"fileFullPath"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"concentration"}},{"kind":"Field","name":{"kind":"Name","value":"drinkAmount"}},{"kind":"Field","name":{"kind":"Name","value":"drinkAmountType"}},{"kind":"Field","name":{"kind":"Name","value":"drinkDate"}},{"kind":"Field","name":{"kind":"Name","value":"etcScentType"}},{"kind":"Field","name":{"kind":"Name","value":"fruity"}},{"kind":"Field","name":{"kind":"Name","value":"grainy"}},{"kind":"Field","name":{"kind":"Name","value":"hashTag"}},{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"pairingRate"}},{"kind":"Field","name":{"kind":"Name","value":"purchasePrice"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"scentType"}},{"kind":"Field","name":{"kind":"Name","value":"sweety"}},{"kind":"Field","name":{"kind":"Name","value":"tastingNoteTempId"}},{"kind":"Field","name":{"kind":"Name","value":"sparkling"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"togetherComment"}},{"kind":"Field","name":{"kind":"Name","value":"togetherFood"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<GetTastingNoteTempListByUserQuery, GetTastingNoteTempListByUserQueryVariables>;
export const GetCommentsByTastingNoteIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCommentsByTastingNoteId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCommentsByTastingNoteId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"tastingNoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"hasMoreReplies"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"replies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalReplies"}},{"kind":"Field","name":{"kind":"Name","value":"tastingNoteId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userNickName"}},{"kind":"Field","name":{"kind":"Name","value":"userProfileImg"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<GetCommentsByTastingNoteIdQuery, GetCommentsByTastingNoteIdQueryVariables>;
export const GetRepliesByParentIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRepliesByParentId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRepliesByParentId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageNum"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNum"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"parentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfileImg"}},{"kind":"Field","name":{"kind":"Name","value":"userNickName"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"commentId"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<GetRepliesByParentIdQuery, GetRepliesByParentIdQueryVariables>;
export const CmtCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cmtCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cmtRequestAdd"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CmtRequestAdd"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cmtCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cmtRequestAdd"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"tastingNoteId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CmtCreateMutation, CmtCreateMutationVariables>;
export const CmtDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cmtDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"tastingNoteId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<CmtDeleteMutation, CmtDeleteMutationVariables>;
export const CmtModifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cmtModify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cmtRequestAdd"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CmtRequestModify"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cmtRequestAdd"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentId"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"tastingNoteId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CmtModifyMutation, CmtModifyMutationVariables>;
export const TnLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"tnLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tnLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tastingNoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tastingNoteId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}]}}]} as unknown as DocumentNode<TnLikeMutation, TnLikeMutationVariables>;
export const CmtLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cmtLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cmtLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}}]}]}}]} as unknown as DocumentNode<CmtLikeMutation, CmtLikeMutationVariables>;