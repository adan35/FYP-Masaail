import React from 'react'
import { Link } from "react-router-dom";
import '../auth.css';
const Home = () => {
    return (
        <div className="home_container">
          
          <header>
            <div className="primary-color home_logo">
              <h2>MASAAIL.com</h2>
            </div>
            <div className="home_text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </header>
    
          <main className="main_body">
            <h4 className="primary-color">Are You ?</h4>
            <div className="buttons_container">
              <button className="btn">Reviewer</button>
              <button className="btn">Investor</button>
            </div>
            <p className="already_registered">Already Registered? <Link to="#">Login</Link></p>
          </main>
    
    
        </div>
      );
}

export default Home;