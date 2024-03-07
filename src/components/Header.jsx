import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='header shadow'>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="log">
                        <img style={{height: "60px"}} src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1709769600&semt=ais" alt="" />
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="menu">
                        <div className="navbar navbar-expand-lg">
                            <ul className='navbar-nav mr-auto'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to="/">Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to="/about">About Us</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to="/blog">Blog</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header;
