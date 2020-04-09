import axios from "axios";

async function CreateTravel(
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
		.post("http://localhost:9999/travel", createTravelObject, {
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

async function GetAllTravels() {
	return axios
		.get("http://localhost:9999/travel/all", {
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

export const TravelService = {
	CreateTravel,
	GetAllTravels,
};
