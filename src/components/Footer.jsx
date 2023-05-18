import logo from '../assets/img/core-img/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer-area">
            <div className="main-footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="footer-widget-area mt-80">
                                <div className="footer-logo">
                                    <Link to="/"><img src={logo} alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-2">
                            <div className="footer-widget-area mt-80">
                                <h4 className="widget-title">Articles</h4>
                            </div>
                        </div>

                        <div className="col-12 col-sm-4 col-lg-2">
                            <div className="footer-widget-area mt-80">
                                <h4 className="widget-title">Preferences</h4>
                            </div>
                        </div>

                        <div className="col-12 col-sm-4 col-lg-2">
                            <div className="footer-widget-area mt-80">
                                <h4 className="widget-title">FAQ</h4>
                            </div>
                        </div>

                        <div className="col-12 col-sm-4 col-lg-2">
                            <div className="footer-widget-area mt-80">
                                <h4 className="widget-title">+More</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-footer-area">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by Colorlib</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
