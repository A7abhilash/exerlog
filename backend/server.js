const express = require("./node_modules/express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const { GraphQLSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const RootQueryType = require("./schemas/RootQueryType");
const RootMutationType = require("./schemas/RootMutationType");
const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const app = express();

//*****CONFIGURATION
//dotenv
dotenv.config({ path: "./config/config.env" });
//database
connectDB();
//passport
require("./config/passport.js")(passport);
//graphql
// const schema = new GraphQLSchema({
//   query: RootQueryType,
//   mutation: RootMutationType,
// });

//*****MIDDLEWARE
//Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Session
app.use(
  session({
    secret: "7781",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//Passport
app.use(passport.initialize());
app.use(passport.session());

//EJS
// app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use(
  "/graphiql",
  graphqlHTTP({ schema: schema, rootValue: resolvers, graphiql: true })
);

//*****PORT
const PORT = process.env.PORT || 7781;
app.listen(PORT, () => {
  console.log(`Server Connected on ${PORT}`);
});
