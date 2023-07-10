import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../../Components/Layout'
import {  UserContext } from '../../Context'

function SignIn() {
  const userContext = useContext(UserContext)
  const logIn = (event) => {
    const email =   document.getElementById('email').value;
    const password =   document.getElementById('password').value;
    const verifyUser =  userContext.registeredUsers.filter(registeredUser => registeredUser.email === email)
    const isEmailRegistered = userContext.registeredUsers == []? false: verifyUser.length > 0
    if(!isEmailRegistered){
      event.preventDefault();
      window.alert('Email not registered! Please Sign Up to continue.');
      return
    }
    if (verifyUser[0].password != password){
      event.preventDefault();
      window.alert('Wrong Password.');
      return
    } 
    userContext.setUser(verifyUser[0])
    userContext.setIsLoggedIn(true)
    localStorage.setItem("user", JSON.stringify(verifyUser[0]))
    localStorage.setItem("isLoggedIn", "true")
  }
  return (
    <Layout>
      <div className='flex flex-col text-center w-72'>
        <div className='py-2 font-medium text-xl'>  
          Welcome
        </div>
        <div className='text-left'>Your email:</div>
        <input id='email' className='rounded-lg border-2 border-black  p-2 text-sm mb-3' placeholder='hi@helloworld.com' required></input>
        <div className='text-left'>Your password:</div>
        <input id='password' className='rounded-lg border-2 border-black p-2 text-sm mb-3' type='password' placeholder='******' required></input>
        <NavLink to='/'>
          <div className='py-3 bg-black text-white cursor-pointer rounded-lg'  onClick={logIn}>Log in</div>
        </NavLink>
        <div className='py-4 cursor-pointer underline text-sm'>Forgot my password</div>
        <NavLink to='/sign-up'>
          <div className='py-3 cursor-pointer rounded-lg border-2 border-black'>Sign Up</div>
        </NavLink>
      </div>
    </Layout>
  )
}

export default SignIn