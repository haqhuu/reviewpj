import logo from './logo.svg';
import './App.css';
import './App.scss'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <span className='title'>Read reviews. Write reviews. Find companies.</span>

            <div className='section-login' >
                <div className='container'>
                    <span>Login or sign up below</span>
                    <button>Google</button>
                    <button>Facebook</button>
                    <button>Apple</button>
                    <a href='#'>Continue with email</a>
                </div>
            </div>

            <div className='section-login-business'>
                <div className='container' >
                    <span className='title'>Are you a business ?</span>
                    <span>Set up your business account on Trustpilot for free</span>
                    <button>
                        Login
                    </button>
                    <button>Sign up</button>
                </div>
            </div>
        </>
    );
}

export default Login;