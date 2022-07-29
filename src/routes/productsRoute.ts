import { Router } from 'express';
import * as productsController from '../controllers/productsController';

const productsRoute = Router();

productsRoute.post('/', productsController.create);

export default productsRoute;