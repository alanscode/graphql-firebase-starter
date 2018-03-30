const { makeExecutableSchema } = require("graphql-tools")

const resolvers = require("./resolvers")

const schema = `
  type Query {
    ImServiceB: String
  }

`

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
