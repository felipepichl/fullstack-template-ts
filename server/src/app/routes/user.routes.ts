import { Router } from 'express';

import { UsersController } from '../controllers/UsersControllers';

const createUserRouter = Router();

const usersController = new UsersController();

createUserRouter.post('', usersController.store);

export { createUserRouter };
