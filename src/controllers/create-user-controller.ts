import { Request, Response } from 'express';
import { UserRepository } from '../repositories/implementations/users-repository';
import { CreateUserService } from '../services/create-user-service';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, registry } = request.body;

    const usersImplementations = new UserRepository();
    const createUserService = new CreateUserService(usersImplementations);

    const user = await createUserService.execute({
      name,
      username,
      email,
      registry,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
