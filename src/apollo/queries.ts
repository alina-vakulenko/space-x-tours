import { gql } from "../__generated__/gql";

export const GET_TOURS = gql(`
  query GetTours {
    tours: rockets {
      id
      title: name
      subtitle: description
    }
  }
`);
