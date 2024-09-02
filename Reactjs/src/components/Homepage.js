import logo from './logo.svg';
import './App.css';
import './App.scss'

function Homepage() {
    return (
        <>
            <div className='section-home-header'>
                <div className="logo">
                    <span className='logo-name'> Review Company </span>
                </div>
                <span className='categories'> Categories </span>
                <span className='blog'> Blog </span>
                <span className='login'> Log in </span>
                <button className='businesses'>For Business</button>
            </div>

            <div className='section-introduce'>
                <div className='text-introduce'>
                    <span>Read reviews.</span>
                    <span>Write reviews.</span>
                    <span>Find company</span>
                    <span>you can trust.</span>
                </div>

                <div className='search'>
                    <input type='text' placeHolder='Company or category'>
                    </input>

                    <button >
                        Search
                    </button>
                </div>

                <div className='img-introduce'>

                </div>


            </div>

        </>
    );
}

export default Homepage;
