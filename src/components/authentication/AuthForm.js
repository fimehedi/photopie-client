import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { createUserWithEmailPass, signInWithEmailPass } from './AuthManager';
import { userContext } from '../../App';

const AuthForm = ({ isSignup }) => {
    const { setLoggedInUser } = useContext(userContext);
    const [userInput, setUserInput] = useState({});
    const [status, setStatus] = useState({});
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    const handleOnChange = e => {
        let isValid = false;
        if (e.target.name === 'name') {
            const name = e.target.value;
            isValid = name.length > 5 && true;
        }
        else if (e.target.name === 'password') {
            const password = e.target.value;
            const passHasNumberAndChar = /^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/.test(password);
            isValid = password.length >= 6 && passHasNumberAndChar;
        }
        else if (e.target.name === 'email') {
            const email = e.target.value;
            const isEmailValid = /^[^\s@]+@[^\s@]+$/.test(email);
            isValid = isEmailValid;
        }
        else if (e.target.name === 'confirmPassword') {
            isValid = true;
        }

        const newUserInput = { ...userInput };
        if (isValid) {
            newUserInput[e.target.name] = e.target.value;
        }
        else {
            newUserInput[e.target.name] = '';
        }
        setUserInput(newUserInput);
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = userInput;
        setStatus({});

        if (isSignup && (!name || !email || !confirmPassword)) {
            setStatus({ isError: true, errorMsg: 'All fields are required!' });
        }

        else if (!isSignup && (!password || !email)) {
            setStatus({ isError: true, errorMsg: 'Enter valid Email and password!' });
        }

        else if (isSignup && !password) {
            setStatus({ isError: true, errorMsg: 'Password required at least one Numeric and one Character!' });
        }

        else if (isSignup && password !== confirmPassword) {
            setStatus({ isError: true, errorMsg: 'Password and confirm password does not match!' });
        }

        else if (isSignup && name && email && password && confirmPassword) {
            setLoading(true);
            createUserWithEmailPass(name, email, password)
                .then(res => {
                    if (res.errorMsg) {
                        setStatus({ isError: true, errorMsg: res.errorMsg });
                    }
                    else if (res.isCreated) {
                        setStatus({ isSuccess: true, successMsg: 'User Created Successfully!' });
                        setUserInput({});
                        e.target.reset();
                        history.push('/login');

                    }
                    setLoading(false);
                })
                .catch(err => {
                    setStatus({ isError: true, errorMsg: 'Something went wrong!' });

                });
        }

        else if (!isSignup && email && password) {
            setLoading(true);
            signInWithEmailPass(email, password)
                .then(res => {
                    if (res.errorMsg) {
                        setStatus({ isError: true, errorMsg: res.errorMsg });
                    }
                    else if (res.name) {
                        setLoggedInUser(res);
                        history.replace(from);
                        e.target.reset();
                    }
                    setLoading(false);
                })
                .catch(err => {
                    setStatus({ isError: true, errorMsg: 'Something went wrong!' });
                });

        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center p-5">
            <div className="xs:p-0 mx-auto md:w-full md:max-w-md">
                <Link to="/"><h1 className="text-center mb-5 font-semibold text-xl tracking-tight cursor-pointer">PHOTOPIE</h1></Link>
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <div className="px-5 py-7">
                        <h2 className="text-center text-md font-medium uppercase text-gray-800 pb-4">
                            {
                                isSignup ? 'Create an account' : 'Login to account'
                            }
                        </h2>
                        <form onSubmit={handleOnSubmit}>
                            {
                                isSignup && <>
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Full Name</label>
                                    <input onChange={handleOnChange} name="name" type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Your Name" />
                                </>
                            }
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                            <input onChange={handleOnChange} name="email" type="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Email Address" />

                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                            <input onChange={handleOnChange} name="password" type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Password" />
                            {
                                isSignup && <>
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Confirm Password</label>
                                    <input onChange={handleOnChange} name="confirmPassword" type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder="Confirm Password" />
                                </>
                            }
                            {
                                status.isError && <small className="text-red-500">{status.errorMsg}</small>
                            }
                            {
                                status.isSuccess && <small className="text-green-500">{status.successMsg}</small>
                            }
                            <button type="submit" className="transition duration-200 border border-black rounded w-full p-1.5 hover:text-white hover:bg-gray-800">
                                <span className="inline-block mr-2">
                                    {
                                        loading ?
                                            'Processing...' :
                                            isSignup ? 'Sign Up' : 'Login'
                                    }
                                </span>
                            </button>
                        </form>

                    </div>
                </div>
                <div className="py-5">
                    <div className="flex-column sm:flex justify-between">
                        <div className="text-center sm:text-left whitespace-nowrap">
                            <Link to="/">
                                <button className="transition duration-200 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 ring-inset">
                                    <BsArrowLeft className="inline pl-1 text-2xl" />
                                    <span className="inline-block ml-1">Back to home</span>
                                </button>
                            </Link>
                        </div>
                        <div className="text-center sm:text-left whitespace-nowrap">
                            <Link to={isSignup ? '/login' : '/signup'}>
                                <button className="transition duration-200 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 ring-inset">
                                    <span className="inline-block ml-1">
                                        {isSignup ? 'Have an account?' : 'Create an account?'}
                                    </span>
                                    <BsArrowRight className="inline pl-1 text-2xl" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;