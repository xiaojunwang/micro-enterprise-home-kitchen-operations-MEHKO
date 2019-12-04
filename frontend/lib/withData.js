//this is where we create our apollo client / apollo store

import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint, prodEndpoint } from '../config';
import { LOCAL_STATE_QUERY } from '../components/Cart';

function createClient({ headers }) {
  return new ApolloClient({
    uri: apolloUri,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers: { cookie: headers && headers.cookie },
      });
    },
    //local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart(_, variables, { cache }) {
            // underscore indicates don't need. Can replace with anything really 'lsdfsdfa'
            //variables allows us to access variables passed along by mutation, in our case we don't have any
            //cache is destructured from client (apollo's client)

            //1. read the cartOpen value from the cache
            const { cartOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            //2. write the cart State to the opposite
            const data = {
              data: { cartOpen: !cartOpen },
            };
            cache.writeData(data);
            return data;
          },
          closeCart(_, variables, { cache }) {
            cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            const data = {
              data: {
                cartOpen: false,
              },
            };
            cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        cartOpen: false,
      },
    },
  });
}

export default withApollo(createClient);
