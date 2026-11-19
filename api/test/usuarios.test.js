process.env.NODE_ENV = 'test'

const test = require('node:test')
const assert = require('node:assert/strict')
const request = require('supertest')
const bcrypt = require('bcryptjs')

const { sequelize, Usuario } = require('../src/models')
const app = require('../src/app')

test.beforeEach(async () => {
  await sequelize.sync({ force: true })
})

test.after(async () => {
  await sequelize.close()
})

test('POST /usuarios cadastra usuário com senha protegida', async () => {
  const resposta = await request(app)
    .post('/usuarios')
    .send({
      nome: 'Diogo Amarante',
      email: 'diogo@email.com',
      senha: 'minha-senha-segura',
    })

  assert.equal(resposta.status, 201)
  assert.equal(resposta.body.nome, 'Diogo Amarante')
  assert.equal(resposta.body.email, 'diogo@email.com')
  assert.equal('senha' in resposta.body, false)

  const usuario = await Usuario.findOne({
    where: { email: 'diogo@email.com' },
  })

  assert.ok(usuario)
  assert.equal(
    await bcrypt.compare('minha-senha-segura', usuario.senha),
    true,
  )
})