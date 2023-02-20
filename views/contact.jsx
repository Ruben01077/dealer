import React from 'react'
import Def from './default'

function contact() {
    return (
        <Def>
            <html lang="en">
                <head>
                    <meta charset="UTF-8"/>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
                                    <title>My Demo Form</title>
                                    <link rel="stylesheet" href="/css/contact.css" />
                                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&amp;display=swap"/>

                                        </head>
                                        <body>
                                            <div class="container">
                                                <div class="form-wrapper">
                                                    <div class="form-introduction">
                                                        <img id="fc-sumbul" src="https://carrier.formcarry.com/demo-assets/sumbul-wave.png" alt="Yo 👋" width="120"/>
                                                            
                                                            
                                                            <p>Submit the form down below, you'll see the message in your dashboard.</p>
                                                    </div>

                                                    <section class="formcarry-container">
                                                        <form action="https://formcarry.com/s/z3LvrRnKA2" method="POST" target="_blank" enctype="multipart/form-data">

                                                            <div class="formcarry-block">
                                                                <label htmlFor="fc-generated-1-name">Full Name</label>
                                                                <input type="text" name="name" id="fc-generated-1-name" placeholder="Your first and last name" />
                                                            </div>

                                                            <div class="formcarry-block">
                                                                <label htmlFor="fc-generated-1-email">Your Email Address</label>
                                                                <input type="email" name="email" id="fc-generated-1-email" placeholder="john@doe.com" />
                                                            </div>

                                                            <div class="formcarry-block">
                                                                <label htmlFor="fc-generated-1-message">Your message</label>
                                                                <textarea name="message"  id="fc-generated-1-message" placeholder="Enter your message..."></textarea>
                                                            </div>

                                                            <div class="formcarry-block">
                                                                <button type="submit">Send</button>
                                                            </div>

                                                        
                                                        </form>
                                                    </section>


                                                </div>
                                            </div>
                                        </body>
                                    </html>


                                </Def>
                                )
}
                                module.exports = contact

// import React from 'react'
// import Def from './default'

// function contact() {
//     return (
//         <Def>


//             <html lang="en">
//                 <head>
//                     <meta charset="UTF-8" />
//                     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                     <title>Document</title>
//                 </head>
//                 <body>
//                     <h1>Hello</h1>
//                     <form action="https://formsubmit.co/melikyan740@gmail.com" method="POST">
//                         <input type="hidden" name="_subject" value="New Contact submission!"/>
//                         <input type="text" name="name" required />
//                         <input type="text" last_name="last_name" required />
//                         <input type="email" name="email" placeholder="Email Address"/>
//                         <input type="input" name="_autoresponse" placeholder="your custom message"></input>
//                         <input type="hidden" name="_next" value="http://localhost:3000/"></input>
//                         <button type="submit">Send</button>
//                     </form>
//                 </body>
//             </html>

//                 </Def>
//                 )
// }

//                 export default contact