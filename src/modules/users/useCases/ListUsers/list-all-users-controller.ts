import { Request, Response } from 'express';
import { PostgresUsersRepository } from '../../repositories/implementations/postgres-users-repository';
import { ListAllUsersUseCase } from './list-all-users-usecase';

class ListAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const usersImplementations = new PostgresUsersRepository();
    const listAllUsersUseCase = new ListAllUsersUseCase(usersImplementations);

    const users = await listAllUsersUseCase.execute();

    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
