import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import Router from 'next/router';
import { MockedProvider } from 'react-apollo/test-utils';
import CreateItem, { CREATE_ITEM_MUTATION } from '../components/CreateItem';
import { fakeItem } from '../lib/testUtils';

const image = 'https://image.com/image.jpg';
// mock the global fetch API
global.fetch = jest.fn().mockResolvedValue({
  json: () => ({
    secure_url: image,
    eager: [{ secure_url: image }],
  }),
});

describe('<CreateItem />', () => {
  it('Renders and matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider>
        <CreateItem />
      </MockedProvider>
    );
    const form = wrapper.find("form[data-test='form']");
    expect(toJSON(form)).toMatchSnapshot();
  });

  it('Uploads a file when changed', async () => {
    const wrapper = mount(
      <MockedProvider>
        <CreateItem />
      </MockedProvider>
    );
    const input = wrapper.find('input[type="file"]');
    input.simulate('change', { target: { files: ['image.jpg'] } });
    await wait();
    const component = wrapper.find('CreateItem').instance();
    // console.log(component);
    expect(component.state.image).toEqual(image);
    expect(component.state.largeImage).toEqual(image);
    expect(global.fetch).toHaveBeenCalled();
    global.fetch.mockReset();
  });

  it('Handles state updating', async () => {
    const wrapper = mount(
      <MockedProvider>
        <CreateItem />
      </MockedProvider>
    );
    wrapper
      .find('#title')
      .simulate('change', { target: { value: 'Testing', name: 'title' } });
    wrapper.find('#price').simulate('change', {
      target: { value: 50000, name: 'price', type: 'number' },
    });
    wrapper.find('#description').simulate('change', {
      target: { value: 'This is a really nice item', name: 'description' },
    });

    expect(wrapper.find('CreateItem').instance().state).toMatchObject({
      title: 'Testing',
      price: 50000,
      description: 'This is a really nice item',
    });
  });

  it('Creates an item when the form is submitted', async () => {
    const item = fakeItem();
    const mocks = [
      {
        request: {
          query: CREATE_ITEM_MUTATION,
          variables: {
            title: item.title,
            description: item.description,
            image: '',
            largeImage: '',
            price: item.price,
          },
        },
        result: {
          data: {
            createItem: {
              ...fakeItem(),
              id: 'abc123',
              __typeName: 'Item',
            },
          },
        },
      },
    ];

    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <CreateItem />
      </MockedProvider>
    );
    //simulate someone filling out the form
    wrapper
      .find('#title')
      .simulate('change', { target: { value: item.title, name: 'title' } });
    wrapper.find('#price').simulate('change', {
      target: { value: item.price, name: 'price', type: 'number' },
    });
    wrapper.find('#description').simulate('change', {
      target: { value: item.description, name: 'description' },
    });
    // mock the router
    Router.router = { push: jest.fn() };
    wrapper.find('form').simulate('submit');
    await wait(50);
    expect(Router.router.push).toHaveBeenCalled();
    expect(Router.router.push).toHaveBeenCalledWith({
      pathname: '/item',
      query: { id: 'abc123' },
    });
  });
});
