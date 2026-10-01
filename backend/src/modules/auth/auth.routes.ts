import { Router } from 'express';
import { validate } from '../../middleware/validate.js';
import { authenticate } from '../../middleware/authenticate.js';
import { authorize } from '../../middleware/authorize.js';
import {
  changePasswordHandler,
  loginHandler,
  logoutHandler,
  meHandler,
  refreshHandler,
} from './auth.controller.js';
import { changePasswordSchema, loginSchema } from './auth.validator.js';

const router = Router();

router.post('/login', validate(loginSchema), loginHandler);
router.post('/logout', logoutHandler);
router.post('/refresh', refreshHandler);
router.post(
  '/change-password',
  authenticate(),
  authorize('admin'),
  validate(changePasswordSchema),
  changePasswordHandler
);
router.get('/me', authenticate(), authorize('admin'), meHandler);

export default router;
