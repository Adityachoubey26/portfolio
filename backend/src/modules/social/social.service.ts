import { createCrudService } from '../../utils/createCrudService.js';
import { SocialModel } from './social.model.js';

export const socialService = createCrudService(SocialModel, ['platform', 'label']);
