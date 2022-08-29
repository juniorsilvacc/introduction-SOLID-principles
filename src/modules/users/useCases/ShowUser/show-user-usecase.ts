import { AppError } from '../../../../config/errors/app-error';
import { User } from '../../models/user';
import { IUsersRepository } from '../../repositories/users-repository';

interface IRequest {
  id: string;
}

class ShowUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ id }: IRequest): Promise<User | null> {
    const user = await this.usersRepository.findByUser(id);

    if (!user) {
      throw new AppError('User does not exists', 404);
    }

    return user;
  }
}

export { ShowUserUseCase };
