import { Request, Response } from 'express';
import { UserRepository } from '../repositories/implementations/users-repository';
import { ShowUserService } from '../services/show-user-service';

class ShowUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const usersImplementations = new UserRepository();
    const showUserService = new ShowUserService(usersImplementations);

    const user = await showUserService.execute({ id });

    return response.status(200).json(user);
  }
}

export { ShowUserController };
