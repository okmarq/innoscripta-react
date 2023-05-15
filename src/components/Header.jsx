import React, { useState } from 'react'
import ApiService from '../services/ApiService';
import { Navbar } from './Navbar'
import logo from '../assets/img/core-img/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
    const [search, setSearch] = useState({
        keyword: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const response = ApiService.search(search);

        // Handle successful preferences update
        response.then(console.log(response.data))
            // Handle preferences update error
            .catch(error => console.log(error.response.data))
    };


    return (
        <header className="header-area">

            <div className="top-header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="top-header-content d-flex align-items-center justify-content-between">

                                <div className="logo">
                                    <Link to='/'>
                                        <img src={logo} alt="" />
                                    </Link>
                                </div>

                                <div className="login-search-area d-flex align-items-center">

                                    <div className="login d-flex">
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </div>

                                    <div className="search-form">
                                        <form onSubmit={handleSubmit}>
                                            <input type="search" value={search.keyword} onChange={(e) =>
                                                setSearch({ ...search, keyword: e.target.value })
                                            } name="search" className="form-control" placeholder="Search" />
                                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    )
}
