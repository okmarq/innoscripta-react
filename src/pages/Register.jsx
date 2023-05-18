import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { AppContext } from '../services/AppContext'
import ApiService from '../services/ApiService'

function Register() {
    const auth = useContext(AppContext)

    const { user, setUser, setToken, setIsAuth } = auth

    const navigate = useNavigate()

    const [registerData, setRegister] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    useEffect(() => {
        if (user) {
            setIsAuth(true)
            navigate('/')
        }
    }, [user, setIsAuth, navigate])

    function handleSubmit(e) {
        e.preventDefault()

        if (registerData.password === registerData.password_confirmation) {
            ApiService.register(registerData)
                .then(({ data }) => {
                    setUser(data.user)
                    setToken(data.token)
                })
                .catch((error) => {
                    console.error(error.response)
                })

            setRegister({
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: ''
            })
        }
    }

    return (
        <>
            <div className="popular-news-area section-padding-80-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="section-heading">
                                <h6>Register</h6>
                            </div>
                            <div className="newsletter-widget">
                                <h4>Innoscripta</h4>
                                <p>News aggregator that pulls articles from sources to displays in easy-to-read format.</p>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        value={registerData.first_name}
                                        required
                                        onChange={(e) => setRegister({ ...registerData, first_name: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        value={registerData.last_name}
                                        required
                                        onChange={(e) => setRegister({ ...registerData, last_name: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={registerData.email}
                                        required
                                        onChange={(e) => setRegister({ ...registerData, email: e.target.value })}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={registerData.password}
                                        required
                                        onChange={(e) => setRegister({ ...registerData, password: e.target.value })}
                                    />
                                    {/* <small id='password_confirmation' className={textWhite ? 'text-white' : 'd-none'}>password doesn't match</small> */}
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={registerData.password_confirmation}
                                        required
                                        onChange={(e) => setRegister({ ...registerData, password_confirmation: e.target.value })}
                                    />
                                    <button type="submit" className="btn w-100">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
