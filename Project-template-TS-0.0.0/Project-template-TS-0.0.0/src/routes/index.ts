import { Router } from 'express';
import classRouter from './Class.routes';

const routes = Router();

routes.use('/class',classRouter);
export default routes;
 