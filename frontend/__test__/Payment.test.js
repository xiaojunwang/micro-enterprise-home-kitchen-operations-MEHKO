import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import NProgress from 'nprogress';
import Router from 'next/router';
import { MockedProvider } from 'react-apollo/test-utils';
import Payment, { CREATE_ORDER_MUTATION } from '../components/Payment';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser, fakeCartItem } from '../lib/testUtils';

Router.router = { push() {} };

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: {
          ...fakeUser(),
          cart: [fakeCartItem()],
        },
      },
    },
  },
];

describe('<Payment />', () => {
  it('Renders and matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Payment />
      </MockedProvider>
    );
    await wait(50);
    wrapper.update();
    const checkoutButton = wrapper.find('ReactStripeCheckout');
    expect(toJSON(checkoutButton)).toMatchSnapshot();
  });

  it('Creates an order onToken', async () => {
    const createOrderMock = jest.fn().mockResolvedValue({
      data: { createOrder: { id: 'xyz789' } },
    });
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Payment />
      </MockedProvider>
    );
    const component = wrapper.find('Payment').instance();
    // console.log(component);
    component.onToken({ id: 'abc123' }, createOrderMock);
    expect(createOrderMock).toHaveBeenCalled();
    expect(createOrderMock).toHaveBeenCalledWith({
      variables: { token: 'abc123' },
    });
  });

  it('Turns the progress bar on', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Payment />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    NProgress.start = jest.fn();
    const createOrderMock = jest.fn().mockResolvedValue({
      data: { createOrder: { id: 'xyz789' } },
    });
    const component = wrapper.find('Payment').instance();
    component.onToken({ id: 'abc123' }, createOrderMock);
    expect(NProgress.start).toHaveBeenCalled();
  });

  it('Routes to the order page when completed', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Payment />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    const createOrderMock = jest.fn().mockResolvedValue({
      data: { createOrder: { id: 'xyz789' } },
    });
    const component = wrapper.find('Payment').instance();
    Router.router.push = jest.fn();
    component.onToken({ id: 'abc123' }, createOrderMock);
    await wait();
    expect(Router.router.push).toHaveBeenCalled();
    expect(Router.router.push).toHaveBeenCalledWith({
      pathname: '/order',
      query: { id: 'xyz789' },
    });
  });
});
