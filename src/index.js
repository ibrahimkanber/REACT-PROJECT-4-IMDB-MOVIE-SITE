import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router/Router"



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      
          <Router />
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
