import travel from './images/travel-site-icon.jpg';
import app from './images/app-site-icon.jpg';
import tracker from './images/tracker-icon.jpg';
let data = [
  {
    id: '01',
    name: 'TravelX Site',
    description:
      'A responsive travel website. It shows examples of sections such as more information, about, and contact.',
    image: travel,
    liveURL: 'http://ryanpdesigns.com/travel-mockup.html',
    githubURL: '',
  },
  {
    id: '02',
    name: 'NewApp Site',
    description: 'A new app! With cool features! A static landing page made with JS and Bootstrap.',
    image: app,
    liveURL: 'http://ryanpdesigns.com/app-mockup.html',
    githubURL: '',
  },
  {
    id: '03',
    name: 'Issue Tracker',
    description: 'A tracker that creates a new item and then stores it using local storage.',
    image: tracker,
    liveURL: 'https://bugtrackerwithreact.netlify.app/',
    githubURL: 'https://github.com/Etriz/BugTrackerReact',
  },
];

export { data };
