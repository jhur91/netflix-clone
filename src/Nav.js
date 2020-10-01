import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netlfix Logo"
      />
      <img
        className="nav__avatar"
        src="https://i2.sndcdn.com/avatars-000523322028-uw9xhn-t500x500.jpg"
        alt="Netlfix Logo"
      />
    </div>
  );
}
export default Nav;
