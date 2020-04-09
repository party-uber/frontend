import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/profile/profile';
import CreateATravel from './pages/createatravel/createatravel';
import FindATravel from './pages/findatravel/findatravel';
import TravelHistory from './pages/travelhistory/travelhistory';
import { Login } from './pages/login';
import { Register } from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicRoute from './component/navbar/PublicRoute';
import PrivateRoute from './component/navbar/PrivateRoute';

class App extends React.Component {
  constructor(props) {
    super(props);

    if(window.sessionStorage.getItem("token")) {
      this.props.getUser(window.sessionStorage.getItem("token"));
      console.log(this.props);
    }
  } 

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/" component={Login} restricted="true" />
          <PublicRoute exact path="/register" component={Register} restricted="true" />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/travelhistory" component={TravelHistory} />
          <PrivateRoute exact path="/findatravel" component={FindATravel} />
          <PrivateRoute exact path="/createatravel " component={CreateATravel} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapState = (state) => {
    console.log(state);
    return {
        loggedIn: state.auth.isAuthenticated
    }
}

const actionCreators = {
    getUser: authActions.getUser
};

const connectedAppPage = connect(mapState, actionCreators)(App);
export { connectedAppPage as App };
