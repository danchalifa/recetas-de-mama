import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import { RootRef } from '@material-ui/core';

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