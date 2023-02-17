const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/default.css" />
                <link href="https://fonts.googleapis.com/css2?family=Quattrocento:wght@700&display=swap" rel="stylesheet"/>
               
            </head>
            <body>
               
                <div className='main_div'>
                    <div className='nav_bar'>

                       <a href='/'><img className='car_mart_logo' src="/car_mart.png" alt="" /></a> 
                        <div className='list_div'>
                            <a href='/'>Home</a>
                            <a href='inventory'>inventory</a>
                            <a>Contact us</a>
                            <a>Appoitment</a>
                        </div>
                        

                    </div>
                </div>
                
                {html.children}
                
            </body>
        </html>
    )
  }
  

module.exports = Def
