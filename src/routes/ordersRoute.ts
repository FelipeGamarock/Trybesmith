import { Router } from 'express';
import OrdersController from '../controllers/ordersController';

const ordersRoute = Router();

const controller = new OrdersController();

ordersRoute.get('/', controller.getAll);

export default ordersRoute;