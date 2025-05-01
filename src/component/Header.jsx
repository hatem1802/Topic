import React, { useState } from "react";

const Header = () => {
  const [scrollnav, setScrollnav] = useState(false);

  window.onscroll = () => {
    if (window.scrollY >= 1) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          scrollnav ? "colored_nav" : ""
        }`}
      >
        <div
          style={{ width: "100%" }}
          className="d-flex justify-content-around align-items-center"
        >
          <a className="navbar-brand m-0 text-center" href="#">
            <img style={{ width: "2.5rem" }} src="../images/logo.png" alt="" />
            Topic
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BROWSE TOPICS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOW IT WORKS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link dropdown" href="#">
                  PAGES <i className="fa-solid fa-angle-down"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <a className="login_icon" href="">
              <i className="fa-regular fa-user fa-lg"></i>
            </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
