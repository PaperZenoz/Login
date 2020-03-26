const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST'



const initialState = {

}



export const productListReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return {...state, productList: action.payload}
        default:
            return state
    }
}


