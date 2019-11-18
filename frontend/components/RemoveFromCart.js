import React from "react";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";
import styled from "styled-components";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`;

class RemoveFromCart extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  //This gets called as soon as we get a response back the server after a mutation has been performed

  update = (cache, payload) => {
    //cache is the apollo cache, payload is the dump of information that's returned from the server once it's done
    //1. read the cache
    console.log("running remove from cart updatre fn");
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });
    console.log(data);
    //2. remove that item from the cart
    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);
    //3. write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data: data });
  };

  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTATION}
        variables={{ id: this.props.id }}
        // refetchQueries={[{ query: CURRENT_USER_QUERY }]} too slow, use cache instead
        update={this.update}
        optimisticResponse={{
          //give it what you think the server will responde with = optimisticResponse making feedback almost instantenous without haveing to wait for server
          __typename: "Mutation", //have to give typename of what type we have. here we're assuming it's going to return a mutation
          removeFromCart: {
            //inside that mutation, we have assume it return a removeFromcart object
            __typename: "CartItem",
            id: this.props.id //assume it's going to return an id with item was removed id.
          }
        }}
      >
        {(removeFromCart, { loading, error }) => (
          <BigButton
            disabled={loading}
            onClick={() => {
              removeFromCart().catch(err => alert(err.message));
            }}
            title="Delete Item"
          >
            Ⓧ
          </BigButton>
        )}
      </Mutation>
    );
  }
}

export default RemoveFromCart;
