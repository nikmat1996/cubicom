import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Dashboard from '../components/dashboard/Dashboard';


export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/dashboard' component={Dashboard} />
               
            </Switch>
        </div>
    )
}
