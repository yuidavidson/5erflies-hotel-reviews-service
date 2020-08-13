import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TotalRating from '../components/TotalRating';

describe('<TotalRating />', () => {
  const wrapper = shallow(<TotalRating />);
  it('shoud exist', () => {
    expect(wrapper.exists()).to.equal(true);
  });
});
