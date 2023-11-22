import React from "react";
import { Link, Outlet } from "react-router-dom";
import IcoHome from "../assets/home.svg"

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Drymnz.github.io/" ></Link>
          </li>
          <li>
            <Link to="/Drymnz.github.io/ComponenteDos">Otro</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
