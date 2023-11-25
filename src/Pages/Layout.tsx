import React from "react";
import "../Components/styles/Layout.css";
import { Link, Outlet } from "react-router-dom";
/* import IconContact from "../assets/contact.svg";
<img className="ico-color" src={IconContact}  /> */

export const Layout = () => {
  return (
    <div id="nav">
      <div className="d-flex bg-secondary p-1">
        <Link className="p-3 bg-primary con-ico" to="/Drymnz.github.io/">
          <i className="bi bi-house-door-fill "></i>
        </Link>
        <Link className="p-3 bg-primary con-ico" to="/Drymnz.github.io/contact">
          <i className="bi bi-person-lines-fill "></i>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

{
  /*
   */
}
