import { Request, Response } from 'express';
import { UserRepository } from '../repositories/implementations/users-repository';
import { DeleteUserService } from '../services/delete-user-service';

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const usersImplementations = new UserRepository();
    const deleteUserService = new DeleteUserService(usersImplementations);

    await deleteUserService.execute({ id });

    return response.status(204).json();
  }
}

export { DeleteUserController };
