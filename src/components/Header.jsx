import Navbar from './Navbar'
import logo from '../assets/img/core-img/logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AppContext } from '../services/AppContext'
import ApiService from '../services/ApiService'

function Header() {
    const auth = useContext(AppContext)

    const { token, isAuth, setArticles, setToken, setIsAuth, setUser } = auth

    const navigate = useNavigate()

    const [isTrigger, setIsTriger] = useState(false)
    const [searchData, setSearch] = useState({
        keyword: '',
        date: '',
        category: '',
        source: ''
    })

    function handleSubmit(e) {
        e.preventDefault()

        ApiService.search(searchData, token)
            .then(({ data }) => {
                setArticles(data.data)
                setIsTriger(true)

                navigate('/articles')
            })
            .catch((error) => {
                console.error(error)
            })

        setSearch({
            keyword: '',
            date: '',
            category: '',
            source: ''
        })
    }

    function handleLogout() {
        ApiService.logout(token)
            .then(() => {
                setToken(null)
                setIsAuth(false)
                setUser(null)

                navigate('/login')
            })
            .catch((error) => {
                console.error(error)
            })
    }

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
                                        {isAuth ? (
                                            <a href='#' onClick={() => handleLogout()}>Logout</a>
                                        ) : (
                                            <>
                                                <Link to='/login'>Login</Link>
                                                <Link to='/register'>Register</Link>
                                            </>
                                        )}
                                    </div>

                                    <div className="search-form">
                                        <form onSubmit={handleSubmit}>
                                            <input type="search" value={searchData.keyword} onChange={(e) =>
                                                setSearch({ ...searchData, keyword: e.target.value })
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

export default Header
