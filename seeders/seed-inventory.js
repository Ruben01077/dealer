const db = require('../models')

db.Inventory.create ([{

    make: "Toyota",
    model: 'Prius',
    year: 2019,
    mileage: 47000,
    vin: "SDFJSJFSDF154S1F5",
    price: 15000,
    transmission: "Automatic",
    drivetrain: "FWD",
    fuel_type: "Hybrid",
    doors: 4,
    pictures: "https://cs.copart.com/v1/AUTH_svc.pdoc00001/LPP557/19fc0ef21bf048908bec62865d4b3718_ful.jpg"

},{

    make: "Toyota",
    model: 'Prius',
    year: 2019,
    mileage: 47000,
    vin: "SDFJSJFSDF154S1F5",
    price: 15000,
    transmission: "Automatic",
    drivetrain: "FWD",
    fuel_type: "Hybrid",
    doors: 4,
    pictures: "https://cs.copart.com/v1/AUTH_svc.pdoc00001/LPP557/7f4cf04874aa4de5b6c5c9d4b30e1803_ful.jpg"



}, {

    make: "Toyota",
    model: 'Prius',
    year: 2019,
    mileage: 47000,
    vin: "SDFJSJFSDF154S1F5",
    price: 15000,
    transmission: "Automatic",
    drivetrain: "FWD",
    fuel_type: "Hybrid",
    doors: 4,
    pictures: "https://cs.copart.com/v1/AUTH_svc.pdoc00001/LPP559/14c841c03f194fdba1bfc438200aec9e_ful.jpg"


}])
.then(()=>{
    console.log('Succes!')
    process.exit()
})
.catch(err =>{
    console.log("Failure!", err)
    process.exit()
})