import { connect } from 'react-redux'
import Login from './Login'
import { loginUser } from './store/auth'

const mapState = state => {
  return {
    auth: state.auth
  }
}

const mapDispatch = dispatch => {
  return {
    login: user => {
      dispatch(loginUser(user))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Login)
