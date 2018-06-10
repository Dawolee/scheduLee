const LOG_IN = 'LOG_IN'
const SIGN_UP = 'SIGN_UP'
const LOG_OUT = 'LOG_OUT'

export const loginUser = user => {
  return {
    type: LOG_IN,
    user
  }
}

export const signupUser = user => {
  return {
    type: SIGN_UP,
    user
  }
}

export const logoutUser = () => {
  return {
    type: LOG_OUT
  }
}

export default function(state = {}, action) {
  switch (action.type) {
    case LOG_IN:
      return action.user
    case SIGN_UP:
      return action.user
    case LOG_OUT:
      return null
    default:
      return state
  }
}
