const React = require('react')
import Def from '../default'


function inventory (data) {

    let inventoryFormatted = data.cars.map((car)=>{

      return(
        <div className='main_car_info_div'>
          
             
          <div className='img_div'>
            <img className='img' src={car.pictures[1]} alt="" />

          </div>

          <div className='info_div'>


            <div className='year_make_model'>
              <h1>{car.year}  {car.make} {car.model}</h1>                     
            </div>

            <div className='other_info_div'>

                <div className='door_div'>
                  <img src="/car.png" alt="" />
                  <h3>Door</h3>
                  <h3>{car.doors}</h3>
                </div>

                <div className='door_div'>
                  <img src="/transmission.png" alt="" />
                  <h3>Transmission</h3>
                  <h3>{car.transmission}</h3>
                </div>

                <div className='door_div'>
                  <img src="/drivetrain.png" alt="" />
                  <h3>Drivetrain</h3>
                  <h3>{car.drivetrain}</h3>
                </div>

                <div className='door_div'>
                  <img src="/fuel.png" alt="" />
                  <h3>Fuel Type</h3>
                  <h3>{car.fuel_type}</h3>
                </div>

                <div className='door_div'>
                  <img src="/price.png" alt="" />
                  <h3>Price</h3>
                  <h3>${car.price}</h3>
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
                <title>Title</title>
                <link rel="stylesheet" href="/css/inventory.css" />
               
            </head>
             

                  {inventoryFormatted}
              
          </main>
      </Def>
    )
  }
  

module.exports = inventory