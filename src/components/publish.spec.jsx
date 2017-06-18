import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Publish, { AnonymousPublisher } from './publish';

describe('<Publish />', () => {
  describe('anonymous (no-user provided)', () => {

    const WrappedPublish = () => (
      <MemoryRouter>
          <Publish />
      </MemoryRouter>
    );

    test('It renders an <AnonymousPublisher /> element', () => {
      const anonymousContent = mount(<WrappedPublish />).find(AnonymousPublisher);
      expect(anonymousContent).toHaveLength(1);
    });

    test('It should indicate the user needs to "signup"', () => {
      const anonymousContent = shallow(<WrappedPublish />);
      expect(anonymousContent.html()).toEqual(expect.stringContaining('signup'));
    });

    test('It should indicate the user needs to "signin"', () => {
      const anonymousContent = shallow(<WrappedPublish />);
      expect(anonymousContent.html()).toEqual(expect.stringContaining('signin'));
    });

  });
});