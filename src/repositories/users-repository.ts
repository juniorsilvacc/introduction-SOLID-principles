import { CreateUserDTO } from '../dtos/create-user-dto';
import { User } from '../models/user';

interface IUsersRepository {
  create(data: CreateUserDTO): Promise<User>;
}

export { IUsersRepository };
