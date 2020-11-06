import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { ImBook } from "react-icons/im";
import { FaBars, FaTimes } from "react-icons/fa"
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => {
    setClick(false)
  }
  
const showButton = () => {
  if(window.innerWidth <= 960) {
    setButton(false)
  } else {
    setButton(true)
  }
}

window.addEventListener("resize", showButton)

    return (
        <>
          <div className="navbar">
            <div className="navbar-container container container">
                <Link to="/" className="navbar-logo">
                    <ImBook className="navbar-icon" />
                    Portfolio
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <Link to="/" className="nav-links">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/something" className="nav-links">something</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/test" className="nav-links">test</Link>
                  </li>
    <li className="nav-btn">{button ? (
      <Link to="/sign-up" className="btn-link"><Button buttonStyle="btn--outline">Sign Up</Button></Link>
    ) : (<Link to="/sign-up" className="btn-link"><Button buttonStyle="btn--outline" buttonSize="btn--mobile">Sign Up</Button></Link>)}</li>
                </ul>
            </div>
          </div>
        </>
    )
}

export default Navbar
