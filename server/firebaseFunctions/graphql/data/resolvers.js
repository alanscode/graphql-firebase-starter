
const { PubSub } = require("graphql-subscriptions")

const pubsub = new PubSub()



const resolveFunctions = {
  Query: {
    ImTheRoot(){
      return "the roots man!!!!"
    }
  }
}

module.exports = resolveFunctions
