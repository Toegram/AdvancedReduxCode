import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers' //if we import a directory, react looks for an index.js file inside of that by default. 'reducers' === 'reducers/index.js'


ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <App/>
  </Provider>
  ,document.querySelector('#root')
);
