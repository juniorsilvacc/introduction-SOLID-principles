import { AppError } from '../../../config/errors/app-error';
import { User } from '../models/user';
import { IUsersRepository } from '../repositories/users-repository';

interface IRequest {
  id: string;
  name: string;
  username: string;
  email: string;
  registry: string;
}

class UpdateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    id,
    name,
    username,
    email,
    registry,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findByUser(id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const userWithUpdatedEmail = await this.usersRepository.findByEmail(email);

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== id) {
      throw new AppError('User with updated email already exists');
    }

    user.name = name;
    user.username = username;
    user.email = email;
    user.registry = registry;

    await this.usersRepository.updateUser(user);

    return user;
  }
}

export { UpdateUserService };
