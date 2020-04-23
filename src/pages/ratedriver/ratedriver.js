import React from "react";
import { Rating } from "@material-ui/lab";
import './ratedriver.css';
import { Link } from "react-router-dom";

export default class RateDriver extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			driver: "",
			drivingskills: 0,
			socialskills: 0,
			communication: 0,
		};

		this.setValue = this.setValue.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	componentDidMount() {
		this.setState({
			driver: "Rens Manders",
		});
	}

	setValue(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
		console.log(this.state);
	}

	submitForm() {
		// PostRateDriver(
		// 	this.state.driver,
		// 	this.state.drivingskills,
		// 	this.state.socialskills,
		// 	this.state.communication
		// );

		alert(
			"Thank you for using PartyUber. Hope you had a nice party, time for some rest now"
		);

		this.props.history.push("/dashboard")
	}

	render() {
		const { driver } = this.state;
		const { valuedriving, valuesocial, valuecommunication } = this.state;
		return (
			<div class="rating-box">
				<div class="rating">
					<div className="back">
						<Link to="/dashboard">Go back</Link>
					</div>
					<div>Driver name : {driver} </div>

					<div>Driving skills: </div>
					<Rating
						name="drivingskills"
						value={valuedriving}
						precision={1}
						onChange={this.setValue}
					/>

					<div>Social skills: </div>
					<Rating
						name="socialskills"
						value={valuesocial}
						precision={1}
						onChange={this.setValue}
					/>

					<div>Communication: </div>
					<Rating
						name="communication"
						value={valuecommunication}
						precision={1}
						onChange={this.setValue}
					/>

					<button onClick={this.submitForm}> Submit </button>

				</div>
			</div>
		);
	}
}
