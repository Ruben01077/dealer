const React = require('react')
import Def from '../default'


function inventory (data) {

    let inventoryFormatted = data.inventory.map((car)=>{

      return(
        <div className='main'>
          <div className='main_car_info_div'>


            <div className='img_div'>
              <a href={`/inventory/${car.id}`}>
                <img className='img' src={car.pictures} alt="" />
              </a>

            </div>

            <div className='info_div'>


              <div className='year_make_model'>
                <h1>{car.year}  {car.make} {car.model}</h1>
              </div>

              <div className='other_info_div'>

              <div className='icons'>
                  <img src="/fuel.png" alt="" />
                  <h3>Fuel Type</h3>
                  <h3>{car.fuel_type}</h3>
                </div>

               

                <div className='icons'>
                  <img src="/price.png" alt="" />
                  <h3>Price</h3>
                  <h3>${car.price}</h3>
                </div>

              

                <div className='icons'>
                  <img src="/drivetrain.png" alt="" />
                  <h3>Drivetrain</h3>
                  <h3>{car.drivetrain}</h3>
                </div>

                <div className='icons'>
                  <img src="/car.png" alt="" />
                  <h3>Door</h3>
                  <h3>{car.doors}</h3>
                </div>

                <div className='icons'>
                  <img src="/transmission.png" alt="" />
                  <h3>Transmission</h3>
                  <h3>{car.transmission}</h3>
                </div>

          
              </div>

            </div>

          </div>

        </div>
      )

    })

    return (
      <Def>
          <main>
          <head>
                <title>Inventory</title>
                <link rel="stylesheet" href="/css/inventory.css" />
               
            </head>
             
                  <h1 className='inventory'>Inventory</h1>
                  {inventoryFormatted}
              
          </main>
      </Def>
    )
  }
  

module.exports = inventory