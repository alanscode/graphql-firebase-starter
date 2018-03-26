import { makeExecutableSchema } from "graphql-tools"

import resolvers from "./resolvers"

const schema = `

# the schema allows the following query:
type Query {
  once(path:String):String
}
# this schema allows the following mutation:

type Mutation {
  set(path: String!, json: String!) : String
  push(path: String!, json: String!) : String
}
`

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
