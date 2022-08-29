import express from 'express';
import 'express-async-errors';
import { exceptions } from './config/handle-exceptions';

import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import { router } from './shared/http';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use(exceptions);

export { app };
