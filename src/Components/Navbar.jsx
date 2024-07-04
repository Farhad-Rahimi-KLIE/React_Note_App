import React from "react";
import './style.css'
const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-slate-200 navbar-white h-[4rem] shadow-lg">
        <a className="navbar-brand" href="/">
            <span className="ggg">Notes Apps</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
