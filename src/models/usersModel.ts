import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces/usersInterface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];

    const result = await this.connection.execute<ResultSetHeader>(query, values);
    const [{ insertId: id }] = result;

    const newUser = { id, username, classe, level };
    return newUser;
  }
}
