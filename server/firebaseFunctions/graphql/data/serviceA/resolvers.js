
const { PubSub } = require("graphql-subscriptions")

const pubsub = new PubSub()



const resolveFunctions = {
  Query: {
    ImServiceA(){
      return "the service AAA"
    }
  }
}

module.exports = resolveFunctions
