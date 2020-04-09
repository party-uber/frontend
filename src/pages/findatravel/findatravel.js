import React from "react";
import { TravelService } from "../../services/travel.service";
import { PostalCodeService } from "../../services/postcode.service";
import Navbar from "../../component/navbar/nav";

class FindATravel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	async componentDidMount() {
		this.setState({
			travels: await TravelService.GetAllTravels(),
		});

		console.log(this.state);
	}

	render() {
		return (
			<div class="flexboxes">
				<div class="leftpanel">
					<Navbar />
				</div>
				<div class="rightpanel">test</div>
			</div>
		);
	}
}

export default FindATravel;
