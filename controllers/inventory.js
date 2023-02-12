const router = require('express').Router()

router.get('/', (req, res)=>{

    let cars = [{

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

        pictures:[
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/LPP557/19fc0ef21bf048908bec62865d4b3718_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/LPP557/7f4cf04874aa4de5b6c5c9d4b30e1803_ful.jpg"

    
         ]
    },
    {

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
        pictures:[
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/LPP557/7f4cf04874aa4de5b6c5c9d4b30e1803_ful.jpg",
            "https://cs.copart.com/v1/AUTH_svc.pdoc00001/LPP557/19fc0ef21bf048908bec62865d4b3718_ful.jpg"

    
         ]
    }




    ]

    res.render("inventory/inventory", {cars})

})


module.exports = router
