import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Records from './Pages/Records';

const Routes = () => {
    return <BrowserRouter>
    <Header />
    <Switch >
        <Route path="/" exact>
            <Home />
        </Route>

        <Route path="/records">
            <Records />
        </Route>
    </Switch>
    
    </BrowserRouter>;
};

export default Routes;