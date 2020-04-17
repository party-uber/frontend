import React from "react";
import Navbar from "../../component/navbar/nav";
import Mapbox from "../../component/mapbox/mapbox";

class Dashboard extends React.Component {
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
