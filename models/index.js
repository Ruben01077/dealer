const mongoose = require('mongoose')
const dotenv = require('dotenv').config()


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,

})

module.exports.Inventory = require('./inventory')
