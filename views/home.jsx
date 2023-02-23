const React = require('react')
import Def from './default'

function home() {
  return (
    <Def>

      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="/css/home.css" />

          <title>Home</title>
        </head>
        <body>
          <div className='text_div'>

            {/* <h1>Let us know what exactly</h1> 
                <h1>you’re looking for.</h1> 
                <h1>We can help you get into the ride you want.</h1>
                 <a href="/inventory"><button>Find Your Next Car</button> </a>  */}

            <h1>
              <span>Let us know what exactly</span><br />
              <span>you’re looking for.</span>
              <span>We can help you get into the ride you want.</span>
              <span><a href="/inventory"><button>Find Your Next Car</button> </a></span>
            
            </h1>

          </div>
        </body>
      </html>
    </Def>
  )
}


module.exports = home

