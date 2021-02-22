import React from 'react';
import styled from 'styled-components';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import TestImage from '../images/test-image.png';

const PreviewCard = ({ project }) => {
  return (
    <StyledCard>
      <Card.Img variant="top" src={TestImage} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <hr />
        <ButtonGroup>
          <Button variant="primary" href={project.liveLink}>
            View
          </Button>
          <Button variant="outline-secondary" href={project.githubLink}>
            GitHub
          </Button>
        </ButtonGroup>
      </Card.Body>
    </StyledCard>
  );
};

export default PreviewCard;

const StyledCard = styled(Card)`
  margin: 1rem;
  &:hover {
    border-bottom: 3px solid #4dbce9;
  }
`;
// const StyledButton = styled(Button)`
//   background: #4dbce9;
//   color: white;
//   &:hover {
//     background: #212529;
//   }
// `;
