import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import web from "../img/rr.svg";
import Common from './Common';
function Home() {
    return ( 
        <div>
           <Common articleh1="Grow your business with" 
           articleh2="Done your work by experienced developer."
           btnName="Get Started" 
           visit="./Service" 
           image={web}/>
        </div>
     );
}

export default Home;