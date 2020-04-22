import { AuthService } from "../services/auth.service";

function register(email, password, firstName, lastName) {
	return (dispatch) => {
		AuthService.register(email, password, firstName, lastName)
			.then((res) => {
				dispatch({
					type: "LOGIN_SUCCESS",
					payload: res.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: "LOGIN_FAIL",
				});
			});
	};
}

function login(email, password) {
	return (dispatch) => {
		AuthService.login(email, password)
			.then((res) => {
				dispatch({
					type: "LOGIN_SUCCESS",
					payload: res.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: "LOGIN_FAIL",
				});
			});
	};
}

function getUser(token) {
	return (dispatch) => {
		AuthService.getUser(token)
			.then((res) => {
				dispatch({
					type: "LOGIN_SUCCESS",
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
				dispatch({
					type: "LOGIN_FAIL",
				});
			});
	};
}

export const authActions = {
	login,
	getUser,
	register,
};
