const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({

    make: {type:String},
    model: {type:String},
    year: {type:Number},
    mileage: {type:Number},
    vin: {type:String},
    price: {type:Number},
    transmission: {type:String},
    drivetrain: {type:String},
    fuel_type: {type:String},
    doors: {type:Number},
    pictures:{type:String, default:'no_img.png'}
    

    
})

module.exports = mongoose.model("Inventory", placeSchema)

