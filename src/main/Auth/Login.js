import { useState } from 'react';
import './Auth.css';
import { SignIn } from './SignIn';

export default function Login() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="login">
            <div className="login-backgrond">
                <img 
                    className="login-logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt=""
                />
                <button 
                    onClick={() => setSignIn(true)}
                    className='login-but'> Sign in</button>
                <div className='login-gradient'/>
            </div>
            <div className='login-body'>
                {signIn ? (< SignIn />) : (
                    <>
                        <h1>Unlimited films, TV programes and more.</h1>
                        <h2> Watch anywhere. Cancel at any time.</h2>
                        <h3> Ready to watch? Enter your email to create or restart membership </h3>
                        <div >
                            <form className='login-form'>
                                <input type='email' placeholder='Your Email' />
                                <button 
                                    onClick={() => setSignIn(true)}
                                    className='login-form-sum' >GET STARTED</button>
                                </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}