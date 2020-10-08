import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const Login = (props) => {

  const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

  return (
    <form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          autoFocus
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <p className="errorMsg">{emailError}</p>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          autoFocus
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          required value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p className="errorMsg">{passwordError}</p>
      <div className="btnContainer">
        {hasAccount ? (
          <>
            <button className="btn-primary" onClick={handleLogin}>Sign in</button>
            <br />
            <br />
            <h5>Don't have an account? <span className="text-danger bg-light" onClick={() => setHasAccount(!hasAccount)}>Sign up</span></h5>
          </>
        ) : (
            <>
              <button className="btn-primary" onClick={handleSignup}>Sign up</button>
              <br />
              <br />
              <h5>Already have an account? <span className="text-danger bg-light" onClick={() => setHasAccount(!hasAccount)}>Sign in</span></h5>
            </>
          )}
      </div>
    </form>
  )
}
export default Login