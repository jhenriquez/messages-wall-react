import React, { Component } from 'react';
import { shallow } from 'enzyme';

import Publish, { AnonymousPublisher } from './publish';

describe('<Publish />', () => {
  describe('anonymous (no-user provided)', () => {

    test('It renders an <AnonymousPublisher /> element', () => {
      const anonymousContent = shallow(<Publish />).find(AnonymousPublisher);
      expect(anonymousContent).toHaveLength(1);
    });

    test('It should indicate the user needs to "signup"', () => {
      const anonymousContent = shallow(<Publish />);
      expect(anonymousContent.html()).toEqual(expect.stringContaining('signup'));
    });

    test('It should indicate the user needs to "signin"', () => {
      const anonymousContent = shallow(<Publish />);
      expect(anonymousContent.html()).toEqual(expect.stringContaining('signin'));
    });

  });
});