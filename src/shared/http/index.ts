import { Router } from 'express';
import { usersRouter } from './routes/users.routes';

const router = Router();

router.use('/api/users', usersRouter);

export { router };
