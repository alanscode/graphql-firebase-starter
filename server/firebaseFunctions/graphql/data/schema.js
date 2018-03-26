const { makeExecutableSchema } = require("graphql-tools")

const resolvers = require("./resolvers")

const schema = `

# the schema allows the following query:
type Query {
  once(path:String):String
}
# this schema allows the following mutation:

type Mutation {
  set(path: String!, json: String!) : String
  push(path: String!, json: String!) : String
  add(x1: Int!, x2: Int!) : Int
}
`

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
