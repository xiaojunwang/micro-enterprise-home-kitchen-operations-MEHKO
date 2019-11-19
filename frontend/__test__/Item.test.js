import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
  id: 'ABC123',
  title: 'An item',
  price: 5555,
  description: 'A test item',
  image: 'testImage.jpg',
  largeImage: 'largeTestImage.jpg',
};

describe('<Item />', () => {
  it('Renders and matches the snapshot', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

// describe('<Item />', () => {
//   it('Renders image', () => {
//     const wrapper = shallow(<ItemComponent item={fakeItem} />);
//     const img = wrapper.find('img');
//     console.log(img.props());
//     expect(img.props().src).toBe(fakeItem.image);
//     expect(img.props().alt).toBe(fakeItem.title);
//   });
//   it('Renders price tag and title', () => {
//     const wrapper = shallow(<ItemComponent item={fakeItem} />);
//     const PriceTag = wrapper.find('PriceTag');
//     console.log(PriceTag.children().text());
//     expect(PriceTag.children().text()).toEqual('$99.99');
//     expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
//   });
//   it('Renders out buttons', () => {
//     const wrapper = shallow(<ItemComponent item={fakeItem} />);
//     console.log(wrapper.debug());
//     const buttonList = wrapper.find('.buttonList');
//     expect(buttonList.children()).toHaveLength(3);
//     expect(buttonList.find('Link')).toHaveLength(1);
//     expect(buttonList.find('AddToCart').exists()).toBe(true);
//     expect(buttonList.find('DeleteItem').exists()).toBe(true);
//   });
// });
