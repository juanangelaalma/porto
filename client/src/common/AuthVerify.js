import React from 'react'
import { withRouter } from 'react-router'
import jwt_decode from 'jwt-decode'

// for handle jwt token expiration
const AuthVerify = (props) => {
  props.history.listen(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if(user) {
      const decodedJwt = jwt_decode(user.token)
      // second * 1000 < milisecod
      if(decodedJwt.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }else {
      props.logOut()
    }
  })

  return <div></div>
}

export default withRouter(AuthVerify)