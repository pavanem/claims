import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark mainNavBar">
            <Link to="/home">
                <a className="navbar-brand" href="#">Claims Management</a>
            </Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/home">
                            <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                        </Link>
                    </li>

                    <li class="nav-item active">
                        <Link to="/submitclaim">
                            <a class="nav-link" href="#">Submit Claim <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/claimstatus">
                            <a class="nav-link" href="#">Claim Status <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/viewbill">
                            <a class="nav-link" href="#">View Bills<span class="sr-only">(current)</span></a>
                        </Link>
                    </li>

                    <li class="nav-item active">
                        <Link to="/">
                            <a class="nav-link" href="#">Log Out<span class="sr-only">(current)</span></a>
                        </Link>
                    </li>

                </ul>

            </div>
        </nav>

    )
}
