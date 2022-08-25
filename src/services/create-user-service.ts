import { CreateUserDTO } from '../dtos/create-user-dto';
import { User } from '../models/user';
import { IUsersRepository } from '../repositories/users-repository';

class CreateUserService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({
    name,
    username,
    email,
    registry,
  }: CreateUserDTO): Promise<User> {
    const user = this.usersRepository.create({
      name,
      username,
      email,
      registry,
    });

    return user;
  }
}

export { CreateUserService };
