import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../../Components/Layout'
import {  UserContext } from '../../Context'

function MyAccount() {
  const userContext = useContext(UserContext)
  const logOut = () =>{
    userContext.setUser(null)
    userContext.setIsLoggedIn(false)
  }
  return (
    <Layout>
      <div className='flex flex-col text-center w-72'>
        <div className='py-2 font-medium text-xl'>  
          My Account
        </div>
        <div className='py-3'>
          <div className='text-left'><span className='opacity-50 '>Name: </span><span>{userContext.user.name}</span></div>
          <div className='text-left'><span className='opacity-50 '>Email: </span><span></span>{userContext.user.email}</div>
        </div>
        <div className='py-3 cursor-pointer rounded-lg border-2 border-black mb-3'>Edit</div>
        <NavLink to='/sign-in'>
          <div className='py-3 bg-black text-white cursor-pointer rounded-lg' onClick={logOut}>Log Out</div>
        </NavLink>
      </div>
    </Layout>
  )
}

export default MyAccount