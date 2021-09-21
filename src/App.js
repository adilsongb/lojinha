import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import './App.css';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/ProductDetail/:productid" component={ ProductDetail } />
          <Route path="/CartPage" component={ CartPage } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
