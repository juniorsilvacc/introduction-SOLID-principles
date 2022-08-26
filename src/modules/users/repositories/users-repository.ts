import { CreateUserDTO } from '../dtos/create-user-dto';
import { User } from '../models/user';

interface IUsersRepository {
  create(data: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findUsers(): Promise<User[]>;
}

export { IUsersRepository };
