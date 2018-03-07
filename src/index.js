import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root')

ReactDOM.render(<AppContainer />, rootElement);

if (module.hot) {
  module.hot.accept('./AppContainer', () => {
    const NextApp = require('./AppContainer').default
    ReactDOM.render(<NextApp />, rootElement)
  })
}

registerServiceWorker();
