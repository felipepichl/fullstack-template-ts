import { Request, Response } from 'express';
import { AppError } from 'app/error/AppError';
import * as Yup from 'yup';

import { UsersServices } from '../services/UsersServices';

class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validations Failed');
    }

    const usersServices = new UsersServices();

    const user = await usersServices.create({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}

export { UsersController };
