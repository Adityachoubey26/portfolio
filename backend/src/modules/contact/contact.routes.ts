import { Router } from 'express';
import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { contactInfoController, contactSubmissionController } from './contact.controller.js';
import {
  contactInfoIdSchema,
  contactSubmissionIdSchema,
  createContactInfoSchema,
  createContactSubmissionSchema,
  updateContactInfoSchema,
  updateContactSubmissionSchema,
} from './contact.validator.js';

const router = Router();

router.use(
  '/info',
  mountCrudRoutes(contactInfoController, {
    create: createContactInfoSchema,
    update: updateContactInfoSchema,
    id: contactInfoIdSchema,
  })
);

router.use(
  '/submissions',
  mountCrudRoutes(contactSubmissionController, {
    create: createContactSubmissionSchema,
    update: updateContactSubmissionSchema,
    id: contactSubmissionIdSchema,
  })
);

export default router;
