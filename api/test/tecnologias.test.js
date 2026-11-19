process.env.NODE_ENV = 'test'

const test = require('node:test')
const assert = require('node:assert/strict')
const request = require('supertest')

const { sequelize, Tecnologia } = require('../src/models')
const app = require('../src/app')

test.beforeEach(async () => {
  await sequelize.sync({ force: true })

  await Tecnologia.bulkCreate([
    { nome: 'JavaScript', categoria: 'Front-end' },
    { nome: 'Node.js', categoria: 'Back-end' },
  ])
})
test('POST /tecnologias cadastra uma nova tecnologia', async () => {
  const resposta = await request(app)
    .post('/tecnologias')
    .send({
      nome: 'React',
      categoria: 'Front-end',
    })

  assert.equal(resposta.status, 201)
  assert.equal(resposta.body.nome, 'React')
  assert.equal(resposta.body.categoria, 'Front-end')
})

test('GET /tecnologias filtra por categoria', async () => {
  const resposta = await request(app).get(
    '/tecnologias?categoria=Back-end',
  )

  assert.equal(resposta.status, 200)
  assert.equal(resposta.body.length, 1)
  assert.equal(resposta.body[0].nome, 'Node.js')
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