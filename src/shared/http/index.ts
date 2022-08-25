import { Router } from 'express';
import { usersRouter } from '../../modules/users/routes/users.routes';

const router = Router();

router.use('/api/users', usersRouter);

export { router };
