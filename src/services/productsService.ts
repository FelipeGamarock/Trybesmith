import { Product } from '../interfaces/productsInterface';
import * as productsModel from '../models/productsModel';

const productsService = {
  async create(product: Product) {
    const data = await productsModel.create(product);
    return { status: 201, data };
  },
};

export default productsService;