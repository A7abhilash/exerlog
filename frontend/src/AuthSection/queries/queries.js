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

export const updateExerciseMutation = gql`
  mutation($id: ID!, $name: String!, $workouts: List!) {
    updateExercise(id: $id, name: $name, workouts: $workouts) {
      name
    }
  }
`;

export const deleteExerciseMutation = gql`
  mutation($id: ID!) {
    deleteExercise(id: $id) {
      id
    }
  }
`;
