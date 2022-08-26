import { Request, Response } from 'express';
import { UserRepository } from '../repositories/implementations/users-repository';
import { UpdateUserService } from '../services/update-user-service';

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, username, email, registry } = request.body;

    const usersImplementations = new UserRepository();
    const updateUserService = new UpdateUserService(usersImplementations);

    const user = await updateUserService.execute({
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
