import { CreateUserDTO } from '../dtos/create-user-dto';
import { User } from '../models/user';

interface IUsersRepository {
  create(data: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findUsers(): Promise<User[]>;
  findByUser(id: string): Promise<User | null>;
  deleteUser(id: string): Promise<void>;
}

export { IUsersRepository };
