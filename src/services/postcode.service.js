import axios from "axios";
import { mapboxtoken } from "./constants";

export async function getCoordinates(postalCode) {
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
