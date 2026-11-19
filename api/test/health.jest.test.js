const request = require('supertest')
const app = require('../src/app')

describe('Rota de saúde da API', () => {
  test('responde 200 e confirma que a API funciona', async () => {
    const resposta = await request(app).get('/health')

    expect(resposta.status).toBe(200)
    expect(resposta.body).toEqual({
      status: 'ok',
      mensagem: 'API do portfólio funcionando',
    })
  })
})