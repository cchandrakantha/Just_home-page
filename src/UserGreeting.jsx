import React from 'react'

 function UserGreeting(props) {
  return (
    props.isLoggedIn ? <h3>Welcome {props.username}</h3> : <h3>Please login to continue</h3>
  )
}
export default UserGreeting;