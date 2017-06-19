import React from 'react';
import { mount } from 'enzyme';

import Loading from '../components/loading';
import Publish from '../components/publish';
import MessageList from '../components/messageList';

import Application from './application';

/**
 * The publish component renders <Link /> routing helpers. Have we not mock it, we would need to test the application component
 * together with routing functionality, when in this case we only care about testing that the application renders the appropriate
 * component.
 */
jest.mock('../components/publish', () => {
  return function Publish () {
    return (<div></div>);
  };
});

describe('<Application />', () => {

  let component = null;

  beforeEach(() => component = mount(<Application />));

  describe('Initial State', () => {

    test('Inital state should be { status: { isUserLoading: true, isMessagesLoading: true  }, user: null, messages: [] }', () => {
      expect(component.state()).toEqual({
        status: {
          isUserLoading: true,
          isMessagesLoading: true
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

    afterAll(() => { jest.unmock('../components/publish'); });

    test('It should render <Publish /> any time the user status state is not "loading"', () => {
      expect(component.find(Publish)).toHaveLength(0);

      component.setState(
        Object.assign({}, component.state(), {
          status: Object.assign({}, component.state('status'), { isUserLoading: false })
        })
      );

      expect(component.find(Publish)).toHaveLength(1);
    });

    test('It should pass along the "prop" with the value held in the state for it', () => {
      const user = { email: 'someEmail@orSomething.com' };

      component.setState(
        Object.assign({}, component.state(), {
          status: Object.assign({}, component.state('status'), { isUserLoading: false }),
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
          status: Object.assign({}, component.state('status'), { isMessagesLoading: false })
        })
      );

      expect(component.find(MessageList)).toHaveLength(1);
    });

    test('It should pass along the "messages" prop with the value held in the state', () => {
      component.setState(
        Object.assign({}, component.state(), {
          status: Object.assign({}, component.state('status'), { isMessagesLoading: false }),
          messages: [1,2,3,4]
        })
      );

      expect(component.find(MessageList).prop('messages')).toEqual([1,2,3,4]);
    });
  });

});