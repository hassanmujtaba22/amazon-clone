import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Layout from './components/Layout';
import Home from './containers/Home';
import Login from './containers/Login';
import Checkout from './containers/Checkout';
import Notfound from './containers/Notfound';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/*" component={Notfound}/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
