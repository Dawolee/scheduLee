const LOG_IN = 'LOG_IN'
const SIGN_UP = 'SIGN_UP'

export const loginUser = () => {
  return {
    type: LOG_IN
  }
}

export const signupUser = () => {
  return {
    type: SIGN_UP
  }
}

export default function(state = {}, action) {
  switch (action.type) {
    case LOG_IN:
      return 'login'
    case SIGN_UP:
      return 'signup'
    default:
      return state
  }
}
