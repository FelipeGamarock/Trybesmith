import { Order } from '../interfaces/ordersInterface';
import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';

export default class OrdersService {
  private model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.model.getAll();
    return orders;
  };
}