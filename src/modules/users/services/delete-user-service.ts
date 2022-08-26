import { AppError } from '../../../config/errors/app-error';
import { User } from '../models/user';
import { IUsersRepository } from '../repositories/users-repository';

interface IRequest {
  id: string;
}

class DeleteUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByUser(id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    await this.usersRepository.deleteUser(id);
  }
}

export { DeleteUserService };