import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Blogs from './Components/Blogs/Blogs';
import Info from './Components/Info/Info';
import Join from './Components/Join/Join';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>

          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/services">
              <Services></Services>
            </Route>

            <Route exact path="/blogs">
              <Blogs></Blogs>
            </Route>

            <Route exact path="/info">
              <Info></Info>
            </Route>

            <Route exact path="/join">
              <Join></Join>
            </Route>

            <Route path="/">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
