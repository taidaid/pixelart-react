import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <nav class="sticky">
        <ul class="main-nav">
          <li class="">
            <a href="http://www.taidaid.com/about">About</a>
          </li>
          <li class="">
            <a href="http://www.taidaid.com/portfolio">Portfolio</a>
          </li>
          <li class="push-right">
            <a href="mailto:windsor.bryan@gmail.com?subject=Developer Opportunity">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
