import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import Head from 'next/head';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import AddToCart from './AddToCart';

const SingleItemStyles = styled.div`
  border-radius: 50px;
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    border-radius: 50px;
    width: 110%;
    height: 100%;
    object-fit: cover;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
    margin-left: 15%;
    text-align: center;
  }
  p {
    em {
      color: #3399ff;
      margin-top: 0;
    }
    margin-top: 20%;
  }
  button {
    border-radius: 25px;
    background: whitesmoke;
    margin-top: 10%;
    cursor: pointer;
    font-size: 150%;
    inline-size: 90%;
    :hover {
      color: white;
      background-color: #3399ff;
    }
  }
  h3 {
    margin-top: 25%;
  }
`;

const H2Underline = styled.h2`
  text-decoration: underline;
`;
const DescUnderline = styled.h3`
  font-style: italic;
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
      price
      user {
        name
      }
    }
  }
`;

class SingleItem extends Component {
  render() {
    return (
      <Query
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id,
        }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No Item Found for {this.props.id}</p>;
          const item = data.item;
          return (
            <SingleItemStyles>
              <Head>
                <title>MEHKO | {item.title}</title>
              </Head>
              <img src={item.largeImage} alt={item.title} />
              <div className='details'>
                <H2Underline>{item.title}</H2Underline>
                <p>
                  Crafted and Sold by <em>{item.user.name}</em>
                </p>
                <DescUnderline>{item.description}</DescUnderline>
                <p>Price - {formatMoney(item.price)}</p>
                <div className='addToCart'>
                  <AddToCart id={item.id} />
                </div>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
export { SINGLE_ITEM_QUERY };
