import React from 'react'
import '../../../App.css';
const Home = () => {
    return (
        <div class="home_container">
          
          <header>
            <div class="primary-color home_logo">
              <h2>MASAAIL.com</h2>
            </div>
            <div class="home_text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </header>
    
          <main class="main_body">
            <h4 class="primary-color">Are You ?</h4>
            <div class="buttons_container">
              <button class="btn">Reviewer</button>
              <button class="btn">Investor</button>
            </div>
            <p class="already_registered">Already Registered? <a href="#">Login</a></p>
          </main>
    
    
        </div>
      );
}

export default Home;