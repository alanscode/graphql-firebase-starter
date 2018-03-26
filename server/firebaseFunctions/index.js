const { https } = require("firebase-functions")
const setupGraphQLServer = require("./graphql/server")

/* CF for Firebase with graphql-server-express */
const graphQLServer = setupGraphQLServer()

// https://us-central1-<project-name>.cloudfunctions.net/api
module.export.api = https.onRequest(graphQLServer)
