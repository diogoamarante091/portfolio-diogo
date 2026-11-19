const { Sequelize } = require('sequelize')

const bancoEmTeste = process.env.NODE_ENV === 'test'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: bancoEmTeste ? ':memory:' : './data/portfolio.sqlite',
  logging: false,
})

module.exports = sequelize