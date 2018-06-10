import { connect } from 'react-redux'
import Login from './Login'
import { loginUser, signupUser } from './store/auth'

const mapState = state => {
  return {
    auth: state.auth
  }
}

const mapDispatch = dispatch => {
  return {
    login: () => {
      dispatch(loginUser())
    },
    signup: () => {
      dispatch(signupUser())
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Login)
