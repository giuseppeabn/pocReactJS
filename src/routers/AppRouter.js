import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/Login" component={LoginScreen}/>
        <Route path="/" component={DashboardRoutes}/>
      </Switch>
    </div>
  </Router>
  )
}
