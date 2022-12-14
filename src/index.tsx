import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './assets/themify-icon/themify-icons.css';
import './assets/simple-line-icon/simple-line-icons.css';
import './assets/font-awesome/css/all.css';
import './assets/elagent/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';
import './assets/responsive.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@popperjs/core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
