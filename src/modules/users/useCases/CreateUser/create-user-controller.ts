import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/implementations/users-repository';
import { CreateUserUseCase } from './create-user-usecase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, registry } = request.body;

    const usersImplementations = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(usersImplementations);

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
