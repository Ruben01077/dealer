const React = require('react')
import Def from '../default'


function inventory (data) {

    let inventoryFormatted = data.cars.map((car)=>{

      return(
        <div>
          <h1>{car.make}</h1>
          <h1>{car.model}</h1>
          <h1>{car.year}</h1>
          <h1>${car.price}</h1>
          <h1>{car.mileage}</h1>
          <h1>{car.transmission}</h1>
          <h1>{car.drivetrain}</h1>
          <h1>{car.fuel_type}</h1>
          <h1>{car.doors}</h1>
          <img src={car.pictures[1]} alt="" />
        </div>
      )

    })

    return (
      <Def>
          <main>
              <h1>Inventory</h1>
              {inventoryFormatted}
          </main>
      </Def>
    )
  }
  

module.exports = inventory