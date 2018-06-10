import { connect } from 'react-redux'
import Signup from './Signup'
import { signupUser } from './store/auth'

const mapState = state => {
  return {
    auth: state.auth
  }
}

const mapDispatch = dispatch => {
  return {
    signup: user => {
      dispatch(signupUser(user))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Signup)
