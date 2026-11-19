const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (requisicao, resposta) => {
  resposta.status(200).json({
    status: 'ok',
    mensagem: 'API do portfólio funcionando',
  })
})

module.exports = app