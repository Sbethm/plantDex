import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSeedling, faDroplet, faGlassWater, faCloudShowersWater } from '@fortawesome/free-solid-svg-icons';
import '../style.scss';
import App from './components/App.jsx';
console.log('cat')

library.add(fab, faSeedling, faDroplet, faGlassWater, faCloudShowersWater);

ReactDOM.render(<App />, document.getElementById('root'));



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './style.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );