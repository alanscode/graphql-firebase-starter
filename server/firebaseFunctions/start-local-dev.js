import setupGraphQLServer from "./graphql/server"

/* CF for Firebase with graphql-server-express */
const graphQLServer = setupGraphQLServer()

graphQLServer.listen(4200,()=>{
    console.log("<<< Graphql server running at on http://localhost:4200/graphiql >>>")
})
