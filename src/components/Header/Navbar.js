import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary ">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand text-white" >Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link to='/' className="nav-link active text-white" aria-current="page" >Home</Link></li>
                            <li className="nav-item"><Link to='/about' className="nav-link active text-white" aria-current="page" >About</Link></li>
                            <li className="nav-item"><Link to='/contact' className="nav-link active text-white" aria-current="page" >Contact</Link></li>
                            <li className="nav-item dropdown">
                                <Link to='/auth' className="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Auth</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to='auth/login' className="dropdown-item" >Login</Link></li>
                                    <li><Link to='auth/register' className="dropdown-item" >Register</Link></li>
                                    <li><Link to='auth/forget-password' className="dropdown-item" >Forget</Link></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
