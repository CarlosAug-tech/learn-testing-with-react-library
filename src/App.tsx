import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppProvider from './hooks';
import Home from './pages/Home';

import GlobalStyle from './assets/Styles/global';
import Routes from './routes';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </AppProvider>
  );
}

export default App;
