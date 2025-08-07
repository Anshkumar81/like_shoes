import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='hero-container'>
        <div className="logo">
          <img className="logo-img" src='/images/logo.png' alt='logo'></img>
        </div>

        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button>Login</button>
      </nav>

      <main className='hero'>
        <div className='hero-content'>
          <h1> YOUR FEET <br></br>DESERB <br></br> THE BEST </h1>
          <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br></br>HELP YOU WITH OUR SHOES.YOUR FEET DESERVE<br></br> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR<br></br> SHOES. 
          </p>

          <div className='hero-btn'>
            <button className='shop'> Shop now </button>
            <button className='category'> Category </button>
          </div>

          <div className='shopping'>
            <p>Also Avilable On </p>
          </div>

          <div>
            <img className='amazon-logo' src='/images/amazonphoto.png' alt='amazone.logo'></img>
            <img className='flipkart-logo' src='/images/flipkartphoto.png' alt='flipkart.logo'></img>
          </div>
        </div>

        <div className='hero'>
          <img className='hero-shoes' src='/images/shoesphoto.png' alt='shoes.logo'></img>
        </div>
        

      </main>
    </div> 
  );
}

export default App;
