import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/profile/profile';
import Createatravel from './pages/createatravel/createatravel';
import FindATravel from './pages/findatravel/findatravel';
import TravelHistory from './pages/travelhistory/travelhistory';
import Login from './pages/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/createatravel" component={Createatravel} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/travelhistory" component={TravelHistory} />
        <Route exact path="/findatravel" component={FindATravel} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
