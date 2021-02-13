const Exercises = require("../models/Exercises");
const Users = require("../models/Users");

const exercisesList = [
  {
    id: "1",
    userId: "60163b2150e651376cd5d6a6",
    name: "Legs",
    workouts: ["Squats", "Lounges"],
  },
  {
    id: "2",
    userId: "2",
    name: "Chest",
    workouts: ["Bench Press"],
  },
  {
    id: "3",
    userId: "60163b2150e651376cd5d6a6",
    name: "Biceps",
    workouts: ["Curls", "Concentration curls"],
  },
];
const usersList = [
  {
    id: "60163b2150e651376cd5d6a6",
    name: "A7",
    profileImg: "",
  },
  {
    id: "2",
    name: "M17",
    profileImg: "",
  },
];

const resolvers = {
  user: async (parent, args) => {
    // let { id, name, profileImg } = usersList.find(
    //   (item) => item.id === parent.id
    // );
    // let exercises = exercisesList.filter((item) => item.userId === parent.id);
    // return { id, name, profileImg, exercises };
    let { _id, displayName, image } = await Users.findById(parent.id);
    let exercises = await Exercises.find({ userId: parent.id });
    return { id: _id, name: displayName, profileImg: image, exercises };
  },
  addNewExercise: async (parent, args) => {
    // let exercise = {
    //   userId: "2",
    //   name: parent.input.name,
    //   workouts: [],
    // };
    // exercisesList.push(exercise);
    // return exercise;
    let exercise = new Exercises({
      name: parent.input.name,
      userId: parent.input.userId,
      workouts: [],
    });
    return await exercise.save();
  },
  updateExercise: async (parent, args) => {
    // let exercise = exercisesList.find((item) => item.id === parent.input.id);
    // exercise.name = parent.input.name;
    // exercise.workouts = parent.input.workouts;
    // return exercise;
    let exercise = {
      id: parent.input.id,
      name: parent.input.name,
      workouts: parent.input.workouts,
    };
    await Exercises.findByIdAndUpdate(parent.input.id, exercise);
    return exercise;
  },
  deleteExercise: async (parent, args) => {
    await Exercises.findByIdAndDelete(parent.input.id);
    return { id: parent.input.id };
  },
};

module.exports = resolvers;
