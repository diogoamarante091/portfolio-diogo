const { DataTypes } = require('sequelize')
const sequelize = require('../database/connection')

const Tecnologia = sequelize.define(
  'Tecnologia',
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'tecnologias',
  },
)

module.exports = Tecnologia