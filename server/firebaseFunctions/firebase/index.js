const functions = require("firebase-functions")
const firebase = require("firebase-admin")

const serviceAccount = require("./admin.json")

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://helloworld-5d0f4.firebaseio.com/"
})

module.exports = firebase
