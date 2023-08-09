/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
                navigate('/')
            })
            .catch(error => {
                console.log('error', error);
            })

    }
    return (
        <div >
            <form onSubmit={handleSubmit} className='w-50 my-5 shadow
        p-5 mx-auto fw-semibold '>
                <h4>Please login</h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-secondary">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3" >
                    <label htmlFor="exampleInputPassword1" className="form-label text-secondary">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                </div >

                <button type="submit" className="btn btn-primary">Login</button>
            </form >
        </div >
    );
};

export default Login;