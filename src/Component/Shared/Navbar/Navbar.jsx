/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-gray">
        <div className="container">
          <Link className="navbar-brand" to="/">Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/order">Orders</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/registration">Registration</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link >
              </li>
            </ul>
            <div>
              <p className='text-whit'>{user?.email && <p className='text-whit'>{user.email}</p>}</p>

              {
                user?.email ? <button className='rounded' onClick={handleSignOut}>Log out</button> : <Link to='./login'><button className='rounded'>Login</button></Link>
              }

            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;