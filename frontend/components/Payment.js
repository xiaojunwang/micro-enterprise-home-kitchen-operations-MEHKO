import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import Router from "next/router";
import NProgress from "nprogress";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import calcTotalPrice from "../lib/calcTotalPrice";
import Error from "./ErrorMessage";
import User, { CURRENT_USER_QUERY } from "./User";

function totalItems(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

class Payment extends Component {
  onToken = res => {
    console.log("On token called");
    console.log(res);
    console.log(res.id);
  };
  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <StripeCheckout
            amount={calcTotalPrice(me.cart)}
            name="Mehko LLC"
            description={`Order of ${totalItems(me.cart)}`}
            image={me.cart[0].item && me.cart[0].item.image} //won't return image if no 1st item.
            stripeKey="pk_test_q84Z3HocMGPwVyZprfY0UpJn00BIVcU0X9"
            currency="USD"
            email={me.email}
            token={res => this.onToken(res)} //reason not just "this.onToken" is b/c we will be passing a mutation
          >
            {this.props.children}
          </StripeCheckout>
        )}
      </User>
    );
  }
}

export default Payment;
