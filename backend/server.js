const { ApolloServer } = require("apollo-server") // helps connect a graphql schema to a http server in node
const mongoose = require("mongoose") // helps translate between objects in code and their representation in MongoDB

const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers")
const { URI } = require("./config")

// create the server for your graphql database
const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => ({ req }) }) 

mongoose
  .connect(URI, { useNewUrlParser: true }) // link to your database
  .then(() => {
    return server.listen({ port: 5000 }) // tell server which port to listen to
  })
  .then((res) => {
    console.log(`Server for GraphQL database running at ${res.url}`) // console log the port
  })


const express = require("express")
const app = express()
const port = 8080
const fs = require("fs");

// create the server for your express api endpoint
app.get('/', (req, res) => {
  const buffer = fs.readFileSync("./apify_storage/hackernews.json");
  const hackernews = JSON.parse(buffer.toString("utf-8"));
  res.json(hackernews);
});

app.listen(port, () => console.log(`Express API endpoint listening at http://localhost:${port}`));
