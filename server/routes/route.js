import express from 'express';
import { getCategories } from '../controllers/controller.js';

const router = express.Router();

router.route('/api/categories').get(getCategories);

export default router;
