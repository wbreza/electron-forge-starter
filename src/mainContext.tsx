import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './home';
import Settings from './settings';

const MainContent = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/settings" exact component={Settings} />
        </Switch>
    );
}

export default MainContent