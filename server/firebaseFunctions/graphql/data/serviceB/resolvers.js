
const { PubSub } = require("graphql-subscriptions")

const pubsub = new PubSub()



const resolveFunctions = {
  Query: {
    ImServiceB(){
      return "the service BBB"
    }
  }
}

module.exports = resolveFunctions
