import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";


ReactDOM.render(
  <BrowserRouter>
    <Root/>
    </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();

export default function Root() {
  return (
    <CookiesProvider>
      <App />
    </CookiesProvider>
  );
}