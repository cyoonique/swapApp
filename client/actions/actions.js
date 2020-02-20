import * as types from './actionTypes';

export const loginDisplayToggle = () => ({
    type: types.LOGIN_DISPLAY_TOGGLE,
});

export const signupDisplayToggle = () => ({
    type: types.SIGNUP_DISPLAY_TOGGLE,
});

export const feedDisplayToggle = () => ({
    type: types.FEED_DISPLAY_TOGGLE,
});

// export const isLoggedIn = () => ({
//     type: types.IS_LOGGED_IN,
// });

export const currentUser = () => ({
    type: types.CURRENT_USER,
});

export const addListingToggle = () => ({
    type: types.ADD_LISTING_TOGGLE,
});

export const userItemsDisplayToggle = () => ({
    type: types.USER_ITEMS_DISPLAY_TOGGLE,
});

export const barterDisplayToggle = () => ({
    type: types.BARTER_DISPLAY_TOGGLE,
});