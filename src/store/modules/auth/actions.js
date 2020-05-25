export function signInRequest(username, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { username, password },
  };
}

export function signInSuccess(user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { user },
  };
}

export const signUpRequest = (username, password, confirmPassword) => ({
  type: '@auth/SIGN_UP_REQUEST',
  payload: { username, password, confirmPassword },
});

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export const signOutRequest = () => {
  return {
    type: '@auth/SIGN_OUT_REQUEST',
  };
};

export const signOutProceed = () => {
  return {
    type: '@auth/SIGN_OUT_PROCEED',
  };
};
