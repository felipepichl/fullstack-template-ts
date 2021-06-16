import { Request, Response } from 'express';

import { UsersServices } from '../services/UsersServices';

class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const usersServices = new UsersServices();

    const user = await usersServices.create({
      name,
      email,
    });

    return response.json(user);
  }
}

export { UsersController };
