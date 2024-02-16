import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import { SignUp } from '../../Components/SignUp'
import { useNavigate } from 'react-router-dom'

// Esta página sólo debería mostrarse si IsLogged is false. 
function SignIn() {
  const {user,  logInUser} = useContext(ShoppingCartContext)
  const [showSingup, setShowSignUp] = useState(false)
  const navigate = useNavigate()

  const handleLogInClick = () => {
    logInUser()  
    navigate('/')
  }

  const handleSignUpClick = () => {
    setShowSignUp(true)
  }

  return (
    <Layout>
      {
        showSingup ?  
        <SignUp />
        : 
        <div className='signIn_container flex flex-col w-80'>
          <h2 className='font-bold mb-3 text-center text-lg'>Welcome</h2>
          <div>
            <span className='text-sm text-slate-800'>Email: </span>
            <span className='font-semibold '>{user ? user.email : ''}</span>
          </div>
          <div>
            <span className='text-sm text-slate-800'>Password: </span>
            <span className='font-semibold '>{user ? '*'.repeat(user.password.length) : ''}</span>
          </div>
          <button className='p-3 my-3 bg-slate-900 disabled:bg-slate-100 disabled:border disabled:border-slate-400 text-slate-100 disabled:text-slate-500 rounded-lg' disabled={ user ? false : true} onClick={handleLogInClick}>Log In</button>
          <p className='text-xs text-center underline my-2 cursor-pointer'>forgot my password</p>
          <button className='p-3 my-3 bg-slate-900 disabled:bg-slate-100 disabled:border disabled:border-slate-400 text-slate-100 disabled:text-slate-500 rounded-lg' disabled={ user ? true : false } onClick={handleSignUpClick}>Sign Up</button>
        </div>
      }
    </Layout>
  )
}

export default SignIn