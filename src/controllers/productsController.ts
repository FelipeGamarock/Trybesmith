import { Request, Response } from 'express';
import { Product } from '../interfaces/productsInterface';
import * as productsService from '../services/productsService';

const productsController = {
  async create(req: Request, res: Response) {
    const product = req.body as Product;
    const { status, data } = await productsService.create(product);
    return res.status(status).json(data);
  },
};

export default productsController;