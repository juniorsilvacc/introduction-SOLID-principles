import { Router } from 'express';
import { CreateUserController } from '../controllers/create-user-controller';
import { ListAllUsersController } from '../controllers/list-all-users-controller';

const usersRouter = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();

usersRouter.post('/', createUserController.handle);
usersRouter.get('/', listAllUsersController.handle);

export { usersRouter };
