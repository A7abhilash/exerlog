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

export const addNewExerciseMutation = gql`
  mutation($name: String!, $userId: ID!) {
    addNewExercise(name: $name, userId: $userId) {
      name
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
