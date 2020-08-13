import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
// import sinon from 'sinon';

import App from '../components/App';

// import TotalRating from '../components/TotalRating';

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('shoud exist', () => {
    expect(wrapper.exists()).to.equal(true);
  });
  // change to 4 components after button is added
  it('should render three components', () => {
    expect(wrapper.children()).to.have.lengthOf(3);
  });
});
