import express from 'express';
import {
  addProduct,
  getProduct,
  getProducts,
  getTop5,
  removeProduct,
  updateProduct,
} from '../controllers/productController.js';
import { notAllowed } from '../utils/shareFunc.js';
import { fileCheck, updateFileCheck } from '../middlewares/checkFiles.js';
import { checkId } from '../middlewares/checkId.js';
import { productValSchema, validates } from '../utils/validator.js';

const router = express.Router();

router
  .route('/')
  .get(getProducts)
  .post(fileCheck, validates.body(productValSchema), addProduct)
  .all(notAllowed);

router.route('/top-5').get(getTop5, getProducts).all(notAllowed);

router
  .route('/:id')
  .get(getProduct)
  .patch(checkId, updateFileCheck, updateProduct)
  .delete(checkId, removeProduct)
  .all(notAllowed);

export default router;
