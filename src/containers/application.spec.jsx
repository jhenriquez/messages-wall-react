import React from 'react';
import { mount } from 'enzyme';

import Loading from '../components/loading';
import Publish from '../components/publish';
import MessageList from '../components/messageList';

import Application from './application';

describe('<Application />', () => {

  let component = null;

  beforeEach(() => component = mount(<Application />));

  describe('Initial State', () => {

    test('Inital state should be { status: { user: "loading", messages: "loading"  }, user: null, messages: [] }', () => {
      expect(component.state()).toEqual({
        status: {
          user: 'loading',
          messages: 'loading'
        },
        user: null,
        messages: []
      });
    });

    test('It should render <Loading /> instead of both <Publish /> and <MessageList /> respectively.', () => {
      const loadingInstances = component.find(Loading);
      expect(loadingInstances).toHaveLength(2);
    });

  });

  describe('<Publish />', () => {
    test('It should render <Publish /> any time the user status state is not "loading"', () => {
      expect(component.find(Publish)).toHaveLength(0);

      component.setState(
        Object.assign({}, component.state(), {
          status: Object.assign({}, component.state('status'), { user: 'fail' })
        })
      );

      expect(component.find(Publish)).toHaveLength(1);
    });

    test('It should pass along the "prop" with the value held in the state for it', () => {
      const user = { email: 'someEmail@orSomething.com' };

      component.setState(
        Object.assign({}, component.state(), {
          status: Object.assign({}, component.state('status'), { user: 'success' }),
          user: user
        })
      );

      expect(component.find(Publish).prop('user')).toEqual(user);
    });
  });

  describe('<MessageList />', () => {
    test('It should render <MessageList /> any time the messages status state is not "loading"', () => {
      expect(component.find(MessageList)).toHaveLength(0);

      component.setState(
        Object.assign({}, component.state(), {
          status: Object.assign({}, component.state('status'), { messages: 'fail' })
        })
      );

      expect(component.find(MessageList)).toHaveLength(1);
    });

    test('It should pass along the "messages" prop with the value held in the state', () => {
      component.setState(
        Object.assign({}, component.state(), {
          status: Object.assign({}, component.state('status'), { messages: 'success' }),
          messages: [1,2,3,4]
        })
      );

      expect(component.find(MessageList).prop('messages')).toEqual([1,2,3,4]);
    });
  });

});