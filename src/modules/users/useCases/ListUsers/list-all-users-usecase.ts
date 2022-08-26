import { User } from '../../models/user';
import { IUsersRepository } from '../../repositories/users-repository';

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.findUsers();

    return users;
  }
}

export { ListAllUsersUseCase };
