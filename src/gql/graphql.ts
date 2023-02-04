/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateDeskInput = {
  name: Scalars['String'];
  roomId: Scalars['ID'];
};

export type CreateRoomInput = {
  description?: InputMaybe<Scalars['String']>;
  equipment: Array<Equipment>;
  floor: Scalars['Int'];
  name: Scalars['String'];
  roomType: RoomType;
  windows: Scalars['Int'];
};

export type Desk = {
  __typename?: 'Desk';
  id: Scalars['ID'];
  name: Scalars['String'];
  reserved: Scalars['Boolean'];
};

export enum Equipment {
  AirConditioning = 'AIR_CONDITIONING',
  Beamer = 'BEAMER',
  Tv = 'TV',
  Whiteboard = 'WHITEBOARD'
}

export type Mutation = {
  __typename?: 'Mutation';
  createDesk: Desk;
  createRoom: Room;
  deleteDesk: Desk;
  deleteRoom: Room;
  resetDB: Scalars['Boolean'];
  toggleDeskReservation: Desk;
  toggleRoomReservation: Room;
  updateDesk: Desk;
  updateRoom: Room;
};


export type MutationCreateDeskArgs = {
  data: CreateDeskInput;
};


export type MutationCreateRoomArgs = {
  data: CreateRoomInput;
};


export type MutationDeleteDeskArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRoomArgs = {
  id: Scalars['ID'];
};


export type MutationToggleDeskReservationArgs = {
  id: Scalars['ID'];
};


export type MutationToggleRoomReservationArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateDeskArgs = {
  data: UpdateDeskInput;
  id: Scalars['ID'];
};


export type MutationUpdateRoomArgs = {
  data: UpdateRoomInput;
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  findAllRooms: Array<Room>;
  findDeskById: Desk;
  findRoomById: Room;
};


export type QueryFindDeskByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindRoomByIdArgs = {
  id: Scalars['ID'];
};

export type Room = {
  __typename?: 'Room';
  description?: Maybe<Scalars['String']>;
  desks?: Maybe<Array<Desk>>;
  equipment: Array<Equipment>;
  floor: Scalars['Int'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  numberOfDesks: Scalars['Int'];
  reserved: Scalars['Boolean'];
  roomType: RoomType;
  windows: Scalars['Int'];
};

export enum RoomType {
  ConferenceRoom = 'CONFERENCE_ROOM',
  LeisureRoom = 'LEISURE_ROOM',
  WorkingRoom = 'WORKING_ROOM'
}

export type UpdateDeskInput = {
  name: Scalars['String'];
  roomId: Scalars['ID'];
};

export type UpdateRoomInput = {
  description?: InputMaybe<Scalars['String']>;
  equipment: Array<Equipment>;
  floor: Scalars['Int'];
  name: Scalars['String'];
  roomType: RoomType;
  windows: Scalars['Int'];
};

export type FindAllRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllRoomsQuery = { __typename?: 'Query', findAllRooms: Array<{ __typename?: 'Room', id: string, name: string, description?: string | null, equipment: Array<Equipment>, floor: number, imageUrl: string, numberOfDesks: number, reserved: boolean, roomType: RoomType, windows: number }> };

export type CreateRoomMutationVariables = Exact<{
  data: CreateRoomInput;
}>;


export type CreateRoomMutation = { __typename?: 'Mutation', createRoom: { __typename?: 'Room', id: string, name: string, description?: string | null, equipment: Array<Equipment>, floor: number, imageUrl: string, numberOfDesks: number, reserved: boolean, roomType: RoomType, windows: number } };

export type UpdateRoomMutationVariables = Exact<{
  data: UpdateRoomInput;
  id: Scalars['ID'];
}>;


export type UpdateRoomMutation = { __typename?: 'Mutation', updateRoom: { __typename?: 'Room', id: string, name: string, description?: string | null, equipment: Array<Equipment>, floor: number, imageUrl: string, numberOfDesks: number, reserved: boolean, roomType: RoomType, windows: number } };

export type DeleteRoomMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteRoomMutation = { __typename?: 'Mutation', deleteRoom: { __typename?: 'Room', id: string, name: string, description?: string | null, equipment: Array<Equipment>, floor: number, imageUrl: string, numberOfDesks: number, reserved: boolean, roomType: RoomType, windows: number } };

export type ToggleRoomReservationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ToggleRoomReservationMutation = { __typename?: 'Mutation', toggleRoomReservation: { __typename?: 'Room', id: string, name: string, description?: string | null, equipment: Array<Equipment>, floor: number, imageUrl: string, numberOfDesks: number, reserved: boolean, roomType: RoomType, windows: number } };


export const FindAllRoomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllRooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllRooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"equipment"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfDesks"}},{"kind":"Field","name":{"kind":"Name","value":"reserved"}},{"kind":"Field","name":{"kind":"Name","value":"roomType"}},{"kind":"Field","name":{"kind":"Name","value":"windows"}}]}}]}}]} as unknown as DocumentNode<FindAllRoomsQuery, FindAllRoomsQueryVariables>;
export const CreateRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRoomInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"equipment"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfDesks"}},{"kind":"Field","name":{"kind":"Name","value":"reserved"}},{"kind":"Field","name":{"kind":"Name","value":"roomType"}},{"kind":"Field","name":{"kind":"Name","value":"windows"}}]}}]}}]} as unknown as DocumentNode<CreateRoomMutation, CreateRoomMutationVariables>;
export const UpdateRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateRoomInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"equipment"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfDesks"}},{"kind":"Field","name":{"kind":"Name","value":"reserved"}},{"kind":"Field","name":{"kind":"Name","value":"roomType"}},{"kind":"Field","name":{"kind":"Name","value":"windows"}}]}}]}}]} as unknown as DocumentNode<UpdateRoomMutation, UpdateRoomMutationVariables>;
export const DeleteRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"equipment"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfDesks"}},{"kind":"Field","name":{"kind":"Name","value":"reserved"}},{"kind":"Field","name":{"kind":"Name","value":"roomType"}},{"kind":"Field","name":{"kind":"Name","value":"windows"}}]}}]}}]} as unknown as DocumentNode<DeleteRoomMutation, DeleteRoomMutationVariables>;
export const ToggleRoomReservationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleRoomReservation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleRoomReservation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"equipment"}},{"kind":"Field","name":{"kind":"Name","value":"floor"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfDesks"}},{"kind":"Field","name":{"kind":"Name","value":"reserved"}},{"kind":"Field","name":{"kind":"Name","value":"roomType"}},{"kind":"Field","name":{"kind":"Name","value":"windows"}}]}}]}}]} as unknown as DocumentNode<ToggleRoomReservationMutation, ToggleRoomReservationMutationVariables>;