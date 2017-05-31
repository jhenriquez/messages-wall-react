import React from 'react';
import { shallow, mount } from 'enzyme';

import MessageList from './messageList';

describe('<MessageList />', () => {

  test('It should render a .message-list', () => {
    const messageList = shallow(<MessageList />).find('.message-list');
    expect(messageList).toHaveLength(1);
  });

  describe('<MessageList messages="<Array>" />', () => {
    test('It defaults to an empty array when not provided', () => {
      const component = mount(<MessageList />);
      expect(component.prop('messages')).toEqual([]);
    });
  });

  describe('<MessageList empty="<string>" />', () => {
    test('It accepts an "empty" prop with a message to display if the messages array is empty', () => {
      const component = mount(<MessageList empty="There are no messages" />);
      const emptyMessage = component.find('.empty-message');
      expect(emptyMessage).toHaveLength(1);
    });
  });

});