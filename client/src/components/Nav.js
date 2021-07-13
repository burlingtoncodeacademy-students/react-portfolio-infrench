// import react and react-scroll
import React from "react";
import { Link } from "react-scroll";
function Nav() {
  return (
    <nav>
      <h2 className="nav-header">Ian French</h2>
      <div className="nav-links">
        {/* using react-scroll, link to each component by targeting the id of the container of each component */}
        {/* smooth=true to scroll instead of jump*/}
        {/* duration is time it takes to scroll to the component in ms */}
        <Link to="home" smooth={false} duration={500}>Home</Link>
        <Link to="about" smooth={true} offset={-20} duration={500}>About</Link>
        <Link to="projects" smooth={true} offset={-20}  duration={500}>Projects</Link>
        <Link to="work" smooth={true} offset={-20}  duration={500}>Work History</Link>
      </div>
    </nav>

  );
}

export default Nav;
