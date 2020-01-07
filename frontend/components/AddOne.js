import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { ADD_TO_CART_MUTATION } from './AddToCart';

class AddOne extends React.Component {
  render() {
    const { id } = this.props;
    // console.log(this.props);
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{
          id: id
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
        {(addToCart, { error, loading }) => (
          <button disabled={loading} onClick={addToCart}>
            ＋
          </button>
        )}
      </Mutation>
    );
  }
}

export default AddOne;
