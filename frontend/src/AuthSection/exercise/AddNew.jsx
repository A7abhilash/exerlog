import { useMutation } from "@apollo/client";
import React from "react";
import { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { addNewExerciseMutation, getUserExercises } from "../queries/queries";

function AddNew() {
  const { user } = useAuth();
  const newExerciseNameRef = useRef("");
  const [addNewExercise] = useMutation(addNewExerciseMutation);

  const newExercise = async (e) => {
    let exercise = {
      name: newExerciseNameRef.current.value,
      userId: user._id,
    };
    let res = await addNewExercise({
      variables: exercise,
      refetchQueries: [
        { query: getUserExercises, variables: { id: user._id } },
      ],
    });
    if (res) {
      alert(
        `New exercise: ${res.data.addNewExercise.name} added successfully!!!`
      );
    }
  };

  return (
    <div className="bg-light m-1 px-1 pt-1 pb-0">
      <div className="d-flex p-2">
        <input
          type="text"
          ref={newExerciseNameRef}
          className="form-control"
          placeholder="New Exercise"
        />
        <button
          onClick={(e) => newExercise(e)}
          className="btn btn-primary btn-sm mx-1"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddNew;
