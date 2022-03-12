import express from 'express';
import { getCategories, createCategories } from '../controllers/categories.js';
import {
  createTransaction,
  getTransactions,
  deleteTransaction,
  getLabels,
} from '../controllers/transactions.js';

const router = express.Router();

// categories

router.route('/api/categories').get(getCategories).post(createCategories);

// transactions
router
  .route('/api/transaction')
  .get(getTransactions)
  .post(createTransaction)
  .delete(deleteTransaction);
export default router;

router.route('/api/labels').get(getLabels);
