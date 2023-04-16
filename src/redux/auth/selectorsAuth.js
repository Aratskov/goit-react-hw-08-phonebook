export const getAuthStatus = state => state.auth.isLoggedIn;

export const getErrorStatus = state => Boolean(state.auth.error);

export const getName = state => state.auth.user.name