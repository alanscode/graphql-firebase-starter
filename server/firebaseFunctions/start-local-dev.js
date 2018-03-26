const setupGraphQLServer = require("./graphql/server")

/* CF for Firebase with graphql-server-express */
const graphQLServer = setupGraphQLServer()
console.log(process.env)
graphQLServer.listen(4200,()=>{
    console.log("<<< Graphql server running at on http://localhost:4200/graphiql >>>")
})
