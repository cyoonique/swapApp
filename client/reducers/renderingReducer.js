import * as types from '../actions/actionTypes';

const initialState = { 
    loginDisplayTog: true,
    signupDisplayTog: false,
    feedDisplayTog: true, 
    addListingTog: false,
    userItemsTog: false,
    barterDisplayTog: false,
    userItemsDisplayTog: false,
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
            let {feedDisplayTog, addListingTog, barterDisplayTog, userItemsDisplayTog} = state;
            feedDisplayTog = true;
            addListingTog = false;
            barterDisplayTog = false;
            userItemsDisplayTog = false;
            return {
                ...state,
                feedDisplayTog,
                userItemsDisplayTog,
                barterDisplayTog,
                addListingTog,
            }
        }

        case types.ADD_LISTING_TOGGLE: {
            let {addListingTog, feedDisplayTog, barterDisplayTog, userItemsDisplayTog} = state;
            addListingTog = true;
            feedDisplayTog = false;
            userItemsDisplayTog = false;
            barterDisplayTog = false;
            return {
                ...state,
                addListingTog,
                feedDisplayTog,
                barterDisplayTog,
                userItemsDisplayTog,
            }
        }

        case types.USER_ITEMS_DISPLAY_TOGGLE: {
            let { barterDisplayTog, userItemsDisplayTog, addListingTog, feedDisplayTog} = state;;
            userItemsDisplayTog = true;
            barterDisplayTog = false;
            addListingTog = false;
            feedDisplayTog = false;
            return {
                ...state,
                barterDisplayTog,
                userItemsDisplayTog,
                addListingTog,
                feedDisplayTog,
            }
        }

        case types.BARTER_DISPLAY_TOGGLE: {
            let { barterDisplayTog, userItemsDisplayTog, addListingTog, feedDisplayTog} = state;
            barterDisplayTog = true;
            userItemsDisplayTog = false;
            addListingTog = false;
            feedDisplayTog = false;
            return {
                ...state,
                userItemsDisplayTog,
                addListingTog,
                feedDisplayTog,
            }
        }


        default: 
            return state;
    }
}

export default renderingReducer;