import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Blogs from './Components/Blogs/Blogs';
import Info from './Components/Info/Info';
import Join from './Components/Join/Join';
import Signup from './Components/Signup/Signup';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
          <AuthProvider>
          <Router>

          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>

            <Route exact path="/services/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>

            <Route exact path="/blogs">
              <Blogs></Blogs>
            </Route>

            <Route exact path="/info">
              <Info></Info>
            </Route>

            <Route exact path="/contact">
              <Contact></Contact>
            </Route>

            <Route exact path="/join">
              <Join></Join>
            </Route>

            <Route exact path="/signup">
              <Signup></Signup>
            </Route>

            <Route path="/">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
          </Router>
          </AuthProvider>
    </div>
  );
}

export default App;
