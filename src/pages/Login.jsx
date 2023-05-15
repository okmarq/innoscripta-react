import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import App from '../App';

const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const response = ApiService.login(login)
        // Handle successful login
        response.then(console.log(response.data))
            // Handle login error
            .catch(error => console.log(error.response.data));
    };

    return (
        <App>
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
                                        value={login.email}
                                        onChange={(e) => setLogin({ ...login, email: e.target.value })}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={login.password}
                                        onChange={(e) => setLogin({ ...login, password: e.target.value })}
                                    />
                                    <button type="submit" className="btn w-100">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Login;
