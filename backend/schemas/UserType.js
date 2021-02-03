const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const ExerciseType = require("./ExerciseType");
const Exercises = require("../models/Exercises");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    profileImg: {
      type: GraphQLString,
    },
    exercises: {
      type: new GraphQLList(ExerciseType),
      resolve: async (parent, args) => {
        let exercises = await Exercises.find({ userId: parent.id });
        return exercises;
      },
    },
  }),
});

module.exports = UserType;

/*
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
*/
