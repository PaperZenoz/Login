const SET_LOGIN = 'SET_LOGIN'
const SET_IS_POPUP = 'SET_IS_POPUP'



const initialState = {
    logIn: null,
    isPopup: false
}



export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, logIn: action.payload}
        case SET_IS_POPUP:
            return {...state, isPopup: action.payload}
        default:
            return state
    }
}

export const setLogIn = payload => ({type: SET_LOGIN, payload})
export const setIsPopup = payload => ({type: SET_IS_POPUP, payload})



