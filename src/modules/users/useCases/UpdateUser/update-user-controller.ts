import { Request, Response } from 'express';
import { PostgresUsersRepository } from '../../repositories/implementations/postgres-users-repository';
import { UpdateUserUseCase } from './update-user-usecase';

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, username, email, registry } = request.body;

    const usersImplementations = new PostgresUsersRepository();
    const updateUserUseCase = new UpdateUserUseCase(usersImplementations);

    const user = await updateUserUseCase.execute({
      id,
      name,
      username,
      email,
      registry,
    });

    return response.status(200).json(user);
  }
}

export { UpdateUserController };
