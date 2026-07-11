import { Router } from 'express';
import healthRoutes from './health.routes.js';
import { heroRoutes } from '../../modules/hero/index.js';
import { aboutRoutes } from '../../modules/about/index.js';
import { experienceRoutes } from '../../modules/experience/index.js';
import { educationRoutes } from '../../modules/education/index.js';
import { skillsRoutes } from '../../modules/skills/index.js';
import { projectRoutes } from '../../modules/projects/index.js';
import { achievementRoutes } from '../../modules/achievements/index.js';
import { certificationRoutes } from '../../modules/certifications/index.js';
import { socialRoutes } from '../../modules/social/index.js';
import { resumeRoutes } from '../../modules/resume/index.js';
import { seoRoutes } from '../../modules/seo/index.js';
import { settingsRoutes } from '../../modules/settings/index.js';
import { contactRoutes } from '../../modules/contact/index.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/hero', heroRoutes);
router.use('/about', aboutRoutes);
router.use('/experience', experienceRoutes);
router.use('/education', educationRoutes);
router.use('/skills', skillsRoutes);
router.use('/projects', projectRoutes);
router.use('/achievements', achievementRoutes);
router.use('/certifications', certificationRoutes);
router.use('/social', socialRoutes);
router.use('/resume', resumeRoutes);
router.use('/seo', seoRoutes);
router.use('/settings', settingsRoutes);
router.use('/contact', contactRoutes);

export default router;
