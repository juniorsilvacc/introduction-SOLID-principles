import { CreateUserDTO } from '../../dtos/create-user-dto';
import { UpdateUserDTO } from '../../dtos/update-user-dto';
import { User } from '../../models/user';
import { IUsersRepository } from '../users-repository';
import { v4 as uuidV4 } from 'uuid';

class InMemoryUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async create({
    name,
    username,
    email,
    registry,
  }: CreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      id: uuidV4(),
      name,
      username,
      email,
      registry,
    });

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async findUsers(): Promise<User[]> {
    const user = this.users;

    return user;
  }

  async findByUser(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  async deleteUser(id: string): Promise<void> {
    this.users.find(user => user.id === id);
  }

  async updateUser(data: UpdateUserDTO): Promise<void> {
    this.users;
  }
}

export { InMemoryUsersRepository };
