import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Button from '../components/Button';

describe('<Button />', () => {
  it('renders an `.btn`', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button')).toHaveLength(1)
  });
});
