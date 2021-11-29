/* eslint-disable linebreak-style */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mathematics from './pages/Mathematics';
import Quotes from './pages/Quotes';
import Footer from './components/Footer';
import './styles/Calculator.css';

const App = () => (
  <main className="App">
    <Navbar />
    <Switch>
      <Route path="/quote">
        <Quotes />
      </Route>
      <Route path="/calculator">
        <Mathematics />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <Footer />
  </main>
);

export default App;
