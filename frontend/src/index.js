import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//appolo client setup
const client = new ApolloClient({
  uri: "http://localhost:7781/graphiql",
  cache: new InMemoryCache(),
});
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
