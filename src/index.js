import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/Home.css';
import './styles/UrlsList.css';
import './styles/DetailsUrl.css';
import Home from './containers/home/Home.js';
import UrlList from './components/UrlList'
import DetailsUrl from './components/DetailsUrl'
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
