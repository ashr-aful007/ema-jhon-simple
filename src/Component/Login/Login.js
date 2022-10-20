import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/UserContext'
import './Login.css'



function Login() {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'


  const handleSubmit = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result =>{
      const user = result.user
      form.reset();
      console.log(user)
      navigate(from, {replace: true})
    })
    .catch(error => console.log(error));
  }
  


  return (
    <div className='form-container'>
     <h2 className='form-title'>Login</h2>
     <form onSubmit={handleSubmit}>
     <div className="form-control">
          <label htmlFor='email'>Email</label>
          <input type="email" name='email' required/>
     </div>
     <div className="form-control">
          <label htmlFor='password'>Password</label>
          <input type="password" name='password' required/>
     </div>
     <input className='btn-submit' type='submit' value='Login'></input>
     </form>
     <p>New to ema jhon <Link to='/signup'>Create a New Accont</Link></p>
    </div>
  )
}

export default Login