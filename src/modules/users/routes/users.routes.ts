import { Router } from 'express';
import { CreateUserController } from '../controllers/create-user-controller';

const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post('/', createUserController.handle);

export { usersRouter };
