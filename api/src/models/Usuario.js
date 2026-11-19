const { DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')
const sequelize = require('../database/connection')

const Usuario = sequelize.define(
  'Usuario',
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'usuarios',
    hooks: {
      beforeCreate: async (usuario) => {
        usuario.senha = await bcrypt.hash(usuario.senha, 10)
      },
    },
  },
)

module.exports = Usuario