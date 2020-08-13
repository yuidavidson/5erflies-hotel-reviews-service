import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
// import sinon from 'sinon';

import App from '../components/App';

import setData from '../components/App';

// import TotalRating from '../components/TotalRating';

describe('<App />', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  const data = {
    data: [{
      propertyId: 101,
      reviewId: 0,
      propertyName: 'Oasis',
      username: 'John Doe',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/a1chapone/128.jpg',
      review: 'Lovely Place!',
      dayPosted: '2019-11-03T12:09:22.484Z',
      rating: {
        cleanliness: 4,
        communication: 3,
        accuracy: 4,
        checkIn: 5,
        location: 4,
        value: 5,
      },
      response: {
        hostname: 'Yui',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/a1chapone/128.jpg',
        response: 'Thanks!',
        dayCommented: '2019-11-03T12:36:21.484Z',
      },
    }],
  };
  it('shoud exist', () => {
    expect(wrapper.exists()).to.equal(true);
  });
  // change to 4 components after button is added
  it('should render three components', () => {
    expect(wrapper.children()).to.have.lengthOf(3);
  });
  it('dataSet at state is true', () => {
    instance.setData(data);
    const status = wrapper.state().dataSet;
    expect(status).to.equal(true);
  });
});
