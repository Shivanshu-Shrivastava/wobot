import React from 'react'
import img from './../Img/img.png'
const Navbar = () => {
    return (
        <nav className="navbar position-absolute top-0 w-100 ">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={img} alt="woobot" width="75" height="24" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar