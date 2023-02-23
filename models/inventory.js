const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({

    make: {type:String},
    model: {type:String},
    year: {type:Number},
    mileage: {type:String},
    vin: {type:String},
    price: {type:String},
    transmission: {type:String},
    drivetrain: {type:String},
    fuel_type: {type:String},
    doors: {type:Number},
    color:{type:String},
    interior_color:{type:String},
    engine:{type:String},
    equipment:{type:String},
    pictures:{
        one: {type:String},
        two: {type:String},
        three: {type:String},
        four: {type:String},
        five: {type:String},
        six: {type:String},
        seven: {type:String},
        eight: {type:String},
        nine: {type:String},
        ten: {type:String},
        eleven: {type:String},
        twelve: {type:String},
        thirteen: {type:String},
        fourteen: {type:String},
        fifteen: {type:String},
        sixteen: {type:String},
        seventeen: {type:String},
        eighteen: {type:String},
        nineteen: {type:String},
        twenty: {type:String}
     

      }
    

    
})

module.exports = mongoose.model("Inventory", inventorySchema)

