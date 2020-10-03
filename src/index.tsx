import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

import Portfolio from './components/Portfolio/Portfolio';
import * as serviceWorker from './serviceWorker';

import './assets/scss/index.scss';
dayjs.locale('fr');

library.add(fab);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Portfolio />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//<span>Photo by <a href="https://unsplash.com/@garrettpsystems?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">garrett parker</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
