import express from 'express';
import {
  addProducts,
  deleteProducts,
  getProducts,
  updateProducts,
} from '../controllers/productController.js';
import { notAllowed } from '../utils/notAllowed.js';

const router = express.Router();

router.route('/products').get(getProducts).post(addProducts).all(notAllowed);

router
  .route('/products/:id')
  .get(getProducts)
  .post(addProducts)
  .patch(updateProducts)
  .delete(deleteProducts);

export default router;
