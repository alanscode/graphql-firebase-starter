import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost"
import VueApollo from "vue-apollo"

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: "https://us-central1-helloworld-5d0f4.cloudfunctions.net/api/graphql"
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

export default ({ app, Vue }) => {
  Vue.use(VueApollo)
  app.provide = apolloProvider.provide()
}
