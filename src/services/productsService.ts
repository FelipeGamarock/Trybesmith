import { Product } from '../interfaces/productsInterface';
import connection from '../models/connection';
import ProductsModel from '../models/productsModel';

export default class ProductsService {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public create = async (product: Product): Promise<Product> => {
    const produto = await this.model.create(product);
    return produto;
  };
}