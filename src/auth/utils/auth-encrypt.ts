export class AuthEncrypt {
  static encryptPassword(email: string, password: string) {
    return btoa(`${email}:${password}`);
  }

  static decryptPassword(hash: string) {
    return atob(hash);
  }

  static getUserFromDecryptedToken(decryptedToken: string): {
    email: string;
    password: string;
  } {
    return {
      email: decryptedToken.split(':')[0],
      password: decryptedToken.split(':')[1],
    };
  }
}
