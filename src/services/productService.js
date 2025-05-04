import {
  getAllProducts,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../models/productModel.js';

import validateProduct from '../utils/validateProduct.js';

// Serviço para listar todos os produtos
export async function listProducts() {
  return await getAllProducts();
}

// Serviço para criar produto, com validação
export async function addProduct(product) {
  validateProduct(product); // valida campos

  const existing = await getProductByName(product.name);
  if (existing) {
    throw new Error('Produto com este nome já existe.');
  }

  return await createProduct(product);
}

// Serviço para atualizar produto, com validação
export async function editProduct(id, product) {
  validateProduct(product);
  await updateProduct(id, product);
}

// Serviço para deletar produto
export async function removeProduct(id) {
  await deleteProduct(id);
}
