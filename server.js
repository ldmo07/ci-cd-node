const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'Ana Gomez', email: 'ana@example.com' },
  { id: 2, name: 'Luis Perez', email: 'luis@example.com' },
  { id: 3, name: 'Maria Rojas', email: 'maria@example.com' },
];

app.get('/', (_req, res) => res.send('node-example v2'));
app.get('/users', (_req, res) => res.json(users));

if (require.main === module) {
  app.listen(3000, '0.0.0.0', () => console.log('listening on 3000'));
}

module.exports = app;
