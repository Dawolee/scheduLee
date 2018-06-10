import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Router } from 'react-router-dom'
import history from './history'
import { Provider } from 'react-redux'
import store from './store/index'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
