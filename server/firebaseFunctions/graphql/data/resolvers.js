const firebase = require("../../firebase")

const resolveFunctions = {
  Query: {
    once(_, { path }) {
      console.log('>>> once query')
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
  }
}

module.exports = resolveFunctions
