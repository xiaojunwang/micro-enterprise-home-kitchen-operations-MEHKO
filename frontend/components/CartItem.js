import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';
import Link from 'next/link';
import AddOne from './AddOne';
import RemoveOne from './RemoveOne';

const CartItemStyles = styled.li`
  padding: 0.7rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    border-radius: 25px;
    margin-right: 10px;
  }
  h3 {
    margin-left: 5%;
  }
  p {
    margin-left: 5%;
    color: gray;
  }
  .delete {
    grid-column-end: five;
  }
  .addremove {
    justify-self: start;
  }
  button {
    cursor: pointer;
  }
`;

const CartItem = ({ cartItem }) => {
  //1. check if that item exists
  if (!cartItem.item)
    return (
      <CartItemStyles>
        This Item has been removed
        <RemoveFromCart id={cartItem.id} />
      </CartItemStyles>
    );
  return (
    <CartItemStyles>
      <Link
        href={{
          pathname: '/item',
          query: { id: cartItem.item.id },
        }}>
        <a>
          <img
            width='100'
            src={cartItem.item.image}
            alt={cartItem.item.title}
          />
        </a>
      </Link>
      <div className='cart-item-details'>
        <Link
          href={{
            pathname: '/item',
            query: { id: cartItem.item.id },
          }}>
          <a>
            <h3>{cartItem.item.title}</h3>
          </a>
        </Link>
        <p>
          <em>
            {cartItem.quantity} @ {formatMoney(cartItem.item.price)} each
          </em>{' '}
          = {formatMoney(cartItem.item.price * cartItem.quantity)}
        </p>
      </div>
      <div className='addremove'>
        <RemoveOne id={cartItem.item.id} />
        <AddOne id={cartItem.item.id} />
      </div>
      <div className='delete'>
        <RemoveFromCart id={cartItem.id} />
      </div>
    </CartItemStyles>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CartItem;
