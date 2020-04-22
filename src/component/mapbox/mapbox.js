import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./mapbox.css";
import { GetAllTravels } from "../../services/travel.service";
import { getCoordinates } from "../../services/postcode.service";
import { mapboxtoken, icon } from "../../services/constants";

const pinStyle = {
	cursor: "pointer",
	fill: "#d00",
	stroke: "none",
};

class Mapbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				latitude: 37.8,
				longitude: -122.4,
				zoom: 14,
				bearing: 0,
				pitch: 0,
			},
			travels: [],
		};
	}

	_onViewportChange = (viewport) => {
		this.setState({ viewport });
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position);

			let newViewport = {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				zoom: 14,
			};
			this.setState({
				viewport: newViewport,
			});
		});

		GetAllTravels().then((value) => {
			if (value.status === 200) {
				const newTravels = [];

				if(value.data !== "No travels found") {
					value.data.forEach((value) => {
						let travel = value;
						getCoordinates(travel.pickupPoint).then((value) => {
							if (value !== undefined) {
								travel.coords = value;
							}
						});
						newTravels.push(travel);
					});
				}

				this.setState({
					travels: newTravels,
				});

				this.forceUpdate();
			}
		});
	}

	setSelectedMarker = (value) => {
		this.selectedMarker = value;
		this.forceUpdate();
	};

	removeSelectedMarker() {
		this.selectedMarker = undefined;
		this.forceUpdate();
	}

	render() {
		const { size = 40 } = this.props;
		const { travels } = this.state;
		const selectedMarker = this.selectedMarker;

		return (
			<ReactMapGL
				width="100%"
				height="100%"
				{...this.state.viewport}
				mapStyle="mapbox://styles/mapbox/streets-v11"
				onViewportChange={this._onViewportChange}
				mapboxApiAccessToken={mapboxtoken}
			>
				{travels.map((value, i) => {
					if (value.coords) {
						return (
							<Marker
								key={i}
								latitude={value.coords.latitude}
								longitude={value.coords.longitude}
							>
								<svg
									height={size}
									viewBox="0 0 24 24"
									style={{
										...pinStyle,
										transform: `translate(${-size / 2}px,${-size}px)`,
									}}
									onClick={(e) => {
										e.preventDefault();
										this.setSelectedMarker(value);
									}}
								>
									<path d={icon} />
								</svg>
							</Marker>
						);
					}
				})}

				{selectedMarker !== undefined ? (
					<Popup
						latitude={selectedMarker.coords.latitude}
						longitude={selectedMarker.coords.longitude}
						onClose={(e) => {
							this.removeSelectedMarker();
						}}
					>
						<div>
							<h3>{selectedMarker.eventName}</h3>
						</div>
					</Popup>
				) : null}
			</ReactMapGL>
		);
	}
}

export default Mapbox;
