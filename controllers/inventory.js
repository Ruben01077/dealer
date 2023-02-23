const inventory = require('../models/inventory')

const router = require('express').Router()
db = require('../models')



router.get('/', (req, res) => {
  


  db.Inventory.find()
  .then((inventory)=>{
    res.render('inventory/inventory', {inventory})
    console.log("To inventory")
  })
  .catch(err =>{
    console.log(err)
    res.send('error404')
  })
})






router.get('/:id', (req, res) => {
  db.Inventory.findById(req.params.id)
  .then((inventory)=>{
    res.render('inventory/show', {inventory})
    console.log(req.params.id)
  
  })
  .catch((err =>{
    console.log('err', err)
    res.render('error404')
  }))
})




module.exports = router




