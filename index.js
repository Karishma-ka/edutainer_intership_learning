import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Promo from './Components/Promo';
import reportWebVitals from './reportWebVitals';
//import UseEffectDemo from './Components/UseEffectDemo'
//import PostList from './Components/PostList'
import Students_parent_component from './Components/Students_parent_component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Students_parent_component/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
