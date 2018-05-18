import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ModalContainer from 'containers/ModalContainer';
import Routes from './routes';

function App() {
  return (
    <div className="App__container">
      <ModalContainer />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default hot(module)(App);
