import setupGraphQLServer from "./graphql/server"

/* CF for Firebase with graphql-server-express */
const graphQLServer = setupGraphQLServer()

graphQLServer.listen(4200,()=>{
    console.log("<<< Listening on 4200 >>>")
})
