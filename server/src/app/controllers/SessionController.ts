import { Request, Response } from 'express';
import * as Yup from 'yup';

import { SessionServices } from 'app/services/SessionServices';
import { AppError } from 'app/error/AppError';

class SessionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('VAlidations Failed');
    }

    const sessionService = new SessionServices();

    const session = sessionService.execute({
      email,
      password,
    });

    return response.json(session);
  }
}

export { SessionController };
