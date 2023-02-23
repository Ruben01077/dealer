const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
               
                <link rel="stylesheet" href="/css/default.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet"/>

                        </head>
                        <body>

                            <div className='main_div'>
                                <div className='nav_bar'>

                                    <a href='/'><img className='car_mart_logo' src="/car_mart.png" alt="" /></a>
                                    <nav class="menu">
                                        <ol>
                                            <li class="menu-item"><a href='/'>Home</a></li>
                                            <li class="menu-item"><a href='inventory'>inventory</a></li>
                                            <li class="menu-item"><a href='/contact'>Contact us</a></li>
                                            {/* <li class="menu-item">  <a href=''>Appoitment</a></li> */}
                                            <li class="menu-item"> <a href="/login">Login</a></li>
                                            <li class="menu-item"><a href="/register">Sign Up</a></li>

                                        </ol>
                                    </nav>



                          


                                </div>
                            </div>

                            {html.children}

                        </body>
                    </html>
                    )
}


                    module.exports = Def
