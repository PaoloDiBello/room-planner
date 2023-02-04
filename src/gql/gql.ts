/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query FindAllRooms {\n    findAllRooms {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n": types.FindAllRoomsDocument,
    "\n  mutation CreateRoom($data: CreateRoomInput!) {\n    createRoom(data: $data) {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n": types.CreateRoomDocument,
    "\n  mutation UpdateRoom($data: UpdateRoomInput!, $id: ID!) {\n    updateRoom(data: $data, id: $id) {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n": types.UpdateRoomDocument,
    "\n  mutation DeleteRoom($id: ID!) {\n    deleteRoom(id: $id) {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n": types.DeleteRoomDocument,
    "\n  mutation ToggleRoomReservation($id: ID!) {\n    toggleRoomReservation(id: $id) {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n": types.ToggleRoomReservationDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindAllRooms {\n    findAllRooms {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n"): (typeof documents)["\n  query FindAllRooms {\n    findAllRooms {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateRoom($data: CreateRoomInput!) {\n    createRoom(data: $data) {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRoom($data: CreateRoomInput!) {\n    createRoom(data: $data) {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateRoom($data: UpdateRoomInput!, $id: ID!) {\n    updateRoom(data: $data, id: $id) {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateRoom($data: UpdateRoomInput!, $id: ID!) {\n    updateRoom(data: $data, id: $id) {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteRoom($id: ID!) {\n    deleteRoom(id: $id) {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteRoom($id: ID!) {\n    deleteRoom(id: $id) {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ToggleRoomReservation($id: ID!) {\n    toggleRoomReservation(id: $id) {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n"): (typeof documents)["\n  mutation ToggleRoomReservation($id: ID!) {\n    toggleRoomReservation(id: $id) {\n      id\n      name\n      description\n      equipment\n      floor\n      imageUrl\n      numberOfDesks\n      reserved\n      roomType\n      windows\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;