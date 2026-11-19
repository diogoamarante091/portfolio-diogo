const test = require('node:test')
const assert = require('node:assert/strict')
const request = require('supertest')

const app = require('../src/app')

test('GET /health responde que a API está funcionando', async () => {
  const resposta = await request(app).get('/health')

  assert.equal(resposta.status, 200)
  assert.deepEqual(resposta.body, {
    status: 'ok',
    mensagem: 'API do portfólio funcionando',
  })
})