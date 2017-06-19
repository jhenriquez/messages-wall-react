import User, { IUser } from './user';

describe ('User Model',  () => {

  let mockUser: any = {
    name: 'Test User',
    email: 'test@test.com',
    emailHash: 'b642b4217b34b1e8d3bd915fc65c4452'
  };

  describe('#()', () => {

    let user: IUser = null;

    beforeEach(() => {
      user = new User(mockUser);
    });

    test('Given an object containing the necessary values it will succeed creating a User model instance.', () => {
      expect(user.name).toBe(mockUser.name);
      expect(user.email).toBe(mockUser.email);
      expect(user.emailHash).toBe(mockUser.emailHash);
    });

  });

});