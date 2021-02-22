import React from 'react';
import { CardColumns } from 'react-bootstrap';
import StyledContainer from '../styling/StyledContainer';
import PreviewCard from './PreviewCard';

import Data from '../ProjectData.json';

const Projects = () => {
  return (
    <StyledContainer>
      <CardColumns>
        <PreviewCard project={Data} />
      </CardColumns>
    </StyledContainer>
  );
};

export default Projects;
