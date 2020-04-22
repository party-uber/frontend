import React from "react";
import { GetAllTravels, ApplyToTravel } from "../../services/travel.service";
import Mapbox from "../../component/mapbox/mapbox";
import "./findatravel.css";
import { Link } from "react-router-dom";


class FindATravel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			travels: [],
		};
	}

	componentDidMount() {
		GetAllTravels().then((value) => {
			if (value.status === 200 && value.data !== "No travels found") {
				this.setState({
					travels: value.data,
				});
			}
		});

		console.log(this.state.travels);
	}

	acceptTravel = (travel) => {
		if (
			window.confirm(
				"Are you sure you want to travel with " +
					travel.owner.fullName +
					" to event: " +
					travel.eventName
			)
		) {
			ApplyToTravel(travel.id).then((value) => {
				if (value.status === 200) {
					alert("succesfully applied to travel");
				}
			});
		}
	};

	render() {
		const { travels } = this.state;

		return (
			<div class="flexboxes">
				<div class="leftpanel">
					<div className="back">
						<Link to="/dashboard">Go back</Link>
					</div>
					{travels.map((travel, i) => {
						return (
							<div key={i} class="event">
								<div> Event: {travel.eventName} </div>
								<div> Driver: {travel.owner.fullName} </div>
								<div> Price: € {travel.price} </div>
								<div> Available seats: {travel.maxPersons} </div>
								<button
									onClick={(e) => {
										this.acceptTravel(travel);
									}}
								>
									Accept travel
								</button>
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
