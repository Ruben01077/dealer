const inventory = require('../models/inventory')

const router = require('express').Router()
db = require('../models')



router.get('/', (req, res) => {
  


  db.Inventory.find()
  .then((inventory)=>{
    res.render('inventory/inventory', {inventory})
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
  })
  .catch((err =>{
    console.log('err', err)
    res.render('error404')
  }))
})



router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router




