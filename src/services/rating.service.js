import axios from "axios";
import { server } from "./constants";

export async function PostRateDriver(
	driver,
	drivingskills,
	socialskills,
	communication
) {
	const ratingObject = JSON.stringify({
		driver: driver.id,
		drivingskills,
		socialskills,
		communication,
	});

	return axios
		.post(server + "rating", ratingObject, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			},
		})
		.then((res) => {
			console.log(res.data);
			return res;
		});
}
