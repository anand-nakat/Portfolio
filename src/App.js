import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import Education from "./pages/Education";
import ErrorPage from "./pages/ErrorPage";
import Projects from "./pages/Projects";
import More from "./pages/More";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";
import ThemeSwitch from "./components/ThemeSwitch";
import Loading from "./components/Loading";
import { useGlobalContext } from "./context";

const App = () => {
  const { isLoading } = useGlobalContext();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
            <Route path="/connect">
              <Connect />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
