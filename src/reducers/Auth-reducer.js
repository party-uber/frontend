const initialState = {
    token: null,
    isAuthenticated: null,
    user: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            window.sessionStorage.setItem('token', action.payload.token);
            return state = {
                token: action.payload.token,
                isAuthenticated: true,
                user: action.payload.user
            }
        case 'LOGIN_FAIL':            
            return state = {
                token: null,
                isAuthenticated: false,
                user: null
            }
        case 'LOGOUT':
        default:                        
            return state = {
                token: null,
                isAuthenticated: false,
                user: null
            }
    }
}

export default authReducer;