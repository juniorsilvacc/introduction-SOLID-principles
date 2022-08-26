import { Router } from 'express';
import { CreateUserController } from '../controllers/create-user-controller';
import { ListAllUsersController } from '../controllers/list-all-users-controller';
import { ShowUserController } from '../controllers/show-user-controller';

const usersRouter = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const showUserController = new ShowUserController();

usersRouter.post('/', createUserController.handle);
usersRouter.get('/', listAllUsersController.handle);
usersRouter.get('/:id', showUserController.handle);

export { usersRouter };
