import React from 'react';
import styled from 'styled-components';
import StyledContainer from '../styling/StyledContainer';
import PreviewCard from './PreviewCard';

import { data } from '../ProjectData';

const Projects = () => {
  return (
    <div style={{ background: '#f7f7f7' }}>
      <StyledContainer className="px-5">
        <StyledGrid>
          {data.map((item) => {
            return <PreviewCard key={item.id} project={item} />;
          })}
        </StyledGrid>
        <p>... more coming soon!</p>
      </StyledContainer>
    </div>
  );
};

export default Projects;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 1rem;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
