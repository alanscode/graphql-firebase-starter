const schema = require("./graphql/data/schema")
const cors = require("cors")
const { execute, subscribe } = require("graphql")
const { createServer } = require("http")
const { SubscriptionServer } = require("subscriptions-transport-ws")

const setupGraphQLServer = require("./graphql/server")

/* CF for Firebase with graphql-server-express */
const graphQLServer = setupGraphQLServer()

// graphQLServer.listen(4200,()=>{
//     console.log("<<< Graphql server running at on http://localhost:4200/graphiql >>>")
// })

// We wrap the express server so that we can attach the WebSocket for subscriptions
const ws = createServer(graphQLServer)
PORT = 4200
ws.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)

  // Set up the WebSocket for handling GraphQL subscriptions
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema
    },
    {
      server: ws,
      path: "/subscriptions"
    }
  )
})
