import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navheader">
          <Link to="/home">
          <a className ="navbar-brand mx-auto" href="#"> Welcome to Claims Management System</a>
          </Link>

        </nav>

    )
}
