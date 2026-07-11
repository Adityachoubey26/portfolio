import { Router } from 'express';
import { API_PREFIX } from '../constants/index.js';
import v1Routes from './v1/index.js';

const router = Router();

router.use(API_PREFIX, v1Routes);

export default router;
