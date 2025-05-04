// Middleware para tratamento centralizado de erros
export default function errorMiddleware(err, req, res, next) {
  console.error('[ERROR]', err.message);
  res.status(400).json({ error: err.message || 'Erro inesperado.' });
}
