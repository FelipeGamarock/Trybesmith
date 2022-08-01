import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const productsRoute = Router();

const controller = new ProductsController();

productsRoute.post('/', controller.create);

export default productsRoute;