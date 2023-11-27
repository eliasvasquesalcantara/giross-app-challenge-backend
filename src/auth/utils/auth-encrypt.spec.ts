import { AuthEncrypt } from './auth-encrypt';

const email = 'fakeEmail';
const password = 'fakePassword';
const decryptedStr = `${email}:${password}`;
console.log(decryptedStr);
const encryptedPassword = btoa(decryptedStr);

describe('AuthEncrypt', () => {
  describe('encryptPassword', () => {
    it('should encrypt the password', () => {
      const result = AuthEncrypt.encryptPassword(email, password);

      expect(result).toBe(encryptedPassword);
    });
  });

  describe('decryptPassword', () => {
    it('should decrypt the password', () => {
      const result = AuthEncrypt.decryptPassword(encryptedPassword);

      expect(result).toBe(decryptedStr);
    });
  });

  describe('getUserFromDecryptedToken', () => {
    it('should return password and email', () => {
      console.log(decryptedStr);
      const result = AuthEncrypt.getUserFromDecryptedToken(decryptedStr);

      expect(result.email).toBe(email);
      expect(result.password).toBe(password);
    });
  });
});
