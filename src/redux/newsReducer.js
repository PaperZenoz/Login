const SET_NEWS_LIST = 'SET_NEWS_LIST'



const initialState = {
    newsList: []
}



export const newsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_NEWS_LIST:
            return {...state, newsList: action.payload}
        default:
            return state
    }
}

export const setNewsList = payload => ({type: SET_NEWS_LIST, payload})


