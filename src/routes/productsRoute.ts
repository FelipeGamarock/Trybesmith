import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const productsRoute = Router();

const controller = new ProductsController();

productsRoute.post('/', controller.create);

productsRoute.get('/', controller.getAll);

export default productsRoute;