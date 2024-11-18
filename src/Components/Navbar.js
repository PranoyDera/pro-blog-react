import React from 'react'
import PropTypes from 'prop-types';



export default function Navbar(props) {
  return (
    <div>
      <><nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
              <div className={`form-check form-switch ms-auto text-${props.textMode}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.labelText}</label>
               </div>
      </div>
    </div>
  </nav></>
 </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}