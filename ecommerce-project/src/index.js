import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { CartProvider } from "react-use-cart";

ReactDOM.render(
  <CartProvider>
    <App/>
  </CartProvider>,
  document.getElementById('root')
);


reportWebVitals();
