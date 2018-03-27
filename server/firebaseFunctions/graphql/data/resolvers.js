const firebase = require("../../firebase")
const { PubSub } = require("graphql-subscriptions")

const pubsub = new PubSub()
const resolveFunctions = {
  Query: {
    once(_, { path }) {
      console.log(">>> once query")
      return firebase
        .database()
        .ref(path)
        .once("value")
        .then(snap => {
          console.log(snap.val())
          return JSON.stringify(snap.val())
        })
    }
  },
  Mutation: {
    set(_, { path, json }) {
      //pass null for json to delete the record
      const parsed = JSON.parse(json.trim())
      return firebase
        .database()
        .ref(path)
        .set(parsed)
        .then(snap => {
          return "OK"
        })
    },
    push(_, { path, json }) {
      const parsed = JSON.parse(json.trim())
      return firebase
        .database()
        .ref(path)
        .push(parsed)
        .then(snap => {
          return "OK"
        })
    }
  },
  Subscription: {
    autoincrement: {
      subscribe: () => {
        setInterval(() => {
          pubsub.publish("can_be_anything", {
            autoincrement: `time is now ${Date.now()}`
          })
        }, 100)
        return pubsub.asyncIterator("can_be_anything")
      }
    },
    pokerlogs: {
      subscribe: () => {
        firebase.database().ref("pokerlogs").on("value", snap => {
          pubsub.publish("pokerlog_update", {
            pokerlogs: JSON.stringify(snap.val())
          })
        })

        return pubsub.asyncIterator("pokerlog_update")
      }
    }
  }
}

module.exports = resolveFunctions
