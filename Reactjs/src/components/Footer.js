import logo from './logo.svg';
import './App.css';
import './App.scss'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='section-footer' >
                <span className='logo'>Trustpilot</span>
                <div className='about-cate' >
                    <span className='about'>About us</span>
                    <span className='about'>Jobs</span>
                    <span className='about'>Contact</span>
                    <span className='about'>Blog</span>
                    <span className='about'>How Trustpilot works</span>
                    <span className='about'>Transparency Report</span>
                    <span className='about'>Transparency Report</span>
                    <span className='about'>Transparency Report</span>

                </div>
                <div className='community-cate' >
                    <span className='community' > Trust in reviews</span>
                    <span className='community' > Trust in reviews</span>
                    <span className='community' > Trust in reviews</span>
                    <span className='community' > Trust in reviews</span>
                </div>

                <div className='follow-cate' >
                    <span classname='follow'>FB</span>
                    <span classname='follow'>FB</span>
                    <span classname='follow'>FB</span>

                    <span classname='follow'>FB</span>

                </div>

                <div className='country-cate' >
                    <span className='coutry'>US</span>
                    <span className='coutry'>US</span>

                </div>
            </div>
            {/* end section footer */}

        </>
    );
}

export default Footer;