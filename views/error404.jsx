import React from 'react'
import Def from './default'

function error404() {
  return (
    <Def>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="/css/error.css" />

          <title>Error 404</title>
        </head>
        <body>

          <div>

            <div></div>
            <div className="imgDiv">
              <a href="/">

                <img className='error' src="/error.png" alt="" srcset="" />

              </a>

            </div>

          </div>

        </body>
      </html>
    </Def>

  )
}

export default error404