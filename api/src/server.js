require('dotenv').config()

const app = require('./app')
const { sequelize } = require('./models')

const porta = process.env.PORT || 3000

sequelize
  .sync()
  .then(() => {
    app.listen(porta, () => {
      console.log(`API disponível em http://localhost:${porta}`)
    })
  })
  .catch((erro) => {
    console.error('Não foi possível iniciar o banco de dados:', erro)
  })