import React from 'react';
import StyledContainer from '../styling/StyledContainer';
import Image from '../images/hipster-avatar.png';

const About = () => {
  return (
    <StyledContainer flexdirection="row" style={{ maxWidth: '45rem' }} className="p-3 mx-auto row">
      <img
        alt="avatar"
        src={Image}
        style={{ width: '200px', height: '200px' }}
        className="rounded-circle mx-auto mx-sm-4 my-3"
      />
      <div className="mx-auto col-12 col-sm-7">
        I'm a web developer who combines my passion for programming and design to create usable and
        beautiful web apps. I recently graduated from Lambda School studying Full Stack Web
        Development, and am now excited to put my knowledge about React, NodeJS, ExpressJS, and
        Postgres to work.
      </div>
    </StyledContainer>
  );
};

export default About;
