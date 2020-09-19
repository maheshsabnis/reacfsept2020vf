import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import the 'createStore' object from redux to define the 'store' at application level
import {createStore} from 'redux';
// import the reducer to define the possible store updates
import reducer from './reduxapp/reducers/reducer'; 
// import the 'Provider'  object. This is the container object that will
// execute the React Component under the Redux Object Model
// the 'Provider' has the 'store' property that will make the store
// available to all compnents 
import {Provider} from 'react-redux';
// react component
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainComponent from './reduxapp/MainComponent';

// define the store, by passing the 'reducer' object to it
// window.__REDUX_DEVTOOLS_EXTENSION__ : Provide the Redux Store Simulation in browser
// that is having the 'REDUX EXTENSION'
let store = createStore(reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const message = 'Hi from Index';
// the rendering of the Component
ReactDOM.render(
   <Provider store={store}>
      <MainComponent/>
   </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
