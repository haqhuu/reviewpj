import logo from './logo.svg';
import './App.css';
import './App.scss'
import Header from './Header.js'
import { Link } from 'react-router-dom'

function Categorypage() {
    return (
        <>


            <div className='section-introduce'>
                <span>What are you looking for ?</span>

                <div className='search'>
                    <input type='text' placeHolder='Company or category'>
                    </input>
                </div>
            </div>
            {/* end introduce */}

            <div className='cate-section'>
                <div className='col' >
                    <div className='cate-animal'>
                        <div className='container'>
                            <div className='cate-name'>
                                <span >Icon pet</span>
                                <span >Animal and Pet</span>
                            </div>
                            <div className='sub-li'>
                                <ul>
                                    <li>Animal Health</li>
                                    <li>Pet Services</li>
                                    <li>Pet Store</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='cate-beauty'>
                        <div className='container'>
                            <div className='cate-name'>
                                <span >Beauty</span>
                                <span >Beauty and Favor</span>
                            </div>
                            <div className='sub-li'>
                                <ul>
                                    <li>Animal Health</li>
                                    <li>Pet Services</li>
                                    <li>Pet Store</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col' >
                    <div className='cate-event'>
                        <div className='container'>
                            <div className='cate-name'>
                                <span >Event pet</span>
                                <span >Event and Party</span>
                            </div>
                            <div className='sub-li'>
                                <ul>
                                    <li>Animal Health</li>
                                    <li>Pet Services</li>
                                    <li>Pet Store</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='cate-food'>
                        <div className='container'>
                            <div className='cate-name'>
                                <span >Foot </span>
                                <span >Foot and beverage</span>
                            </div>
                            <div className='sub-li'>
                                <ul>
                                    <li>Animal Health</li>
                                    <li>Pet Services</li>
                                    <li>Pet Store</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

export default Categorypage;
