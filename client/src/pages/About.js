import React from 'react';
import Team from '../components/Team/Team';
import Contact from '../components/Contact/Contact';





const About = () => {
    return (
        <div>
          <div className="row">
          <Team />
          </div>
          <div className="row">
          <Contact />
          </div>
        </div>
    )
}

export default About;