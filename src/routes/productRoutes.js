import { Router } from 'express';
import {
  getAll,
  create,
  update,
  remove,
} from '../controllers/productController.js';

const router = Router();

// Roteamento RESTful
router.get('/', getAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
