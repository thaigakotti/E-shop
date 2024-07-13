import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Cart from "./Component/Cart";
import Dashboard from "./Component/Dashboard";
import Header from "./Component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Products from "./Component/Products";



export default function App(props) {
  return (
    <Router>
     
        <Switch>
          <Route exact path="/">
          <Header />
            <Dashboard />
          </Route>
          <Route exact path="/cart">
          <Header />
            <Cart />
          </Route>
          <Route exact path="/Products/:name">
          <Header />
            <Products/>
          </Route>
        </Switch>
   
    </Router>
  );
}



