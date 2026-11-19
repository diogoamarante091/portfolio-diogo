process.env.NODE_ENV = 'test'
process.env.JWT_SECRET = 'segredo-apenas-para-testes'

const test = require('node:test')
const assert = require('node:assert/strict')
const request = require('supertest')

const { sequelize, Usuario, Tecnologia } = require('../src/models')
const app = require('../src/app')

let usuario

test.beforeEach(async () => {
  await sequelize.sync({ force: true })

  usuario = await Usuario.create({
    nome: 'Diogo Amarante',
    email: 'diogo@email.com',
    senha: 'minha-senha-segura',
  })

  await Tecnologia.create({
    nome: 'Node.js',
    categoria: 'Back-end',
    usuarioId: usuario.id,
  })
})

test.after(async () => {
  await sequelize.close()
})

test('POST /auth/login devolve um token JWT para credenciais válidas', async () => {
  const resposta = await request(app)
    .post('/auth/login')
    .send({
      email: 'diogo@email.com',
      senha: 'minha-senha-segura',
    })

  assert.equal(resposta.status, 200)
  assert.equal(typeof resposta.body.token, 'string')
})

test('GET /minhas-tecnologias bloqueia acesso sem token', async () => {
  const resposta = await request(app).get('/minhas-tecnologias')

  assert.equal(resposta.status, 401)
})

test('GET /minhas-tecnologias devolve apenas dados do usuário autenticado', async () => {
  const login = await request(app)
    .post('/auth/login')
    .send({
      email: 'diogo@email.com',
      senha: 'minha-senha-segura',
    })

  const resposta = await request(app)
    .get('/minhas-tecnologias')
    .set('Authorization', `Bearer ${login.body.token}`)

  assert.equal(resposta.status, 200)
  assert.equal(resposta.body.length, 1)
  assert.equal(resposta.body[0].nome, 'Node.js')
})