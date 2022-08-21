import React from "react";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-black bg-opacity-75 mt-5">
        <div className="row align-items-center mx-3">
          <div className="col-lg-4">
            <img src="./assets/images/AIT-white.jpg" className="img-fluid" alt="" />
            <div className="mt-3">
              <h6 className="text-warning">GET IN TOUCH</h6>
              <p className="text-white">
                #63, 1st Floor, 16th Main, 8th Cross BTM 1st Stage,
                Bangalore-560069
              </p>
              <p className="text-white">+91 8431-040-522</p>
              <p className="text-white">info@example.com</p>
            </div>
          </div>
          <div className="col-lg-3">
            <h6 className="text-warning">OUR COURSES</h6>
            <ul className="text-white">
              <li>Web Designing</li>
              <li>Ajax Designing</li>
              <li>Ajax Designing</li>
              <li>React Designing</li>
              <li>Angular Designing</li>
              <li>Vue Designing</li>
            </ul>
          </div>
          <div className="col-lg-5">
            <h5 className="text-warning">NEWSLETTER</h5>
            <div className="text-white">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis dolores nisi, eius molestias esse quos quam non in
                eligendi eum, deleniti quas sequi suscipit dolore reiciendis.
                Eius distinctio animi nulla! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eligendi, odit! Nobis molestiae
                repellat molestias cupiditate, neque accusamus magnam debitis
                culpa ad vitae sequi suscipit vel quidem error cum et id.
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="input-group-text bg-warning text-white"
                    id="basic-addon2"
                  >
                    Sign UP
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-white" />
          <div className="float-start text-white fs-6">
            Copyright&#169 2022 AchieversIT All rights reserved. Designed by
            AchieversIT
          </div>
          <div className="float-end fs-6">
            <ul className="nav float-end">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/">
                  Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Terms
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Refund Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
