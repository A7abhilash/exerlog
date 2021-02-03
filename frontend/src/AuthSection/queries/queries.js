import { gql } from "@apollo/client";

export const getUserExercises = gql`
  query($id: ID!) {
    user(id: $id) {
      exercises {
        name
        workouts
        id
      }
    }
  }
`;
