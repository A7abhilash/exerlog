const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");
const Exercises = require("../models/Exercises");
const Users = require("../models/Users");
const ExerciseType = require("./ExerciseType");
const UserType = require("./UserType");

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addNewExercise: {
      type: ExerciseType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        userId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        let exercise = new Exercises({
          name: args.name,
          userId: args.userId,
          workouts: [],
        });
        return await exercise.save();
      },
    },
    updateExercise: {
      type: ExerciseType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        workouts: { type: GraphQLList(GraphQLString) },
      },
      resolve: async (parent, args) => {
        console.log(args);
        let exercise = {
          id: args.id,
          name: args.name,
          workouts: args.workouts,
        };
        await Exercises.findByIdAndUpdate(args.id, exercise);
        return exercise;
      },
    },
    deleteExercise: {
      type: ExerciseType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        await Exercises.findByIdAndDelete(args.id);
        return { id: args.id };
      },
    },
  }),
});

module.exports = RootMutationType;

const exercises = [
  {
    id: "1",
    name: "Day-1",
    list: ["Exercise-1", "Exercise-2", "Exercise-3"],
    userId: "1",
  },
  {
    id: "2",
    name: "Day-2",
    list: ["Exercise-1", "Exercise-2"],
    userId: "2",
  },
  {
    id: "3",
    name: "Day-3",
    list: ["Exercise-3"],
    userId: "1",
  },
];
