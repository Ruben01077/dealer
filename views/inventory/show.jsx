const React = require('react')
import Def from '../default'


function show(data) {



    return (

        <Def>


            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta crossOrigin="X-UA-Compatible" content="IE=edge" />

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
                    <link rel="stylesheet" href="/css/show.css" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Quattrocento:wght@700&display=swap" rel="stylesheet" />
                    <title>Document</title>
                </head>
                <body>




                    <div className='img_info_div'>
                        <div className='images_div'>
                            <div >
                                <img className='img' src={data.inventory.pictures.one} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.two} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.three} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.four} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.five} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.six} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.seven} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.eight} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.nine} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.ten} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.eleven} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.twelve} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.thirteen} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.fourteen} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.fifteen} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.sixteen} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.seventeen} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.eighteen} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.nineteen} />

                            </div>
                            <div class="item">
                                <img className='img' src={data.inventory.pictures.twenthy} />

                            </div>
                        </div>


                        <div className='info_div'>
                            <div className='title'>
                                <div>
                                    <img className='wrench' src="/wrench.png" alt="" />
                                </div>
                                <div>
                                    <h1>Vehicle Specifications</h1>
                                </div>
                            </div>
                            <div className='other_info_div'>

                                <div className='icons'>
                                    <img src="/fuel.png" alt="" />
                                    <h3>Fuel Type</h3>
                                    <h3>{data.inventory.fuel_type}</h3>
                                </div>



                                <div className='icons'>
                                    <img src="/price.png" alt="" />
                                    <h3>Price</h3>
                                    <h3>${data.inventory.price}</h3>
                                </div>



                                <div className='icons'>
                                    <img src="/drivetrain.png" alt="" />
                                    <h3>Drivetrain</h3>
                                    <h3>{data.inventory.drivetrain}</h3>
                                </div>

                                <div className='icons'>
                                    <img src="/car.png" alt="" />
                                    <h3>Door</h3>
                                    <h3>{data.inventory.doors}</h3>
                                </div>

                                <div className='icons'>
                                    <img src="/transmission.png" alt="" />
                                    <h3>Transmission</h3>
                                    <h3>{data.inventory.transmission}</h3>
                                </div>
                                <div className='icons'>
                                    <img src="/odo.png" alt="" />
                                    <h3>Mileage</h3>
                                    <h3>{data.inventory.mileage}</h3>
                                </div>

                                <div className='icons'>
                                    <img src="/color.png" alt="" />
                                    <h3>Exterior Color</h3>
                                    <h3>{data.inventory.color}</h3>
                                </div>
                                <div className='icons'>
                                    <img src="/interior.png" alt="" />
                                    <h3>Interior Color</h3>
                                    <h3>{data.inventory.color}</h3>
                                </div>
                                <div className='icons'>
                                    <img src="/car-engine.png" alt="" />
                                    <h3>Engine</h3>
                                    <h3>{data.inventory.engine}</h3>
                                </div>
                                <div className='icons'>
                                    <img src="/vin.png" alt="" />
                                    <h3>VIN</h3>
                                    <h3>{data.inventory.vin}</h3>
                                </div>


                            </div>



                        </div>


                    </div>



                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
                </body>
            </html>

        </Def>

    )


}

module.exports = show