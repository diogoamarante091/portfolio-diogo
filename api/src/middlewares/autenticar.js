const jwt = require('jsonwebtoken')

function autenticar(requisicao, resposta, proximo) {
  const cabecalho = requisicao.headers.authorization

  if (!cabecalho || !cabecalho.startsWith('Bearer ')) {
    return resposta.status(401).json({
      erro: 'Token não informado',
    })
  }

  const token = cabecalho.split(' ')[1]

  try {
    requisicao.usuario = jwt.verify(token, process.env.JWT_SECRET)
    proximo()
  } catch {
    resposta.status(401).json({
      erro: 'Token inválido ou expirado',
    })
  }
}

module.exports = autenticar