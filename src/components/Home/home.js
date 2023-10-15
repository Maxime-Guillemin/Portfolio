import React from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import './Home.css'
import { BrowserRouter } from 'react-router-dom';
import Social from './Social/Social';


const Home = () => {

  return (
    
    <Fade>
    <div className='mainContainer title' >
      <h1 className='nameStyle'> Maxime Guillemin </h1>
      <div  style={{ flexDirection: 'row' }}>
        <Typewriter
          options={{
            loop: true,
            autoStart: true,
            strings:"Développeur web",
          }}
        />
      </div>
      <Social />
    </div>
    <div className='test'>
    </div>
  </Fade>
  );
};

export default Home;
