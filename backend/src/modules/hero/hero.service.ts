import { createCrudService } from '../../utils/createCrudService.js';
import { HeroModel } from './hero.model.js';

export const heroService = createCrudService(HeroModel, ['name', 'headline', 'badge']);
