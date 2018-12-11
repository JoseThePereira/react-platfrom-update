import React, { Component } from "react";
import logo from "../images/Logos/logo.jpg";
import flag from "../images/Logos/usa.svg";

class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img src={logo} alt="Logo" />
            </div>
            <div class="col-sm">
              <button type="button" class="btn btn-light">
                HOME
              </button>
            </div>
            <div class="col-sm">
              <button type="button" class="btn btn-light">
                JOIN ME/US
              </button>
            </div>
            <div class="col-sm">
              <button type="button" class="btn btn-light">
                CONTACT ME/US
              </button>
            </div>
            <div class="col-sm selector btn">
              <div class="row">
                <div class="col-sm ">
                  <img src={flag} alt="Logo" />
                </div>
                <div class="col-sm States">
                  <p>English</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <button type="button" class="btn btn-dark">
                <i class="material-icons">dehaze</i>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
