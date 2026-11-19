const sequelize = require('../database/connection')
const Tecnologia = require('./Tecnologia')
const Usuario = require('./Usuario')

Usuario.hasMany(Tecnologia, {
  foreignKey: 'usuarioId',
  as: 'tecnologias',
})

Tecnologia.belongsTo(Usuario, {
  foreignKey: 'usuarioId',
  as: 'usuario',
})

module.exports = {
  sequelize,
  Tecnologia,
  Usuario,
}