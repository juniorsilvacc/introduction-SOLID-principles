import { Request, Response } from 'express';
import { PostgresUsersRepository } from '../../repositories/implementations/postgres-users-repository';
import { ShowUserUseCase } from './show-user-usecase';

class ShowUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const usersImplementations = new PostgresUsersRepository();
    const showUserUseCase = new ShowUserUseCase(usersImplementations);

    const user = await showUserUseCase.execute({ id });

    return response.status(200).json(user);
  }
}

export { ShowUserController };
