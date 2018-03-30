const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const { mergeSchemas } = require("graphql-tools")
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express")
const rootSchema = require("./data/schema")
const servASchema = require("./data/serviceA/schema")
const servBSchema = require("./data/serviceB/schema")

const setupGraphQLServer = () => {
  // setup server
  const server = express()
  server.use("*", cors())
  // /api/graphql
  server.use(
    "/graphql",
    bodyParser.json(),
    graphqlExpress({
      schema: mergeSchemas({ schemas: [rootSchema, servASchema, servBSchema] })
    })
  )

  // /api/graphiql
  server.use(
    "/",
    graphiqlExpress({
      endpointURL: "graphql",
      subscriptionsEndpoint: `ws://localhost:4200/subscriptions`
    })
  )

  return server
}

module.exports = setupGraphQLServer
