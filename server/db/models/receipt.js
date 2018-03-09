const Sequelize = require('sequelize')
const db = require('../db')

const Receipt = db.define('receipt', {
  merchant: {
    type: Sequelize.STRING,
    allowNull: false
  },
  product: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
  },

})

module.exports = Receipt
