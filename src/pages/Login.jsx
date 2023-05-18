import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../services/AppContext'
import ApiService from '../services/ApiService'

function Login() {
    const auth = useContext(AppContext)

    const { user, setUser, setToken, setIsAuth } = auth

    const navigate = useNavigate()

    const [loginData, setLogin] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        if (user) {
            setIsAuth(true)
            navigate('/')
        }
    }, [user, setIsAuth, navigate])

    function handleSubmit(e) {
        e.preventDefault()

        ApiService.login(loginData)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch((error) => {
                console.error(error.response)
            })

        setLogin({
            email: '',
            password: ''
        })
    }

    return (
        <>
            <div className="popular-news-area section-padding-80-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="section-heading">
                                <h6>Login</h6>
                            </div>
                            <div className="newsletter-widget">
                                <h4>Innoscripta</h4>
                                <p>News aggregator that pulls articles from sources to displays in easy-to-read format.</p>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={loginData.email}
                                        onChange={(e) => setLogin({ ...loginData, email: e.target.value })}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={loginData.password}
                                        onChange={(e) => setLogin({ ...loginData, password: e.target.value })}
                                    />
                                    <button type="submit" className="btn w-100">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
