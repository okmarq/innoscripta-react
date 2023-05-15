import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import App from '../App';

const Register = () => {
    const [register, setRegister] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const response = ApiService.register(register)
        // Handle successful registration
        response.then(console.log(response.data))
            // Handle registration error
            .catch(error => console.log(error.response.data))
    };

    return (
        <App>
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
                                        value={register.first_name}
                                        onChange={(e) => setRegister({ ...register, first_name: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        value={register.last_name}
                                        onChange={(e) => setRegister({ ...register, last_name: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={register.email}
                                        onChange={(e) => setRegister({ ...register, email: e.target.value })}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={register.password}
                                        onChange={(e) => setRegister({ ...register, password: e.target.value })}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={register.password_confirmation}
                                        onChange={(e) => setRegister({ ...register, password_confirmation: e.target.value })}
                                    />
                                    <button type="submit" className="btn w-100">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}

export default Register;
