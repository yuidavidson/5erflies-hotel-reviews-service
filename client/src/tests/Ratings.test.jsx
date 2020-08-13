import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Ratings from '../components/Ratings';

describe('<Ratings />', () => {
  const wrapper = shallow(<Ratings />);
  it('shoud exist', () => {
    expect(wrapper.exists()).to.equal(true);
  });
});
