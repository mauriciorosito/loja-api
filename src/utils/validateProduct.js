export default function validateProduct({ name, price, stock }) {
  if (!name || name.trim() === '') {
    throw new Error('Nome do produto é obrigatório.');
  }

  if (typeof price !== 'number' || price <= 0) {
    throw new Error('Preço inválido.');
  }

  if (!Number.isInteger(stock) || stock < 0) {
    throw new Error('Estoque deve ser um número inteiro positivo.');
  }
}
