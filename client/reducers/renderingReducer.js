import * as types from '../actions/actionTypes';

const initialState = { 
    loginDisplayTog: true,
    swapDisplayTog: false,
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

        default: 
            return state;
    }
}

export default renderingReducer;