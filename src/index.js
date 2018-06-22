import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/Home.css';
import './styles/UrlsList.css';
import './styles/DetailsUrl.css';
import Home from './containers/home/Home.js';
import './Dispatcher'

import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
