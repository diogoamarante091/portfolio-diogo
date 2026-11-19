process.env.NODE_ENV = 'test'

const test = require('node:test')
const assert = require('node:assert/strict')
const request = require('supertest')

const { sequelize, Tecnologia } = require('../src/models')
const app = require('../src/app')

test.before(async () => {
  await sequelize.sync({ force: true })

  await Tecnologia.bulkCreate([
    { nome: 'JavaScript', categoria: 'Front-end' },
    { nome: 'Node.js', categoria: 'Back-end' },
  ])
})

test.after(async () => {
  await sequelize.close()
})

test('GET /tecnologias lista as tecnologias cadastradas', async () => {
  const resposta = await request(app).get('/tecnologias')

  assert.equal(resposta.status, 200)
  assert.equal(resposta.body.length, 2)
  assert.equal(resposta.body[0].nome, 'JavaScript')
})