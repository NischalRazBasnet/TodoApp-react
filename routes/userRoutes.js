import express from 'express';
import { login, register } from '../controllers/userController.js';
import { notAllowed } from '../utils/shareFunc.js';

const router = express.Router();

router.route('/login').post(login).all(notAllowed);
router.route('/register').post(register).all(notAllowed);

export default router;
