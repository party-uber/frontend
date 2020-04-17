import React from "react";
import "./createatravel.css";
import { CreateTravel } from "../../services/travel.service";
import { Link } from "react-router-dom";

class Createatravel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			price: "",
			maxPersons: "",
			pickupDate: "",
			pickupPoint: "",
			eventName: "",
			eventAddress: "",
			submitted: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const {
			price,
			maxPersons,
			pickupDate,
			pickupPoint,
			eventName,
			eventAddress,
		} = this.state;
		if (
			(price && maxPersons && pickupDate && pickupPoint,
			eventName,
			eventAddress)
		) {
			CreateTravel(
				price,
				maxPersons,
				pickupDate,
				pickupPoint,
				eventName,
				eventAddress
			).then(
				alert("event successfully created"),
				this.props.history.push("/dashboard")
			);
		}
	}

	render() {
		const {
			price,
			maxPersons,
			pickupDate,
			pickupPoint,
			eventName,
			eventAddress,
		} = this.state;

		return (
			<div class="createtravel">
				<h1> Create a travel </h1>

				<div class="form">
					<form onSubmit={this.handleSubmit}>
						<div class="inputfields">
							<input
								type="text"
								placeholder="Party name"
								name="eventName"
								value={eventName}
								onChange={this.handleChange}
							/>
							<input
								type="text"
								placeholder="Postal code of event"
								name="eventAddress"
								value={eventAddress}
								onChange={this.handleChange}
							/>
							<input
								type="text"
								placeholder="Postal code of departure"
								name="pickupPoint"
								value={pickupPoint}
								onChange={this.handleChange}
							/>
							<input
								type="double"
								placeholder="Price"
								name="price"
								value={price}
								onChange={this.handleChange}
							/>
							<input
								type="number"
								placeholder="Persons"
								name="maxPersons"
								value={maxPersons}
								onChange={this.handleChange}
							/>
							Date of departure
							<input
								type="date"
								placeholder="Date of departure"
								name="pickupDate"
								value={pickupDate}
								onChange={this.handleChange}
							/>
							<button>Create</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Createatravel;
