// import React from 'react';
const React = require('react');
// import { shallow } from 'enzyme';
const { shallow } = require('enzyme');

// // Components
// import Ratings from './Ratings.jsx';
const Ratings = require('./Ratings.jsx');

// function setup() {
//   const props = {
//     imgPath: 'some/image/path/to/a/mock/image',
//   };
//   const wrapper = shallow(<Ratings />);
//   return { wrapper, props };
// }

// describe('WelcomeMessage Test Suite', () => {
//   it('Should have an image', () => {
//     const { wrapper } = setup();
//     expect(wrapper.find('img').exists()).toBe(true);
//   });
// });

describe('Examining the syntax of Jest tests', () => {

  it('sums numbers', () => {
      expect(1 + 2).toEqual(3);
      expect(2 + 2).toEqual(4);
   });
});
