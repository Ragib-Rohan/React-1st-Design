import React from 'react';
import Common from './Common';
import web from '../img/about.svg';
function About() {
    return (  
        <div>
           <Common  
           articleh1="Welcome to About page"
           articleh2="All about us."
           btnName="Contact Now"
           image={web}
           visit='./'
           />
        </div>
    );
}

export default About;
