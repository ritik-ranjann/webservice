import React from 'react'

function Header() {
  return (
    <div>
     {/* <!-- Move to up button -- > */}
    <div className="scroll-button">
      <a href="#home"><i className="fas fa-arrow-up"></i></a>
    </div>
    {/* <!-- navgaition menu --> */}
    <nav>
      <div className="navbar">
        <div className="logo"><a href="#">Web Services</a></div>
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <div className="cancel-btn">
            <i className="fas fa-times"></i>
          </div>
        </ul>
        <div className="media-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i classNames="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="menu-btn">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
    </div>
  )
}

export default Header