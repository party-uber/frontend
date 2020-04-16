import React from "react";
import Navbar from "../../component/navbar/nav";
import Mapbox from "../../component/mapbox/mapbox";
<<<<<<< HEAD

class Dashboard extends React.Component {
=======
import { PostalCodeService } from "../../services/postcode.service";

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

>>>>>>> master
	render() {
		return (
			<div class="flexboxes">
				<Navbar />

				<div class="rightpanel">
					<Mapbox />
				</div>
			</div>
		);
	}
}

export default Dashboard;
