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
import ProductDetail from "./Component/ProductDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.


export default function App() {
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
          <Route exact path="/ProductDetail">
          <Header />
            <ProductDetail />
          </Route>
        </Switch>
   
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.


