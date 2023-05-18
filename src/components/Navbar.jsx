import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="newspaper-main-menu" id="stickyMenu">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">

                    <nav className="classy-navbar justify-content-between" id="newspaperNav">

                        <div className="logo">
                            <a href="index.php"><img src="img/core-img/logo.png" alt="" /></a>
                        </div>

                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <div className="classy-menu">

                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>

                            <div className="classynav">
                                <ul>
                                    <li className={activeLink === '/' ? 'active' : ''}>
                                        <Link to='/' onClick={() => handleLinkClick('/')}>Home</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar