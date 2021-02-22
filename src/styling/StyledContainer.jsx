import { Container } from 'react-bootstrap';
import styled from 'styled-components';
const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'column'};
  align-items: center;
  justify-content: center;
`;

export default StyledContainer;
