import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './pages/Landing/Landing.js';
import Manager from './pages/Manager/ManagerPage.js';
import ManagerAdd from './pages/Manager/ManagerAdd';


export default function Routes(){
    return(
        <BrowserRouter>
                <Switch>
                    <Route path="/" exact component = { Landing } />
                    <Route path="/table" component = { Manager }/>
                    <Route path="/add" component = { ManagerAdd } />
                </Switch>
        </BrowserRouter>
        
    );
}