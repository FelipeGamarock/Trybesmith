import { Request, Response } from 'express';
import { User } from '../interfaces/usersInterface';
import UsersService from '../services/usersService';

export default class UsersController {
  private service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body as User;
    const newUser = await this.service.create(user);
    const token = await this.service.createToken(newUser);
    return res.status(201).json({ token });
  };
}