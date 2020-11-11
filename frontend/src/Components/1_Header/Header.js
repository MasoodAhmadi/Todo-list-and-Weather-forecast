import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Todo_Icon from "../Reusable_Component/03_Images/Todo_Icon.png";
import "./Header.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <header className="">
        <nav className="navbar navbar-expand-ls navbar-dark bg-dark col">
          <div className="logo">
            <NavLink to="/">
              <p className="btn1">DashBard</p>
              <img src={Todo_Icon} alt="TODO" className="img1" />
            </NavLink>
          </div>

          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={(e) => this.handleToggle(e)}
          />
          <div className="nav">
            <ul className={`collaped ${isExpanded ? "is-expanded" : ""}`}>
              <NavLink to="/weather_app">
                <button>WeatherApp</button>
              </NavLink>
              <NavLink to="/navigation">
                <button>Navigation</button>
              </NavLink>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
