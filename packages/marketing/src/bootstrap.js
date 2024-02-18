 
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

// Mount functon to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

 // if we are in dev and in iso, call mount imediatley
 if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
 }

 // we are in running through container
 // we should just export mount function
 export { mount };