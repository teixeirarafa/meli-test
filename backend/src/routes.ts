import { Router } from 'express';
import ItemsController from './controllers/ItemsController';

const routes = Router();

routes.get('/api/items', ItemsController.search);
routes.get('/api/items/:id', ItemsController.detail);

export default routes;
