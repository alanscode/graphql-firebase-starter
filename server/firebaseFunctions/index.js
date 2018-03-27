const { https } = require("firebase-functions")
const setupGraphQLServer = require("./graphql/server")

/* CF for Firebase with graphql-server-express */
const graphQLServer = setupGraphQLServer()

// https://us-central1-<project-name>.cloudfunctions.net/api
module.exports.api = https.onRequest(graphQLServer)
