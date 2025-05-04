import {
  listProducts,
  addProduct,
  editProduct,
  removeProduct,
} from '../services/productService.js';

// Lista todos os produtos
export async function getAll(req, res, next) {
  try {
    const products = await listProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
}

// Cria um novo produto
export async function create(req, res, next) {
  try {
    const product = await addProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
}

// Atualiza um produto existente
export async function update(req, res, next) {
  try {
    const { id } = req.params;
    await editProduct(id, req.body);
    res.status(204).end(); // sem conteúdo
  } catch (err) {
    next(err);
  }
}

// Exclui um produto
export async function remove(req, res, next) {
  try {
    const { id } = req.params;
    await removeProduct(id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}
