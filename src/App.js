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
import Productinfo from "./Component/Productinfo";
import Orderpage from "./Component/Orderpage";
import OrderProgress from "./Component/OrderProgress";



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

          <Route exact path="/Productsinfo">
          <Header />
            <Productinfo/>
          </Route>
          <Route exact path="/OrderPage">
          <Header />
            <Orderpage/>
          </Route>
          <Route exact path="/Progresspage">
        
            <OrderProgress />
          </Route>
        </Switch>
   
    </Router>
  );
}



