import { Request, Response } from 'express';
import { Product } from '../interfaces/productsInterface';
import ProductsService from '../services/productsService';

export default class ProductsController {
  private service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body as Product;
    const produto = await this.service.create(product);
    return res.status(201).json(produto);
  };
}