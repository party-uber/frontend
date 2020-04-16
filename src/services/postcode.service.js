import axios from "axios";
import { mapboxtoken } from "./constants";

export async function getCoordinates(postalCode) {
	const token =
		"pk.eyJ1IjoibmlyYXkiLCJhIjoiY2s4aWxvZ2VlMDEyYTNtcXE4c3JiYzlzcyJ9.izkAJN5kKbR4429OH3m2SQ";

	return axios
		.get(
			"https://api.mapbox.com/geocoding/v5/mapbox.places/" +
				postalCode +
				".json?access_token=" +
				mapboxtoken,
			{}
		)
		.then((res) => {
			if (res.data.features.length > 0) {
				const coordinates = {
					longitude: res.data.features[0].geometry.coordinates[0],
					latitude: res.data.features[0].geometry.coordinates[1],
				};
				return coordinates;
			}

			return;
		});
}
