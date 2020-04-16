import React from "react";
import { GetAllTravels } from "../../services/travel.service";
import Mapbox from "../../component/mapbox/mapbox";

class FindATravel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			travels: [],
		};
	}

	componentDidMount() {
		GetAllTravels().then((value) => {
			if (value.status === 200) {
				this.setState({
					travels: value.data,
				});
			}
		});

		console.log(this.state.travels);
	}

	render() {
		const { travels } = this.state;

		return (
			<div class="flexboxes">
				<div class="leftpanel">
					{travels.map((travel, i) => {
						return (
							<div key={i} class="event">
								<div> Event: {travel.eventName} </div>
								<div> Driver: {travel.owner.fullName} </div>
								<div> Price: € {travel.price} </div>
								<div> Available seats: {travel.maxPersons} </div>
								<button> Accept travel </button>
							</div>
						);
					})}
				</div>
				<div class="rightpanel">
					<Mapbox />
				</div>
			</div>
		);
	}
}

export default FindATravel;
