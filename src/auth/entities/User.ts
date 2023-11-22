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
    this.password = this.encrypt(user?.email, user?.password);
  }

  encrypt(email: string, password: string) {
    return btoa(`${email}:${password}`);
  }

  decrypt(hash: string) {
    return atob(hash);
  }
}
