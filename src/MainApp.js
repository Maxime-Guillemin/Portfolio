
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header'


function MainApp() {

    return (
        <>
            <Header />
            <div className="MainApp">
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="">

                    </Route>


                </Switch>

            </div>
        </>
    );
}

export default MainApp;