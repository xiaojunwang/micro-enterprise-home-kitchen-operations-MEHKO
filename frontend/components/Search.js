import React from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce'; //makes sure we're not unnessarily firing off after each key press, but instead after a set (i.e. 350ms) time.
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
        # saying find me search where title contains the search term or description contains search term
      }
    ) {
      id
      image
      title
    }
  }
`;

function routeToItem(item) {
  // console.log(item);
  Router.push({
    pathname: '/item',
    query: {
      id: item.id,
    },
  });
}

class AutoComplete extends React.Component {
  state = {
    items: [],
    loading: false, //because we don't have the convience of our query or mutation component, we have to take care of the loading state ourselves
  };
  onChange = debounce(async (e, client) => {
    console.log('searching');
    console.log(client);
    // turn loading on
    this.setState({ loading: true });
    //Manually query apollo client
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm: e.target.value },
    });
    console.log(res);
    this.setState({
      items: res.data.items,
      loading: false,
    });
  }, 350);
  render() {
    resetIdCounter();
    return (
      <SearchStyles>
        <Downshift
          onChange={routeToItem}
          itemToString={item => (item === null ? '' : item.title)}>
          {/* specify how items get turn to string, instead of outputting 'object Object' */}
          {({
            getInputProps,
            getItemProps,
            isOpen, //closes the search when clicking away from searchbar
            inputValue,
            highlightedIndex,
          }) => (
            <div>
              <ApolloConsumer>
                {client => (
                  <input
                    {...getInputProps({
                      type: 'search',
                      placeholder: 'search for an item',
                      id: 'search',
                      className: this.state.loading ? 'loading' : '',
                      onChange: e => {
                        e.persist();
                        this.onChange(e, client);
                      },
                    })}
                  />
                  //what this does:
                  //1. ApolloConsumer exposes client to us
                  //2. When user types, we're going to pass the client to a separate function
                  //3. That allows us to go above the render and make an onchange handler that accepts that event and the client
                )}
              </ApolloConsumer>
              {isOpen && ( //if it's open then show the downdown
                <DropDown>
                  {this.state.items.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={index === highlightedIndex}>
                      <img width='50' src={item.image} alt={item.title} />
                      {item.title}
                    </DropDownItem>
                  ))}
                  {!this.state.items.length && !this.state.loading && (
                    <DropDownItem> Nothing Found for {inputValue}</DropDownItem>
                  )}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default AutoComplete;

//we need direct access to our apollo client because our Apollo Client we can manually fire off these search queries
// rather than using a render prop, hence why we imported ApolloConsumer.
//ApolloConsumer will do is it will expose the client to us so that we can manually run these onChange queries oursevles
