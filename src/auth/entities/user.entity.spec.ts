import { AuthEncrypt } from '../utils/auth-encrypt';
import { User } from './user.entity';

const encryptPasswordMock = jest.spyOn(AuthEncrypt, 'encryptPassword');

describe('User', () => {
  describe('constructor', () => {
    it('should create object with setting the correct properties', () => {
      encryptPasswordMock.mockReturnValue('senha-encriptografada');

      const obj = new User({
        email: 'EmailFake',
        password: 'PasswordFake',
      });

      expect(obj.email).toBe('EmailFake');
      expect(obj.decryptedPassword).toBe('PasswordFake');
      expect(obj.password).toBe('senha-encriptografada');
    });
  });
});
