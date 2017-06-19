import Message from './message';
import { mockUser } from './user.spec';

export const messageMock = {
  text: 'Some text message',
  createdAt: new Date(),
  author: mockUser
};

describe('Message Model', () => {

  describe('#()', () => {

    test('Given an object containing the necessary values it will succeed creating a Message model instance.', () => {
      const message = new Message(messageMock);
      expect(message.text).toEqual(messageMock.text);
      expect(message.createdAt).toEqual(messageMock.createdAt);
      expect(message.author).toEqual(message.author);
    });

  });

});