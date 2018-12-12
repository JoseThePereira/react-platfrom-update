import React, { Component } from "react";
import logo from "../images/Logos/logo.jpg";
import flag from "../images/Logos/usa.svg";
// import Button from "react-bootstrap/lib/Button";

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
            <div class="col-sm selector btn languageSelector">
              <div class="row">
                <div class="col-sm ">
                  <img src={flag} alt="Logo" />
                </div>
                <div class="col-sm States">
                  <p>English</p>
                </div>
              </div>
            </div>
            <div class="col-sm dropdown ">
              <button
                type="button"
                class="btn btn-dark menu dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="material-icons">dehaze</i>
                Menu
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item " href="#">
                  Home
                </a>
                <a class="dropdown-item " id="menuone" href="skincare.html">
                  Skin Care
                </a>
                <a class="dropdown-item" href="#">
                  Nutrition
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
