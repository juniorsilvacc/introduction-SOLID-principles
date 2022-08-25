import { client } from '../../database/db';
import { Client } from 'pg';
import { CreateUserDTO } from '../../dtos/create-user-dto';
import { User } from '../../models/user';
import { IUsersRepository } from '../users-repository';
import { v4 as uuidV4 } from 'uuid';

class UserRepository implements IUsersRepository {
  private repository: Client;

  constructor() {
    this.repository = client;
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
