import React from "react";
import Mapbox from "../../component/mapbox/mapbox.js";

class TravelHistory extends React.Component {
	render() {
		return (
			<div class="flexboxes">
				<div class="leftpanel">test</div>
				<div class="rightpanel">
					<Mapbox />
				</div>
			</div>
		);
	}
}

export default TravelHistory;
