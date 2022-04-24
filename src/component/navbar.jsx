import React from 'react'
const navbar = ({ navigation }) => {
  return (
    <nav className="nav-bar">
      <li onClick={() => navigation("home")}>Home</li>
      <li onClick={() => navigation("about")}>About</li>
      <li onClick={() => navigation("contact")}>Contact</li>
    </nav>
  );
};

export default navbar
