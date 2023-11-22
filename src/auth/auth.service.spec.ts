import { AuthService } from './auth.service';
import { User } from './entities/User';

const repositoryMock = {
  findOne: jest.fn(),
};

describe('AuthService', () => {
  describe('login', () => {
    let service: AuthService;

    beforeEach(() => {
      service = new AuthService(repositoryMock as any);
    });

    it('should throw "User not registered" if user is NOT in database', async () => {
      repositoryMock.findOne.mockResolvedValue(null);

      let errorMessage;
      try {
        await service.login(
          new User({
            email: 'Test',
            password: 'Test@123',
          }),
        );
      } catch (error) {
        errorMessage = error.message;
      }

      expect(errorMessage).toBe('User not registered');
    });

    it('should throw "Wrong email or password" if emails do NOT match', async () => {
      const email = 'Email@test.com';
      const password = 'Test@123';

      repositoryMock.findOne.mockResolvedValue({
        email,
        password: User.encryptPassword(email, password),
      });

      let errorMessage;
      try {
        await service.login(
          new User({
            email: 'Email@diff.com',
            password,
          }),
        );
      } catch (error) {
        errorMessage = error.message;
      }

      expect(errorMessage).toBe('Wrong email or password');
    });

    it('should throw "Wrong email or password" if passwords do NOT match', async () => {
      const email = 'Email@test.com';
      const password = 'Test@123';

      repositoryMock.findOne.mockResolvedValue({
        email,
        password: User.encryptPassword(email, password),
      });

      let errorMessage;
      try {
        await service.login(
          new User({
            email,
            password: 'PasswordDiff@123',
          }),
        );
      } catch (error) {
        errorMessage = error.message;
      }

      expect(errorMessage).toBe('Wrong email or password');
    });

    it('should return "true" if credentials match', async () => {
      const email = 'Email@test.com';
      const password = 'Test@123';

      repositoryMock.findOne.mockResolvedValue({
        email,
        password: User.encryptPassword(email, password),
      });

      const response = await service.login(
        new User({
          email,
          password,
        }),
      );

      expect(response).toBe(true);
    });
  });
});
