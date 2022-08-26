import { AppError } from '../../../../config/errors/app-error';
import { IUsersRepository } from '../../repositories/users-repository';

interface IRequest {
  id: string;
}

class DeleteUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByUser(id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    await this.usersRepository.deleteUser(id);
  }
}

export { DeleteUserUseCase };
