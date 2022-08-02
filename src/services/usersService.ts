import jwt from 'jsonwebtoken';
import { User } from '../interfaces/usersInterface';
import connection from '../models/connection';
import UsersModel from '../models/usersModel';

const secret = 'myLittleSecret';

export default class UsersService {
  private model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public create = async (user: User): Promise<User> => {
    const newUser = await this.model.create(user);
    return newUser;
  };

  public createToken = async (data: User) => {
    const token = jwt.sign({ data }, secret);
    return token;
  };
}