import React from 'react';
import styled from 'styled-components';
import { Jumbotron, Image } from 'react-bootstrap';
import Banner from '../images/RPDbanner.png';
import StyledContainer from '../styling/StyledContainer';

const Jumbo = () => {
  return (
    <StyledJumbo fluid>
      <StyledContainer>
        <Image src={Banner} alt="" fluid />
      </StyledContainer>
    </StyledJumbo>
  );
};

export default Jumbo;

const StyledJumbo = styled(Jumbotron)`
  margin: 0;
  padding: 0;
  background: #4dbce9;
`;
