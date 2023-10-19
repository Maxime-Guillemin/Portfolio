import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Competence from './components/Competence/Competence';
import APropos from './components/APropos/APropos';
import Diplomes from './components/Diplomes/Diplomes';
import { AnimatePresence } from 'framer-motion';


function MainApp() {

  const location = useLocation();
  return (
    <>
      <Header />
      <div className="MainApp">
        <AnimatePresence mode="wait">
          <Switch
          location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/competence">
            <Competence />
          </Route>
          <Route exact path="/APropos">
            <APropos />
          </Route>
          <Route exact path="/diplomes">
            <Diplomes />
          </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MainApp;