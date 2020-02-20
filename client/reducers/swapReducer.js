import * as types from '../actions/actionTypes';

const initialState = { 
    isLoggedIn: false,
    currentUser: " ",
}

const swapReducer = ( state = initialState, action) => {
    switch (action.type) {

        // case types.IS_LOGGED_IN: {
        //     let {isLoggedIn} = state;
        //     isLoggedIn = true;
        //     return {
        //         ...state,
        //         isLoggedIn,
        //     }
        // }

        case types.CURRENT_USER: {
            let { isLoggedIn, currentUser } = state;
            
            isLoggedIn = true;
            return {
                ...state,
                isLoggedIn,
            }
        }

        default:
            return state;
    }
}