import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <label className="logo"> LOHITH H J</label>
      <ul>
        <li>
          <a href="#">WORK</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}
