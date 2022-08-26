import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/implementations/users-repository';
import { DeleteUserUseCase } from './delete-user-usecase';

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const usersImplementations = new UserRepository();
    const deleteUserUseCase = new DeleteUserUseCase(usersImplementations);

    await deleteUserUseCase.execute({ id });

    return response.status(204).json();
  }
}

export { DeleteUserController };
