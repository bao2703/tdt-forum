import Vue from "vue";
import VueApollo from "vue-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";

Vue.use(VueApollo);

const uri = "http://localhost:3000/graphql";

const link = new HttpLink({ uri });

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({ link, cache, connectToDevTools: true });

export const apolloProvider = new VueApollo({ defaultClient: apolloClient });

export default apolloClient;
