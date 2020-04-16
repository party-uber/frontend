import axios from "axios";
import { server } from "./constants";

export async function CreateTravel(
	price,
	maxPersons,
	pickupDate,
	pickupPoint,
	eventName,
	eventAddress
) {
	const createTravelObject = JSON.stringify({
		price: price,
		maxPersons: maxPersons,
		pickupDate: new Date(pickupDate),
		pickupPoint: pickupPoint,
		eventName: eventName,
		eventAddress: eventAddress,
	});

	return axios
		.post(server + "travel", createTravelObject, {
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

export async function GetAllTravels() {
	return axios
		.get(server + "travel/all", {
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
