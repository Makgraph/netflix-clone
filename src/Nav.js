import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history("/")}
          className="nav__logo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          alt=""
        />
        <img
          onClick={() => history("/profile")}
          className="nav__avatar"
          src="https://tse3.mm.bing.net/th?id=OIP.gAoBZTchuV06h2zGCGTsPgAAAA&pid=Api&P=0"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
