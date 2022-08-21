import React from 'react'
import about from '../images/about.jpg'
const About = () => {
  return (
    <div>
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-sm-12 col-lg-4">
                    <img src={about} className="rounded img-fluid" alt="blog-1"/>
                </div>
                <div className="col-sm-12 col-lg-8">
                    <h6 className="text-warning">ABOUT US</h6>
                    <h4>Innovative Way To Learn</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit in, laudantium reiciendis
                        ipsa soluta consectetur. Quasi incidunt pariatur necessitatibus praesentium aliquid similique
                        nisi. Aut, perspiciatis consequatur voluptatibus maiores suscipit cum?</p>
                    <button type="button" className="btn btn-warning text-white">Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About