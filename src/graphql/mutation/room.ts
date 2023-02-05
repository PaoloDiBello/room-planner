import { gql } from "@/gql";

export const CREATE_ROOM = gql(`
  mutation CreateRoom($data: CreateRoomInput!) {
    createRoom(data: $data) {
      id
      name
      description
      equipment
      floor
      imageUrl
      numberOfDesks
      reserved
      roomType
      windows
    }
  }
`);

export const UPDATE_ROOM = gql(`
  mutation UpdateRoom($data: UpdateRoomInput!, $id: ID!) {
    updateRoom(data: $data, id: $id) {
      id
      name
      description
      equipment
      floor
      imageUrl
      numberOfDesks
      reserved
      roomType
      windows
    }
  }
`);

export const DELETE_ROOM = gql(`
  mutation DeleteRoom($id: ID!) {
    deleteRoom(id: $id) {
      id
      name
      description
      equipment
      floor
      imageUrl
      numberOfDesks
      reserved
      roomType
      windows
    }
  }
`);

export const TOGGLE_ROOM_RESERVATION = gql(`
  mutation ToggleRoomReservation($id: ID!) {
    toggleRoomReservation(id: $id) {
      id
      name
      description
      equipment
      floor
      imageUrl
      numberOfDesks
      reserved
      roomType
      windows
    }
  }
`);
