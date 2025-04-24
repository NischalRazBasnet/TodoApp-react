import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';

const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  const { q } = req.query;
  const toNumber = Number(q);
  console.log(q);
  if (toNumber % 2 === 0) {
    console.log('number is even');
  } else {
    console.log('number is odd');
  }
  return res.status(200).json({
    message: 'Welcome to Backened',
    numbers: [11, 22, 33, 44, 55],
  });
});

app.use(productRoutes);
