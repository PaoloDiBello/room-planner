import { gql } from "@/gql";

export const FIND_ALL_ROOMS = gql(`
  query FindAllRooms {
    findAllRooms {
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
