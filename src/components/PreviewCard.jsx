import React from 'react';
import styled from 'styled-components';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

const PreviewCard = ({ project }) => {
  return (
    <StyledCard className="rounded-3 mx-auto my-3 mx-sm-3">
      <Card.Img
        variant="top"
        src={project.image}
        style={{
          borderBottom: '1px solid lightgray',
          borderRadius: '.5rem .5rem 0 0',
        }}
      />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <hr />
        <ButtonGroup>
          <Button variant="primary" href={project.liveURL}>
            View
          </Button>
          {project.githubURL ? (
            <Button variant="outline-secondary" href={project.githubURL}>
              GitHub
            </Button>
          ) : null}
        </ButtonGroup>
      </Card.Body>
    </StyledCard>
  );
};

export default PreviewCard;

const StyledCard = styled(Card)`
  margin: 1rem 0;
  border-radius: 0.5rem;
  &:hover {
    border: 1px solid #4dbce9;
  }
`;
// const StyledButton = styled(Button)`
//   background: #4dbce9;
//   color: white;
//   &:hover {
//     background: #212529;
//   }
// `;
