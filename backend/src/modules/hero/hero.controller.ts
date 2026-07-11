import { createCrudController } from '../../utils/createCrudController.js';
import { heroService } from './hero.service.js';

export const heroController = createCrudController(heroService, 'Hero');
