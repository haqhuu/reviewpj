import logo from './logo.svg';
import './App.css';
import './App.scss'
import { Link } from 'react-router-dom'

function BlogHeader() {
    return (
        <>
            <div className='section-blog-header'>
                <div className="logo">
                    <span className='logo-name'><Link to="./"> Review Company </Link>   </span>
                </div>
                <span className='feature'> <Link to="/blogpage"> Featured </Link> </span>
                <span className='trend'> <Link to="/trend"> Trend in Trust </Link> </span>
                <span className='matter'> <Link to="/matter"> Review Matter </Link> </span>
                <span className='buy'> <Link to="/buy"> Buy with Confidence </Link> </span>
                <span className='story'> <Link to="/stories"> Stories </Link> </span>

            </div>

        </>
    );
}

export default BlogHeader;