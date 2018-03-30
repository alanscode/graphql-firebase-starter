const { makeExecutableSchema } = require("graphql-tools")

const resolvers = require("./resolvers")

const schema = `
  type Query {
    ImTheRoot: String
  }

`

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
