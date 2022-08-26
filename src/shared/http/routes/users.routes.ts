import { Router } from 'express';
import { CreateUserController } from '../../../modules/users/useCases/CreateUser/create-user-controller';
import { DeleteUserController } from '../../../modules/users/useCases/DeleteUser/delete-user-controller';
import { ListAllUsersController } from '../../../modules/users/useCases/ListUsers/list-all-users-controller';
import { ShowUserController } from '../../../modules/users/useCases/ShowUser/show-user-controller';
import { UpdateUserController } from '../../../modules/users/useCases/UpdateUser/update-user-controller';

const usersRouter = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const showUserController = new ShowUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

usersRouter.post('/', createUserController.handle);
usersRouter.get('/', listAllUsersController.handle);
usersRouter.get('/:id', showUserController.handle);
usersRouter.delete('/:id', deleteUserController.handle);
usersRouter.put('/:id', updateUserController.handle);

export { usersRouter };
