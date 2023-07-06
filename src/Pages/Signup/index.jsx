import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../../Components/Layout'
import {  UserContext } from '../../Context'


function SignUp() {
  const userContext = useContext(UserContext)
  const createUser = (event) => {
    const name =   document.getElementById('name').value;
    const email =   document.getElementById('email').value;
    const password =   document.getElementById('password').value;
    const verifyUser =  userContext.registeredUsers.filter(registeredUser => registeredUser.email === email)
    const isEmailRegistered = userContext.registeredUsers == []? false: verifyUser.length > 0
    if(isEmailRegistered){
      event.preventDefault();
      window.alert('Email already registered! Use another address.');
      return
    }
    if(name===''){
      event.preventDefault();
      window.alert('Name required.');
      return
    }
    if(email===''){
      event.preventDefault();
      window.alert('Email required.');
      return
    }
    if(password===''){
      event.preventDefault();
      window.alert('Password required.');
      return
    }
    const newUser = {
      'name': name,
      'email': email,
      'password': password
    }
    userContext.setUser(newUser)
    userContext.setIsLoggedIn(true)
    userContext.setRegisteredUsers([...userContext.registeredUsers, newUser])
  }
  return (
    <Layout>
      <div className='flex flex-col text-center w-72'>
        <div className='py-2 font-medium text-xl'>  
          Welcome
        </div>
        <div className='text-left'>Your name:</div>
        <input id='name' className='rounded-lg border-2 border-black p-2 text-sm mb-3' placeholder='Peter' required></input>
        <div className='text-left'>Your email:</div>
        <input id='email' className='rounded-lg border-2 border-black  p-2 text-sm mb-3' placeholder='hi@helloworld.com' required></input>
        <div className='text-left'>Your password:</div>
        <input id='password' className='rounded-lg border-2 border-black p-2 text-sm mb-3' type='password' placeholder='******' required></input>
        <NavLink to='/'>
        <div onClick={createUser} className='py-3 bg-black text-white cursor-pointer rounded-lg mt-2'>Create</div>
        </NavLink>
      </div>
    </Layout>
  )
}

export default SignUp