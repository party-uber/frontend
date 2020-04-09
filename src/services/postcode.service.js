import axios from "axios";

async function getCoordinates(postalCode) {
	const token =
		"pk.eyJ1IjoibmlyYXkiLCJhIjoiY2s4aWxvZ2VlMDEyYTNtcXE4c3JiYzlzcyJ9.izkAJN5kKbR4429OH3m2SQ";

	return axios
		.get(
			"https://api.mapbox.com/geocoding/v5/mapbox.places/" +
				postalCode +
				".json?access_token=" +
				token,
			{}
		)
		.then((res) => {
			const coordinates = {
				longitude: res.data.features[0].geometry.coordinates[0],
				latitude: res.data.features[0].geometry.coordinates[1],
			};
			console.log(coordinates);
			return coordinates;
		});
}

export const PostalCodeService = {
	getCoordinates,
};
