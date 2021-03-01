import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import StyledContainer from '../styling/StyledContainer';
import { Nav } from 'react-bootstrap';

const BotNav = () => {
  const gitHubIcon = <FontAwesomeIcon icon={faGithubSquare} />;
  const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
  return (
    <div style={{ background: '#4dbce9' }}>
      <StyledContainer>
        <Nav className="justify-content-center">
          <span className="nav-link" style={{ color: 'white' }}>
            Find me around the internet at
          </span>
          <StyledLink href="http://www.github.com/etriz">{gitHubIcon} GitHub</StyledLink>
          <StyledLink href="https://www.linkedin.com/in/ryanpdesigns/">
            {linkedInIcon} LinkedIn
          </StyledLink>
          <StyledLink href="">{instagramIcon} Instagram</StyledLink>
        </Nav>
      </StyledContainer>
    </div>
  );
};

export default BotNav;

const StyledLink = styled.a`
  color: white;
  margin: 0.5rem;
  &:hover {
    color: #343a40;
    text-decoration: none;
  }
`;
