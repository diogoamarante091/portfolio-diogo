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
    const tecnologias = await Tecnologia.findAll({
      order: [['id', 'ASC']],
    })

    resposta.json(tecnologias)
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