import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// react component
import App from './App';
import SimpleComponent from './components/simplecomponent';
 import ProductFormComponent from './components/productcomponent/productformcomponent';
 
import * as serviceWorker from './serviceWorker';
import ParentComponent from './components/conditionalcomponent/conditionalcomonent';
import FormValidationComponent from './components/validations/validationcomponents';
import LifecycleParentComponent from './components/lifecyclecomponent/lifecycledemococmponent';
import SimpleHookComponent from './hooks/simplehookcomppnent';
import ProductHookCompponent from './hooks/producthookcomponent';


const message = 'Hi from Index';
// the rendering of the Component
ReactDOM.render(
  <React.StrictMode>
    <ProductHookCompponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
