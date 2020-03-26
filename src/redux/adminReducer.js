const HANDLE_UNVERIFIED_NEWS = 'HANDLE_UNVERIFIED_NEWS'



const initialState = {
    unverifiedNews: []
}



export const adminReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case HANDLE_UNVERIFIED_NEWS:
            return {...state, unverifiedNews: action.payload}
        default:
            return state
    }
}

export const setNewsList = payload => ({type: HANDLE_UNVERIFIED_NEWS, payload})


