import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import StyledContainer from '../styling/StyledContainer';
import { Nav } from 'react-bootstrap';

const BotNav = () => {
  const gitHubIcon = <FontAwesomeIcon icon={faGithubSquare} />;
  const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
  const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />;
  return (
    <div style={{ background: '#4dbce9' }}>
      <StyledContainer>
        <Nav className="my-3">
          <span className="mx-auto" style={{ color: 'white' }}>
            Find me on the internet at
          </span>
          <span className="mx-auto">
            <StyledLink href="http://www.github.com/etriz">
              {gitHubIcon} GitHub
            </StyledLink>
            <StyledLink href="https://www.linkedin.com/in/ryanpdesigns/">
              {linkedInIcon} LinkedIn
            </StyledLink>
            <StyledLink href="">{envelopeIcon} Email</StyledLink>
          </span>
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
