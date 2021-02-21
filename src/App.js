import React from 'react';
import { Container, Col } from 'react-bootstrap';
import TopNav from './components/TopNav';
import About from './components/About';
import Projects from './components/Projects';
import BotNav from './components/BotNav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Col>
        <TopNav />
        <About />
        <Projects />
        <BotNav />
      </Col>
    </Container>
  );
}

export default App;
