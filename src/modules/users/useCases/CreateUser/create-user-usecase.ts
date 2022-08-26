import { AppError } from '../../../../config/errors/app-error';
import { CreateUserDTO } from '../../dtos/create-user-dto';
import { User } from '../../models/user';
import { IUsersRepository } from '../../repositories/users-repository';

class CreateUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({
    name,
    username,
    email,
    registry,
  }: CreateUserDTO): Promise<User> {
    const userEmailExists = await this.usersRepository.findByEmail(email);

    if (userEmailExists) {
      throw new AppError(`Email ${email} already exists`);
    }

    const user = this.usersRepository.create({
      name,
      username,
      email,
      registry,
    });

    return user;
  }
}

export { CreateUserUseCase };
