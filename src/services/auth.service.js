import axios from 'axios';

async function login(email, password) {
    const user = JSON.stringify({
        email: email,
        password: password
    });    

    const res = await axios.post("https://partyuberauth.herokuapp.com/auth/login", user, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    localStorage.setItem('token', res.data.token);
    return res;
}

async function register(email, password, firstName, lastName) {
    const user = JSON.stringify({
        email: email,
        password: password,
        firstName : firstName,
        lastName: lastName
    });    

    const res = await axios.post("https://partyuberauth.herokuapp.com/auth/register", user, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    localStorage.setItem('token', res.data.token);
    return res;
}    

function getUser(token) {
    return axios.get("https://partyuberauth.herokuapp.com/auth/user", {
        headers: {
            'Authentication': `Bearer ${token}`
        }
    })
        .then(res => {
            return res;
        })
}

export const AuthService = {
    login,
    getUser,
    register
}