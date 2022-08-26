import { Request, Response } from 'express';
import { MailProvider } from '../../../../shared/providers/mail/implementations/mail-provider-implementations';
import { PostgresUsersRepository } from '../../repositories/implementations/postgres-users-repository';
import { CreateUserUseCase } from './create-user-usecase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, registry } = request.body;

    const usersImplementations = new PostgresUsersRepository();
    const mailProvider = new MailProvider();
    const createUserUseCase = new CreateUserUseCase(
      usersImplementations,
      mailProvider,
    );

    const user = await createUserUseCase.execute({
      name,
      username,
      email,
      registry,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
