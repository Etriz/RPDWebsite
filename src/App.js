import React from 'react';
import Jumbo from './components/Jumbo';
import TopNav from './components/TopNav';
import About from './components/About';
import Projects from './components/Projects';
import BotNav from './components/BotNav';
import './styling/GlobalStyles.scss';

function App() {
  return (
    <>
      <Jumbo />
      <TopNav />
      <About />
      <Projects />
      <BotNav />
    </>
  );
}

export default App;
