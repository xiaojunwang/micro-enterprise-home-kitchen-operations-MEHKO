import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const REMOVE_ONE_MUTATION = gql`
  mutation removeOne($id: ID!) {
    removeOne(id: $id) {
      id
      quantity
    }
  }
`;

class RemoveOne extends React.Component {
  render() {
    const { id } = this.props;

    return (
      <Mutation
        mutation={REMOVE_ONE_MUTATION}
        variables={{ id: id }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
        {(removeOne, { loading }) => (
          <button disabled={loading} onClick={removeOne}>
            －
          </button>
        )}
      </Mutation>
    );
  }
}

export default RemoveOne;
