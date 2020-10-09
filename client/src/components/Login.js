import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const Login = (props) => {
  const { handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;
// console.log('login re renders!!!')

const [login, setLogin] = useState({
  email: '',
  password: ''
})

const handleTyping = (e) => {
  // console.log('we r typing!!', e.target.name)
  setLogin({...login, [e.target.name]: e.target.value})
}

const handleSubmitLogin = (e) => {
  // console.log('just hit the handle submit!!', login)
  handleLogin(e, login.email, login.password)
}

const handleSubmitSignup = (e) => {
  // console.log('just hit the handle submit!!', login)
  handleSignup(e, login.email, login.password)
}
// console.log('login state!!in the login component', login)

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
          //autoFocus
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
          name="email"
         // value={email}
          onChange = {handleTyping}
    
          />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <p className="errorMsg">{emailError}</p>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          // autoFocus
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          required 
          //value={password}
          onChange={handleTyping}
        />
      </div>
      <p className="errorMsg">{passwordError}</p>
      <div className="btnContainer">
        {hasAccount ? (
          <>
            <button className="btn-primary" onClick={handleSubmitLogin}>Sign in</button>
            <br />
            <br />
            <h5>Don't have an account? <span className="text-danger bg-light" onClick={ () => {setHasAccount(!hasAccount)}}>Sign up</span></h5>
          </>
        ) : (
            <>
              <button className="btn-primary" onClick={handleSubmitSignup}>Sign up</button>
              <br />
              <br />
              <h5>Already have an account? <span className="text-danger bg-light" onClick={ () => {setHasAccount(!hasAccount)}}>Sign in</span></h5>
            </>
          )}
      </div>
    </form>
  )
}
export default Login