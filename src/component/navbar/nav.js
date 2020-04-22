import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Navbar extends React.Component {
	render() {
		return (
			<div class="leftpanel">
				<div className="vector">
				<svg viewBox="0 0 250 250">
					<circle cx={125} cy={125} fill="#0564fc" r={125} />
					</svg>
				</div>
				<div class="welcome">
					Welcome <b>Rens</b>
				</div>

				<nav>
					<Link to="/dashboard">Dashboard</Link>
					<Link to="/yourtravels">Your travels</Link>
					<Link to="/createatravel">Create a travel</Link>
					<Link to="/findatravel"> Find a travel </Link>
					<Link to="/ratedriver">Rate driver</Link>
					<Link to="/chat">Chats</Link>
					<Link to="/logout">Logout</Link>
				</nav>
			</div>
		);
	}
}

export default Navbar;
