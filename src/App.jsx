import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import NavBar from "./NavBar";
import User from "./User";
import Login from "./Login";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={Login}
          render={() => (
            <>
              <Footer />
            </>
          )}
        />

        <Route
          exact
          path="/home"
          render={() => (
            <>
              <NavBar />
              <Home />
              <Footer />
            </>
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <>
              <NavBar />
              <About />
              <Footer />
            </>
          )}
        />
        <Route
          exact
          path="/service"
          render={() => (
            <>
              <NavBar />
              <Service />
              <Footer />
            </>
          )}
        />
        <Route
          exact
          path="/contact"
          render={() => (
            <>
              <NavBar />
              <Contact />
              <Footer />
            </>
          )}
        />
        <Route
          exact
          path="/user"
          render={() => (
            <>
              <NavBar />
              <User />
              <Footer />
            </>
          )}
        />

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
