import { Request, Response } from 'express';
import * as Yup from 'yup';

import { UsersServices } from '../services/UsersServices';

class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validations Failed' });
    }

    const usersServices = new UsersServices();

    const user = await usersServices.create({
      name,
      email,
    });

    return response.json(user);
  }
}

export { UsersController };
