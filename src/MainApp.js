import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Competence from './components/Competence/Competence';
import APropos from './components/APropos/APropos';

function MainApp() {
  return (
    <>
      <Header />
      <div className="MainApp">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/competence">
            <Competence />
          </Route>
          <Route exact path="/APropos">
            <APropos />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default MainApp;