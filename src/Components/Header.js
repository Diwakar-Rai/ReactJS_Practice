import React from "react";
import aitLogo from "../images/AIT-white.jpg";
const Header = () => {
  return (
    <div>
      <div className="row text-right mb-0 bg-secondary align-items-center bg-opacity-10">
        <div className="col-sm-12 col-lg-3 my-1 pt-2">
          <img src={aitLogo} alt="" />
        </div>
        <div className="col-sm-12 col-lg-3 my-1 p-2">
          <h5>Our Office</h5>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque qui
            animi eos accusantium harum saepe aut?
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 my-1 p-2">
          <h5>Email Us</h5>
          <div>task@email.com</div>
        </div>
        <div className="col-sm-12 col-lg-3 my-1 p-2">
          <h5>Call US</h5>
          <div>India +91 222-343-234</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
