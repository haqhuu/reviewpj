import logo from './logo.svg';
import './Homepage.js'

import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Homepage from './Homepage.js';
import Categorypage from './Categorypage.js';
import Blogpage from "./Blogpage.js"
import Login from "./Login.js"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios'
import { StrictMode } from 'react';

function App() {
  return (

    <>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/categorypage' element={<Categorypage />} />
            <Route exact path='/blogpage' element={<Blogpage />} />
            <Route exact path='/login' element={<Login />} />
            {/* <Route exact path='/login' element={<Categorypage />} /> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>

    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
