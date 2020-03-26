const SET_LOGIN = 'SET_LOGIN'



const initialState = {
    logIn: null
}



export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, logIn: action.payload}
        default:
            return state
    }
}

export const setLogIn = payload => ({type: SET_LOGIN, payload})


