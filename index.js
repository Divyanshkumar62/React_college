import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hello from './Hello';
import Component from './Components/Component';
import Home from './Home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Hello />
    <Component /> */}
    <Home/>
  </React.StrictMode>
);

 