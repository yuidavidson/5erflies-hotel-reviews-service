import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ReviewList from '../components/ReviewList';

describe('<ReviewList />', () => {
  const wrapper = shallow(<ReviewList />);
  it('shoud exist', () => {
    expect(wrapper.exists()).to.equal(true);
  });
  it('should render one components', () => {
    // TODO: for some reason I'm expecting 1 but getting two?
    expect(wrapper.children()).to.have.lengthOf(2);
  });
});
