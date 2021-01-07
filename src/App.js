import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import ErrorPage from "./pages/ErrorPage";
import Projects from "./pages/Projects";
import More from "./pages/More";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";
import ThemeSwitch from "./components/ThemeSwitch";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ThemeSwitch />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/more">
            <More />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
