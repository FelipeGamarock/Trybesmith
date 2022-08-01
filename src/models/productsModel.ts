import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/productsInterface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const values = [name, amount];

    const result = await this.connection.execute<ResultSetHeader>(query, values);
    const [{ insertId: id }] = result;

    const newProduct = { id, name, amount };
    return newProduct;
  }

  public async getAll(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as Product[];
  }
}
