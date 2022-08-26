import { Router } from 'express';
import { CreateUserController } from '../controllers/create-user-controller';
import { DeleteUserController } from '../controllers/delete-user-controller';
import { ListAllUsersController } from '../controllers/list-all-users-controller';
import { ShowUserController } from '../controllers/show-user-controller';
import { UpdateUserController } from '../controllers/update-user-controller';

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
