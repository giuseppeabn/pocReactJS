import React from 'react'

export const LoginScreen = ({history}) => {

  const handleOnClick = () => {
    history.replace('/marvel')
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleOnClick}>
        Login
      </button>
    </div>
  )
}
