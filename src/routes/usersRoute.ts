import { Router } from 'express';
import UserController from '../controllers/usersController';

const userRoute = Router();

const controller = new UserController();

userRoute.post('/', controller.create);

export default userRoute;