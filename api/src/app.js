const express = require('express')
const cors = require('cors')
const { Tecnologia } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (requisicao, resposta) => {
  resposta.status(200).json({
    status: 'ok',
    mensagem: 'API do portfólio funcionando',
  })
})

app.get('/tecnologias', async (requisicao, resposta, proximo) => {
  try {
    const filtro = {}

    if (requisicao.query.categoria) {
      filtro.categoria = requisicao.query.categoria
    }

    const tecnologias = await Tecnologia.findAll({
      where: filtro,
      order: [['id', 'ASC']],
    })

    resposta.json(tecnologias)
  } catch (erro) {
    proximo(erro)
  }
})

app.post('/tecnologias', async (requisicao, resposta, proximo) => {
  try {
    const { nome, categoria } = requisicao.body

    if (!nome || !categoria) {
      return resposta.status(400).json({
        erro: 'Nome e categoria são obrigatórios',
      })
    }

    const tecnologia = await Tecnologia.create({
      nome,
      categoria,
    })

    resposta.status(201).json(tecnologia)
  } catch (erro) {
    proximo(erro)
  }
})

app.use((erro, requisicao, resposta, proximo) => {
  console.error(erro)
  resposta.status(500).json({
    erro: 'Erro interno no servidor',
  })
})

module.exports = app