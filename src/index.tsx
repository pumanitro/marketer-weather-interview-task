import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'global/Langs/i18n';

// to-remove: WITHOUT REDUX:
/*import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));*/

// with redux:
const render = () => {
  const App = require('./App').default;
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', render);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
