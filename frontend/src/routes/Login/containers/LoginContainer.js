import { connect } from 'react-redux'
import { fetchCreds, refreshCreds } from '../modules/actions'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the login:   */

import Login from '../components/Login'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCreds: (username, password) => {
      dispatch(fetchCreds(username, password))
    },
    refreshCreds: (refresh_token) => {
      dispatch(refreshCreds(refresh_token))
    },
  }
}

const mapStateToProps = (state, ownProps) => ({
  creds_state: state.creds,
  location: state.location,
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const login = (state) => state.login
    const tripleCount = createSelector(login, (count) => count * 3)
    const mapStateToProps = (state) => ({
      login: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(Login)
