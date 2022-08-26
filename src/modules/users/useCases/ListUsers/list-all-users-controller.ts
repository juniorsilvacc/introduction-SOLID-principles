import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/implementations/users-repository';
import { ListAllUsersUseCase } from './list-all-users-usecase';

class ListAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const usersImplementations = new UserRepository();
    const listAllUsersUseCase = new ListAllUsersUseCase(usersImplementations);

    const users = await listAllUsersUseCase.execute();

    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
