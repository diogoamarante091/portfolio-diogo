const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { Tecnologia, Usuario } = require('./models')
const autenticar = require('./middlewares/autenticar')

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

app.post('/usuarios', async (requisicao, resposta, proximo) => {
  try {
    const { nome, email, senha } = requisicao.body

    if (!nome || !email || !senha) {
      return resposta.status(400).json({
        erro: 'Nome, e-mail e senha são obrigatórios',
      })
    }

    const usuario = await Usuario.create({
      nome,
      email,
      senha,
    })

    resposta.status(201).json({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    })
  } catch (erro) {
    proximo(erro)
  }
})

app.post('/auth/login', async (requisicao, resposta, proximo) => {
  try {
    const { email, senha } = requisicao.body

    const usuario = await Usuario.findOne({
      where: { email },
    })

    const senhaCorreta =
      usuario && (await bcrypt.compare(senha, usuario.senha))

    if (!senhaCorreta) {
      return resposta.status(401).json({
        erro: 'E-mail ou senha inválidos',
      })
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      },
    )

    resposta.json({ token })
  } catch (erro) {
    proximo(erro)
  }
})

app.get(
  '/minhas-tecnologias',
  autenticar,
  async (requisicao, resposta, proximo) => {
    try {
      const tecnologias = await Tecnologia.findAll({
        where: { usuarioId: requisicao.usuario.id },
        order: [['id', 'ASC']],
      })

      resposta.json(tecnologias)
    } catch (erro) {
      proximo(erro)
    }
  },
)

app.use((erro, requisicao, resposta, proximo) => {
  console.error(erro)
  resposta.status(500).json({
    erro: 'Erro interno no servidor',
  })
})

module.exports = app