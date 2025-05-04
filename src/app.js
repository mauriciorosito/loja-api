import express from 'express';
import productRoutes from './routes/productRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();

app.use(express.json());

// Rotas da API
app.use('/products', productRoutes);

// Middleware de erro (sempre por último)
app.use(errorMiddleware);

export default app; 
