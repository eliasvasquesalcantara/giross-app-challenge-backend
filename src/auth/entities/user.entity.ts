import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor(user: { email: string; password: string }) {
    this.email = user?.email;
    this.password = User.encryptPassword(user?.email, user?.password);
  }

  static encryptPassword(email: string, password: string) {
    return btoa(`${email}:${password}`);
  }

  static decryptPassword(hash: string) {
    return atob(hash);
  }

  static getUserFromDecryptedToken(decryptedToken: string): User {
    return new User({
      email: decryptedToken.split(':')[0],
      password: decryptedToken.split(':')[0],
    });
  }
}
