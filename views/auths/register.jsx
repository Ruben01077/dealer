import React from 'react'
import Def from '../default'

function register() {
  return (

    <Def>
        
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/css/register.css" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"/>
            <title>Registration</title>
        </head>
        <body>

            
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0" >
          <h1 className="my-5 display-5 fw-bold ls-tight" >
            Welcome to <br />
            <span >Car Mart</span>
          </h1>
         
        </div>
  
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
  
          <div className="card bg-glass">
            <div className="card-body px-4 py-5 px-md-5">
              <form action="/register" method="POST">
               
                <div className="row">
                  
                  
                  <h1 className="mb-3 h3">Register</h1>
                  <div className="col-md-12 mb-4">
                    <div className="form-outline">
                      <input type="text" name="name" id="form3Example2" className="form-control" />
                      <label className="form-label" htmlFor="form3Example2">Full Name</label>
                    </div>
                  </div>
                </div>
  
               
                <div className="form-outline mb-4">
                  <input type="email" name="email" id="form3Example3" className="form-control" />
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>
  
                
                <div className="form-outline mb-4">
                  <input type="password" name="password" id="form3Example4" className="form-control" />
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>

              
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
  
             
                <div className="text-center">
                  <p>Already have an account? <a href="/login">Login</a></p>
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

        </body>
        </html>
    </Def>
    
  )
}

export default register