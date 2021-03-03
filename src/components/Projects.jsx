import React from 'react';
import { CardColumns } from 'react-bootstrap';
import StyledContainer from '../styling/StyledContainer';
import PreviewCard from './PreviewCard';

import Data from '../ProjectData.json';

const Projects = () => {
  return (
    <StyledContainer>
      <CardColumns>
        {Data.map(item=>{
        return <PreviewCard key={item.id} project={item} />}
        )}
      </CardColumns>
    </StyledContainer>
  );
};

export default Projects;