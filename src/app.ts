import express from 'express';
import 'express-async-errors';
import { exceptions } from './config/handle-exceptions';
import { router } from './shared/http';
const app = express();

app.use(express.json());
app.use(router);

app.use(exceptions);

export { app };
