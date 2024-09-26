import logo from './logo.svg';
import './App.css';
import './App.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

let initState = {
    users: [],
    cates: []
}




function Homepage() {
    const [state, setState] = useState(initState);
    let arrUsers = []
    let arrCates = []

    let getData = async () => {
        arrUsers = await getUser("ALL")
        arrCates = await getCate("ALL")
    }

    useEffect(() => {
        let getState = async () => {
            await getData()
            setState({
                users: [...arrUsers],
                cates: [...arrCates]
            })
        }
        getState()
    }, [])

    return (
        <>

            <div className='section-introduce'>
                <div className='left-content' >
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
                </div>

                <div className='img-introduce right-content'></div>
            </div>
            {/* end introduce */}
            <span className='cate'>Explore categories</span>
            <button className='view-cate'>View All</button>


            <div className='section-cate'>
                <div className='cate-item'>
                    <span className='cate-icon'>{(state.cates && state.cates[0]) ? state.cates[0].name : "bank"}</span>
                    <span className='cate-name'>{(state.cates && state.cates[0]) ? state.cates[0].name : "fdfd"}</span>
                </div>
                <div className='cate-item'>
                    <span className='cate-icon'>bank</span>
                    <span className='cate-name'>Travel Insurance Company</span>
                </div>
                <div className='cate-item'>
                    <span className='cate-icon'>bank</span>
                    <span className='cate-name'>Car Dealer</span>
                </div>
                <div className='cate-item'>
                    <span className='cate-icon'>bank</span>
                    <span className='cate-name'>Furniture Store</span>
                </div>

                <div className='cate-item'>
                    <span className='cate-icon'>bank</span>
                    <span className='cate-name'>Bank</span>
                </div>
                <div className='cate-item'>
                    <span className='cate-icon'>bank</span>
                    <span className='cate-name'>Travel Insurance Company</span>
                </div>
                <div className='cate-item'>
                    <span className='cate-icon'>bank</span>
                    <span className='cate-name'>Car Dealer</span>
                </div>
                <div className='cate-item'>
                    <span className='cate-icon'>bank</span>
                    <span className='cate-name'>Furniture Store</span>
                </div>

                <div className='cate-item'>
                    <span className='cate-icon'>bank</span>
                    <span className='cate-name'>Bank</span>
                </div>
                <div className='cate-item'>
                    <span className='cate-icon'>bank</span>
                    <span className='cate-name'>Travel Insurance Company</span>
                </div>
                <div className='cate-item'>
                    <span className='cate-icon'>bank</span>
                    <span className='cate-name'>Car Dealer</span>
                </div>
                <div className='cate-item'>
                    <span className='cate-icon'>bank</span>
                    <span className='cate-name'>Furniture Store</span>
                </div>
            </div>
            {/* end section cate */}
            <span className='recent-review'>Recent Review</span>
            <div className='section-review'>
                <div className='review-item' >
                    <span className='name'>David</span>
                    <span className='title'>David to CPPPP</span>
                    <span className='review'>Review</span>
                </div>
            </div>
            {/* end section review */}
            <div className='section-about'>
                <div className='left-content' >
                    <span className='title'>Be heard</span>
                    <span className='introduce'>Trustpilot is a review platform that’s open to everyone. Share your experiences to help others make better choices and encourage companies to up their game.</span>
                    <button>What we do</button>
                </div>
                <div className='right-content' >
                    <span className='title'>Our 2024 Transparency Report has landed</span>
                    <span className='introduce'>Trustpilot is a review platform that’s open to everyone. Share your experiences to help others make better choices and encourage companies to up their game.</span>
                    <button>Take a look</button>
                </div>
            </div>
            {/* end section about */}
            <span className='your-story'> Your stories</span>
            <span classname='personal-story'>Each review has a personal story</span>

            <div className='section-story'>
                <div className='left-content' >
                    <span >Gonna love making fundfdf fdfdfsdfs sdfsd</span>
                </div>
                <div className='right-content'>
                    <span>image</span>
                </div>
            </div>
            {/* end section your story */}



        </>
    );
}

let getUser = async (userId) => {
    const response = await axios.get("http://localhost:3001/api/get-user", {
        params: {
            id: userId
        }
    })
    return response.data.message.user
}

let getCate = async (cateId) => {
    const res = await axios.get("http://localhost:3001/api/get-category", {
        params: {
            id: cateId
        }
    })
    return res.data.message.category
}

export default Homepage
