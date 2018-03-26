const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express")
const schema = require("./data/schema")
const { printSchema } = require("graphql/utilities/schemaPrinter")

const setupGraphQLServer = () => {
  // setup server
  const graphQLServer = express()
  graphQLServer.use(cors())
  // /api/graphql
  graphQLServer.use(
    "/graphql",
    bodyParser.json(),
    graphqlExpress({ schema, context: {} })
  )

  // /api/graphiql
  graphQLServer.use("/graphiql", graphiqlExpress({ endpointURL: "graphql" }))

  // /api/schema
  graphQLServer.use("/schema", (req, res) => {
    res.set("Content-Type", "text/plain")
    res.send(printSchema(schema))
  })

  return graphQLServer
}

module.exports = setupGraphQLServer
