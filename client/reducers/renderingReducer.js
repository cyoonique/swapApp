import * as types from '../actions/actionTypes';

const initialState = { 
    loginDisplayTog: true,
    signupDisplayTog: false,
    feedDisplayTog: false,
    barterDisplayTog: false,
    itemsDisplayTog: false
}

const renderingReducer = ( state = initialState, action) => {
    switch (action.type) {

        case types.LOGIN_DISPLAY_TOGGLE: {
            let {loginDisplayTog} = state;
            loginDisplayTog = !loginDisplayTog;
            return {
                ...state,
                loginDisplayTog,
            }
        }

        case types.SIGNUP_DISPLAY_TOGGLE: {
            let {signupDisplayTog} = state;
            signupDisplayTog = !signupDisplayTog;
            return {
                ...state,
                signupDisplayTog,
            }
        }

        case types.FEED_DISPLAY_TOGGLE: {
            let {feedDisplayTog} = state;
            feedDisplayTog = !feedDisplayTog;
            return {
                ...state,
                feedDisplayTog,
            }
        }


        default: 
            return state;
    }
}

export default renderingReducer;