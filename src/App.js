import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Profile from "./pages/profile/profile";
import CreateATravel from "./pages/createatravel/createatravel";
import FindATravel from "./pages/findatravel/findatravel";
import TravelHistory from "./pages/travelhistory/travelhistory";
import { Login } from "./pages/login";
import { Register } from "./pages/Register";
import Chatpage from "./pages/chat/chatpage.js";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicRoute from "./component/navbar/PublicRoute";
import PrivateRoute from "./component/navbar/PrivateRoute";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<PublicRoute exact path="/" component={Login} restricted="true" />
				<PublicRoute
					exact
					path="/register"
					component={Register}
					restricted="true"
				/>
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<PrivateRoute exact path="/profile" component={Profile} />
				<PrivateRoute exact path="/travelhistory" component={TravelHistory} />
				<PrivateRoute exact path="/findatravel" component={FindATravel} />
				<PublicRoute exact path="/createatravel" component={CreateATravel} />
				<PublicRoute exact path="/chat" component={Chatpage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
