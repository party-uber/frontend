import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./mapbox.css";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoibmlyYXkiLCJhIjoiY2s4aWxvZ2VlMDEyYTNtcXE4c3JiYzlzcyJ9.izkAJN5kKbR4429OH3m2SQ";

class Mapbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				latitude: 37.8,
				longitude: -122.4,
				zoom: 14,
				bearing: 0,
				pitch: 0
			}
		};
	}

	_onViewportChange = viewport => {
		this.setState({ viewport });
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(position => {
			console.log(position);

			let newViewport = {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				zoom: 14
			};
			this.setState({
				viewport: newViewport
			});
		});
	}

	render() {
		return (
			<ReactMapGL
				width="100%"
				height="100%"
				{...this.state.viewport}
				mapStyle="mapbox://styles/mapbox/streets-v11"
				onViewportChange={this._onViewportChange}
				mapboxApiAccessToken={MAPBOX_TOKEN}
			>
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
			</ReactMapGL>
		);
	}
}

export default Mapbox;
