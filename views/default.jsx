const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/default.css" />
               
            </head>
            <body>
               
                <div className='main_div'>
                    <div className='nav_bar'>

                        <img className='car_mart_logo' src="/car_mart.png" alt="" />
                        <div className='list_div'>
                            <li ><a href='/'>Home</a></li>
                            <li><a href='inventory'>inventory</a></li>
                            <li >Contact us</li>
                            <li>Appoitment</li>
                        </div>
                        

                    </div>
                </div>
                
                {html.children}
                
            </body>
        </html>
    )
  }
  

module.exports = Def
