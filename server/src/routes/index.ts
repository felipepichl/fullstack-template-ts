import { Router } from 'express';

import { createUserRouter } from '../app/routes/user.routes';

const router = Router();

router.use('/users', createUserRouter);

export default router;
