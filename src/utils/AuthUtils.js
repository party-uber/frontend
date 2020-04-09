import store from '../Store';

function isLoggedIn() {
    return store.getState().auth.isAuthenticated;
}

function isAdmin() {
    if(store.getState().auth.user) {
        return store.getState().auth.user.role === "ADMIN";
    }
}

export const AuthUtils = {
    isLoggedIn,
    isAdmin
}