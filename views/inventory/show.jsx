const React = require('react')
import Def from '../default'

function show(data) {



    return (

        <Def>


            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                    <link rel="stylesheet" href="/css/show.css" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Quattrocento:wght@700&display=swap" rel="stylesheet" />
                    <title>Document</title>
                </head>
                <body>

                    <h1>{data.inventory.make}</h1>
                    <div>

                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="https://lh3.googleusercontent.com/RTdZdsfb-jzShy7CvRPTYOmZe0UfqKUOGuBEyuERkfWRnLmpGDYhpJ3aJDzUY07pdNNCva0a0psVKwPGC6t8feKn3dS7-vjVWC3fCLz561_6mzE9BcSBLqThyErqIxP-8VX2rwnWRZ1OpTo_79zZdwvEGPVnzlKgYVppItdcMqi7yHB1MVu53aCYK7dJghBy59B-C9dqV3TAXAu0jJkPW0VPdmApdRu_1D4s1ogMpjTBRfjTAWFrnphQlnf7nG-tj1Emy24pM52lwxN3v48cQfjWZbb3CRWJOXC8sPdZADRIaJmdsT4UEGRUQ-XIAxh45hcQG9eh1k1ZsrNAgTjICf_8-btvIs6iuOKEto4bKkCxJgBz3zXQM6BPz6VpUVljEQqitoFd_7CLKLcl73YdCUWliOYlZTSYw1jb1Ta4iELvTkkomkcZVKXJi8O4ttxkBM4-wIiLywZcHdY-lH8cq0bSF7BIyTgZ5ZcRZQg5zEwRo_pUHntsnHZ34UG4r7tSkZBER2bdDGAm-1fsrUk0s-fE3o_dF2EvliflxPRO_iEwXFhzmeo0kodVTSFs8hlVHIg3lCkRIl796b142gHT9H4HNRnJjy83eZRezCSCtw5-RN1UI9cLyrwDK2qgDemq1rE0pfHNoFXsdRHkb1dF7fKRvsOeQepCBfLc6mEKy5eLzFhV_XVy-NSuQVJp1Cbf7B6uD3njIEqZu5qnq6d7wUGiExLqp-Q-Kx98_riIFJBcdJgOBPUSoLZyFswnXgnfqSACH8-onZnDya_FkED64wBGZjJjmwaH04qwEjIDaSlCzBMV9H4H8Vj_isL-Talp0EBiNqVCDRhXAzQV5JYPgpV15o3PirV01nAyb1GgG9hL1gAAJ1BrQ-JfFSD2rJVELCxbZ8PLGBAO2fZG-fie37UlbnCho-OHYemXVGAT74wqLLlMtnhszIyXUeD21beI70ez2KEq1yaBnwgfujeWCHEQ1Ju1wzn40uz3gi0Qx3bKeCZARUYzODMlEIPWNrwNdBiBdD1VJk1N5_8-85EZAA=w1435-h957-s-no?authuser=0" alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="https://lh3.googleusercontent.com/9BJxQ69Kspumz7uZZdDOGospgZNiHYOXCi_TzPjZwP6FUBNeoLPOlpbOVe9yAUDZ20NqFj6_8iWmTQXSOq360PPBCjHGPS_BuPz5s4gjr_ni40Rfr6yoZQ358hGkq1IsCxuBeQDsCyRvEY0-MXz2DfHqhC_6KbuIAz8jlfOm_hpPwq7CGjuLKNga8noXmSNxbVjh994K-X6Jcfup_-zxFBIbugKoQQvK2YUW4_wJimUzHfO2WfGCC7NhP9UKOFMFPGUUzDNcCYasNTDT4xRMio7lb-OalZy1vxmV13q4vLP_3cHGx6I7TbvFtdMeo9Rj-q9eBtjTgYuWBbnXG9O87UQG83J1heuTsi4-XzKtdDw_u6noiC7RUL11BSByFFzS7v8VW0Gsw7UyjMwZHAbx-H7B3rfH2xlc6bYEZ4lt_WmAmqGuF4azUqSMceWkDRwoAjHKc9XI-R4YJrumkFGdXqk5YF1GhyLmsUhFSI8hoPbJ9-dP3bDcxZ4CgpBccV2EbEPx4kosF5D7hjQfIWyl3vaq0oXHFMmbg25MNCGgGDynHSiopo3tcIKMjxB_5hNC0l1CABoUJMsLP7qIigNAa6VT_L-Gzs6y-sSfkrdnAZZyqJUEtGq_IfV66wuFnCq3ZqJIu7ebIxoBjfLfXVA7yhY9vf5LE24vMK-Ry_sE8qnoygO0avBo8eUCnIfusZvv4n9zxjWZY0SpmIAKH8yC1H2thEc0x_RitGLuMOelv43NGeYGAkkeQJo2Yt879Mz5Iw6TUfQC1xPINMk5pq4mvl7AOGUupvFNfgenWYGYLDEkZXt4t77A9l5-f7fuvNvOhLM3oOaF-0yMDNvUPfW6GdoPfCn7KTlNPyFDTwSuk06O_Pzdlp1pf4X33MwEfcQsjWyq0U5lH_Ejk2Y9GEcKBHLS6wd-jhm7ow_t23b8QSk2xUdeBCtAQU4Nj3ymNm5H_V2x5qYbxk9l6wbeEeAhZoguCDe_GjwVfztddpMOy8didKMAoGDiJd-WeUjQ8j_HOjH-JhElus6iqWDrQBgXRA=w1435-h957-s-no?authuser=0" alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="https://cs.copart.com/v1/AUTH_svc.pdoc00001/LPP557/7f4cf04874aa4de5b6c5c9d4b30e1803_ful.jpg" alt="Third slide" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                </body>
            </html>

        </Def>

    )


}

module.exports = show