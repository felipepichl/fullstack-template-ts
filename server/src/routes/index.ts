import { Router } from 'express';

import { UsersController } from '@controller/UsersControllers';

const router = Router();

const usersController = new UsersController();

router.post('/users', usersController.store);

export default router;
