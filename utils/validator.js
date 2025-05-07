import Joi from 'joi';
import { brands, categories } from '../models/Products.js';
import validate from 'express-joi-validation';

export const validates = validate.createValidator({});

export const productValSchema = Joi.object({
  title: Joi.string().min(10).required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  rating: Joi.number(),
  category: Joi.string()
    .valid(...categories)
    .required(),
  brand: Joi.string()
    .valid(...brands)
    .required(),
}).unknown(true);
