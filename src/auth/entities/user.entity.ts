import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AuthEncrypt } from '../utils/auth-encrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  decryptedPassword: string;

  constructor(user: { email: string; password: string }) {
    this.email = user?.email;
    this.decryptedPassword = this.password;
    this.password = AuthEncrypt.encryptPassword(user?.email, user?.password);
  }
}
