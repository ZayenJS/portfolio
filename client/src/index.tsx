import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

import App from './App/App';

import store from './store';

import './assets/scss/index.scss';

dayjs.locale('fr');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

//<span>Photo by <a href="https://unsplash.com/@garrettpsystems?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">garrett parker</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
