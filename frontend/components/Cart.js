import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import User from './User';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import SickButton from './styles/SickButton';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';
import Payment from './Payment';

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
    # //this is client side data, don't go to server for this data, grab it directly from the apollo store
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const CLOSE_CART_MUTATION = gql`
  mutation {
    closeCart @client
  }
`;

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>, //arrow function gets rid of console warnings, otherwise <User /> works just fine.
  closeCart: ({ render }) => (
    <Mutation mutation={CLOSE_CART_MUTATION}>{render}</Mutation>
  ),
  // toggleCart: ({ render }) => (
  //   <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>
  // ),
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>,
});

const pStyle = {
  background: 'red',
  textAlign: 'center',
  color: 'white',
  cursor: 'pointer',
  fontSize: 24,
};

const Cart = () => (
  <Composed>
    {({ user, closeCart, localState }) => {
      const me = user.data.me;
      if (!me) return null; //we don't want to show the cart unless person is logged in

      return (
        <CartStyles open={localState.data.cartOpen} onMouseLeave={closeCart}>
          {/* ^^ open value live as boolean in Apollo store that can be toggled between true and false. Whenever that is 
      changed anywhere on our page, this will trigger and apply css  */}
          <header>
            <CloseButton onClick={closeCart} title='close'>
              &times;
            </CloseButton>
            <Supreme>{me.name}'s Cart</Supreme>
            <p>
              You Have {me.cart.length} Item
              {me.cart.length > 1 ? 's' : ''} in Your Cart
            </p>
          </header>
          <ul>
            {me.cart.map(cartItem => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </ul>
          <footer>
            <p>Subtotal:</p>
            <p>{formatMoney(calcTotalPrice(me.cart))}</p>
            {me.cart.length ? ( //if cart is true, then render the checkout button
              <Payment>
                <SickButton>Checkout</SickButton>
              </Payment>
            ) : (
              <p style={pStyle}>No Item to Checkout</p>
            )}
          </footer>
        </CartStyles>
      );
    }}
  </Composed>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION, CLOSE_CART_MUTATION };
