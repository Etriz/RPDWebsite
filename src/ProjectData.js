import travel from './images/travel-site-icon.jpg';
import app from './images/app-site-icon.jpg';
import tracker from './images/tracker-icon.jpg';
import furniture from './images/hideaway-site-icon.jpg';
import pokedex from './images/pokedex-icon.jpg';
import weather from './images/weather-icon.jpg';
let data = [
  {
    id: '04',
    name: 'HomeHideaway E-Commerce Site',
    description:
      'An e-commerce site built using React and Bootstrap. Fully responsive, with the ability to view products by category and add them to a cart.',
    image: furniture,
    liveURL: 'https://rpd-shoppingsite.netlify.app/',
    githubURL: 'https://github.com/Etriz/ShoppingStorePage',
  },
  {
    id: '05',
    name: 'NextPokedex',
    description:
      'A NextJS project using the PokeAPI. Find Pokemon by type and view individual pages.',
    image: pokedex,
    liveURL: 'https://rpd-nextpokedex.netlify.app/',
    githubURL: 'https://github.com/Etriz/NextPokedex',
  },
  {
    id: '03',
    name: 'Issue Tracker',
    description:
      'A tracker that creates a new item and then stores it in a database. Built using React and MongoDB.',
    image: tracker,
    liveURL: 'https://bugtrackerwithreact.netlify.app/',
    githubURL: 'https://github.com/Etriz/BugTrackerReact',
  },
  {
    id: '06',
    name: 'Weather App',
    description:
      'A weather app that checks the weather in a city and displays temperature and a weather description',
    image: weather,
    liveURL: 'https://rpd-weatherapp.netlify.app',
    githubURL: 'https://github.com/Etriz/WeatherApp',
  },
  {
    id: '01',
    name: 'TravelX Site',
    description:
      'A responsive travel website. It shows examples of sections such as more information, about, and contact.',
    image: travel,
    liveURL: 'https://rpd-travelx.netlify.app',
    githubURL: '',
  },
  {
    id: '02',
    name: 'NewApp Site',
    description:
      'A new app! With cool features! A static landing page made with JS and Bootstrap.',
    image: app,
    liveURL: 'https://rpd-newappsite.netlify.app/',
    githubURL: '',
  },
];

export { data };
