const SET_UNVERIFIED_NEWS ='SET_UNVERIFIED_NEWS'
const REMOVE_NEWS = 'REMOVE_NEWS'



const initialState = {
    unverifiedNews: []
}



export const adminReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_UNVERIFIED_NEWS:
            return {...state, unverifiedNews: [...state.unverifiedNews, action.payload]}
        case REMOVE_NEWS:
            return {...state, unverifiedNews: action.payload}
        default:
            return state
    }
}

export const setUnverifiedNews = payload => ({type: SET_UNVERIFIED_NEWS, payload})
export const removeNews = payload => ({type: REMOVE_NEWS, payload})




