import logo from './logo.svg';
import './App.css';
import './App.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='section-home-header'>
                <div className="logo">
                    <span className='logo-name'><Link to="./"> Review Company </Link>   </span>
                </div>
                <span className='categories'> <Link to="./Categorypage"> Categories </Link> </span>
                <span className='blog'> <Link to="/Blogpage"> Blog </Link> </span>
                <span className='login'> <Link to="/Login"> Log in </Link> </span>
                <button className='businesses'>For Business</button>
            </div>

        </>
    );
}

export default Header;