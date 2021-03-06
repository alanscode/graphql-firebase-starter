const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express")
const schema = require("./data/schema")

const setupGraphQLServer = () => {
  // setup server
  const server = express()
  server.use("*", cors())
  // /api/graphql
  server.use("/graphql", bodyParser.json(), graphqlExpress({ schema }))

  // /api/graphiql
  server.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "graphql",
      subscriptionsEndpoint: `ws://localhost:4200/subscriptions`
    })
  )

  return server
}

module.exports = setupGraphQLServer
