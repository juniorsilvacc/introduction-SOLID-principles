import { Client } from 'pg';

import { IUsersRepository } from '../users-repository';
import { v4 as uuidV4 } from 'uuid';
import { User } from '../../models/user';
import { client } from '../../../../shared/database/db';
import { CreateUserDTO } from '../../dtos/create-user-dto';
import { UpdateUserDTO } from '../../dtos/update-user-dto';

class UserRepository implements IUsersRepository {
  private repository: Client;

  constructor() {
    this.repository = client;
  }

  async updateUser({
    id,
    name,
    username,
    email,
    registry,
  }: UpdateUserDTO): Promise<void> {
    await this.repository.query(
      'UPDATE users SET "name" = $1, "username" = $2, "email" = $3, "registry" = $4 WHERE "id" = $5',
      [name, username, email, registry, id],
    );

    // if (rows.length > 0) {
    //   return rows[0];
    // } else {
    //   return null;
    // }
  }

  async deleteUser(id: string): Promise<void> {
    await this.repository.query('DELETE FROM users WHERE id = $1', [id]);
  }

  async findByUser(id: string): Promise<User | null> {
    const { rows } = await this.repository.query(
      'SELECT * FROM users WHERE id = $1 LIMIT 1',
      [id],
    );

    if (rows.length > 0) {
      return rows[0];
    }

    return null;
  }

  async findUsers(): Promise<User[]> {
    const { rows } = await this.repository.query('SELECT * FROM users');

    if (rows.length > 0) {
      return rows;
    }

    return rows;
  }

  async findByEmail(email: string): Promise<User | null> {
    const { rows } = await this.repository.query(
      'SELECT * FROM users WHERE email = $1 LIMIT 1',
      [email],
    );

    if (rows.length > 0) {
      return rows[0];
    }

    return null;
  }

  async create({
    name,
    username,
    email,
    registry,
  }: CreateUserDTO): Promise<User> {
    const id = uuidV4();

    await this.repository.query(
      'INSERT INTO users (id, name, username, email, registry) VALUES ($1, $2, $3, $4, $5)',
      [id, name, username, email, registry],
    );

    const user = Object.assign({
      id,
      name,
      username,
      email,
      registry,
    });

    return user;
  }
}

export { UserRepository };
