export const AUTH_SET_USER = "AUTH/SET_USER";
export const AUTH_REMOVE_USER = "AUTH/REMOVE_USER";

const INITIAL_STATE = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : {};

const Auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SET_USER:
      return { ...state, ...action.payload };
    case AUTH_REMOVE_USER:
      return {};
    default:
      return state;
  }
};

export default Auth;
