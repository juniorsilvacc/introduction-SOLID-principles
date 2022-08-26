import { Request, Response } from 'express';
import { UserRepository } from '../repositories/implementations/users-repository';
import { ListAllUsersService } from '../services/list-all-users-service';

class ListAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const usersImplementations = new UserRepository();
    const listAllUsersService = new ListAllUsersService(usersImplementations);

    const users = await listAllUsersService.execute();

    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
