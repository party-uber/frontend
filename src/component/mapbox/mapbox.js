import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./mapbox.css";
<<<<<<< HEAD
=======
import { GetAllTravels } from "../../services/travel.service";
import { getCoordinates } from "../../services/postcode.service";
>>>>>>> master

const MAPBOX_TOKEN =
	"pk.eyJ1IjoibmlyYXkiLCJhIjoiY2s4aWxvZ2VlMDEyYTNtcXE4c3JiYzlzcyJ9.izkAJN5kKbR4429OH3m2SQ";

<<<<<<< HEAD
=======
const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
	cursor: "pointer",
	fill: "#d00",
	stroke: "none",
};

>>>>>>> master
class Mapbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				latitude: 37.8,
				longitude: -122.4,
				zoom: 14,
				bearing: 0,
<<<<<<< HEAD
				pitch: 0
			}
		};
	}

	_onViewportChange = viewport => {
=======
				pitch: 0,
			},
			travels: [],
		};
	}

	_onViewportChange = (viewport) => {
>>>>>>> master
		this.setState({ viewport });
	};

	componentDidMount() {
<<<<<<< HEAD
		navigator.geolocation.getCurrentPosition(position => {
=======
		navigator.geolocation.getCurrentPosition((position) => {
>>>>>>> master
			console.log(position);

			let newViewport = {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
<<<<<<< HEAD
				zoom: 14
			};
			this.setState({
				viewport: newViewport
			});
		});
	}

	render() {
=======
				zoom: 14,
			};
			this.setState({
				viewport: newViewport,
			});
		});

		GetAllTravels().then((value) => {
			if (value.status === 200) {
				const newTravels = [];

				value.data.forEach((value) => {
					let travel = value;
					getCoordinates(travel.pickupPoint).then((value) => {
						if (value !== undefined) {
							travel.coords = value;
						}
					});

					newTravels.push(travel);
				});

				this.setState({
					travels: newTravels,
				});

				console.log(this.state.travels);
			}
		});
	}

	render() {
		const { size = 40, onClick } = this.props;
		const { travels } = this.state;

>>>>>>> master
		return (
			<ReactMapGL
				width="100%"
				height="100%"
				{...this.state.viewport}
				mapStyle="mapbox://styles/mapbox/streets-v11"
				onViewportChange={this._onViewportChange}
				mapboxApiAccessToken={MAPBOX_TOKEN}
			>
<<<<<<< HEAD
				<Marker latitude={51.441212099999994} longitude={5.4557294999999995}>
					<svg height="100" width="100">
						<circle
							cx="40"
							cy="40"
							r="15"
							stroke="black"
							stroke-width="3"
							fill="red"
						/>
					</svg>
				</Marker>
=======
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
									onClick={onClick}
								>
									<path d={ICON} />
								</svg>
							</Marker>
						);
					} else {
						return;
					}
				})}
>>>>>>> master
			</ReactMapGL>
		);
	}
}

export default Mapbox;
