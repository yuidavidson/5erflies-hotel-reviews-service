import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ReviewItem from '../components/ReviewItem';

describe('<ReviewItem />', () => {
  const wrapper = shallow(<ReviewItem />);
  it('shoud exist', () => {
    expect(wrapper.exists()).to.equal(true);
  });
});
