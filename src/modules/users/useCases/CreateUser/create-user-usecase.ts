import { AppError } from '../../../../config/errors/app-error';
import { IMailProvider } from '../../../../shared/providers/mail/mail-provider';
import { CreateUserDTO } from '../../dtos/create-user-dto';
import { User } from '../../models/user';
import { IUsersRepository } from '../../repositories/users-repository';

class CreateUserUseCase {
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly mailProvider: IMailProvider,
  ) {}

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

    this.mailProvider.sendMail({
      to: {
        name,
        email,
      },
      from: {
        name: 'Equipe App',
        email: 'equipe@app.com',
      },
      subject: 'Seja bem vindo',
      body: '<p>Usuário cadastrado com sucesso.</p>',
    });

    return user;
  }
}

export { CreateUserUseCase };
