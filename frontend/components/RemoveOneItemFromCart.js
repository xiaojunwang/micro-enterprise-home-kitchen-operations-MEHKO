import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

class RemoveOneItemFromCart extends React.Component {
  render() {
    return <button> ➖ </button>;
  }
}

export default RemoveOneItemFromCart;
