import React from 'react';
import { shallow } from 'enzyme';

import Loading from './loading';

describe('<Loading />', () => {
  let component;

  beforeEach(() => { component = shallow(<Loading />); });

  test('It should render a new .loading-container', () => {
    const loadingContainer = component.find('.loading-container');
    expect(loadingContainer).toHaveLength(1);
  });

  describe('<i />', () => {
    test('It should render an <i /> to hold the loading icon', () => {
      const loadingIcon = component.find('i');
      expect(loadingIcon).toHaveLength(1);
    });
  });

  describe('<Loading message="<string>" />', () => {
    test('It should render a text message when given the message attribute', () => {
      const componentWithMessage = shallow(<Loading message="A text message" />);
      const textMessage = componentWithMessage.find('p');
      expect(textMessage.text()).toBe('A text message');
    });
  });
});

