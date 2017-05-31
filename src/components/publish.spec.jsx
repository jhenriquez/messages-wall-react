import React, { Component } from 'react';
import { shallow } from 'enzyme';

import Publish from './publish';

describe('<Publish />', () => {
  describe('anonymous (no-user provided)', () => {

    test('It renders an ".anonymous-content" element', () => {
      const anonymousContent = shallow(<Publish />).find('.anonymous-content');
      expect(anonymousContent).toHaveLength(1);
    });

    test('It should indicate the user needs to "signup"', () => {
      const anonymousContent = shallow(<Publish />).find('.anonymous-content');
      expect(anonymousContent.html()).toEqual(expect.stringContaining('signup'));
    });

    test('It should indicate the user needs to "signin"', () => {
      const anonymousContent = shallow(<Publish />).find('.anonymous-content');
      expect(anonymousContent.html()).toEqual(expect.stringContaining('signin'));
    });

  });
});