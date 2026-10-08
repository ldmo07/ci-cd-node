const { test, before, after } = require('node:test');
const assert = require('node:assert');
const { once } = require('node:events');
const app = require('../server');

let server;
let base;

before(async () => {
  server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  base = `http://127.0.0.1:${server.address().port}`;
});

after(() => server.close());

test('GET / responde con el nombre de la app', async () => {
  const res = await fetch(`${base}/`);
  assert.strictEqual(res.status, 200);
  assert.match(await res.text(), /node-example/);
});

test('GET /users devuelve la lista de usuarios', async () => {
  const res = await fetch(`${base}/users`);
  assert.strictEqual(res.status, 200);
  const users = await res.json();
  assert.strictEqual(users.length, 3);
  assert.ok(users.every((u) => u.id && u.name && u.email));
});

test('GET /health devuelve status ok', async () => {
  const res = await fetch(`${base}/health`);
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), { status: 'ok' });
});
