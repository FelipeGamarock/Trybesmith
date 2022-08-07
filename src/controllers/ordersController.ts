import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

export default class OrdersController {
  private service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  public getAll = async (req: Request, res: Response) => {
    const orders = await this.service.getAll();
    res.status(200).json(orders);
  };
}