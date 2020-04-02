import React from "react";
import mapboxgl from "mapbox-gl";
import "./mapbox.css";

mapboxgl.accessToken =
	"pk.eyJ1IjoibmlyYXkiLCJhIjoiY2s4aWxvZ2VlMDEyYTNtcXE4c3JiYzlzcyJ9.izkAJN5kKbR4429OH3m2SQ";

class MapBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lng: 5,
			lat: 34,
			zoom: 5
		};
	}

	componentDidMount() {
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		});

		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

		function succes(pos) {
			const crd = pos.coords;

			map.flyTo({
				center: [crd.longitude, crd.latitude],
				zoom: 12,
				speed: 1,
				curve: 1,
				easing(t) {
					return t;
				}
			});
		}

		function error() {}

		navigator.geolocation.getCurrentPosition(succes, error, options);

		map.addControl(
			new mapboxgl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true
				},
				trackUserLocation: true
			})
		);
	}

	render() {
		return (
			<div class="mapbox">
				<div ref={el => (this.mapContainer = el)} />
			</div>
		);
	}
}

export default MapBox;
