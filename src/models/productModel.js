import db from '../config/database.js';

// Função que retorna todos os produtos
export async function getAllProducts() {
  const [rows] = await db.query('SELECT * FROM products');
  return rows;
}

// Função para buscar um produto por nome (usada para evitar duplicação)
export async function getProductByName(name) {
  const [rows] = await db.query('SELECT * FROM products WHERE name = ?', [name]);
  return rows[0];
}

// Função para inserir um novo produto
export async function createProduct({ name, price, stock }) {
  const [result] = await db.query(
    'INSERT INTO products (name, price, stock) VALUES (?, ?, ?)',
    [name, price, stock]
  );
  return { id: result.insertId, name, price, stock };
}

// Função para atualizar um produto existente
export async function updateProduct(id, { name, price, stock }) {
  await db.query(
    'UPDATE products SET name = ?, price = ?, stock = ? WHERE id = ?',
    [name, price, stock, id]
  );
}

// Função para deletar produto
export async function deleteProduct(id) {
  await db.query('DELETE FROM products WHERE id = ?', [id]);
}
