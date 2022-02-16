import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  // console.log("Navbar props " + props.mode);
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={props.aboutlink}>{props.aboutText}</Link>
              </li>
            </ul>
            <form className="d-flex">


              <div className={`custom-control custom-switch text-${props.mode}`}>
                <input type="checkbox" onClick={props.togglemode} className="custom-control-input" id="customSwitch1" />
                <label className="custom-control-label" htmlFor="customSwitch1">Enable dark mode</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  aboutlink: PropTypes.string,
}

// Navbar.defaultProps = {
//   title : "Set title here",
//   aboutText: "Set home here",
//   aboutlink: "Set link here",
//   }