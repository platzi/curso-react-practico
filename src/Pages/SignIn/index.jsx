import Layout from '../../Components/Layout'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function SignIn() {

  const {activeStyle} = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='absolute top-0 flex items-center justify-center w-full h-screen'>
        <form className='flex flex-col justify-around items-center p-3 gap-3 w-1/3 h-2/5'>
          <h1 className='font-semibold text-lg'>Welcome</h1>
          <p className='w-full'>
            <input
            type='text'
            name='email'
            placeholder='E-mail'
            className='rounded-md border border-black p-2 w-full'
            />
          </p>
          <p className='w-full'>
            <input
            type='password'
            name='password'
            placeholder='Password'
            className='rounded-md border border-black p-2 w-full'
            />
            <span className='flex justify-center mt-2 text-sm font-light gap-1'>
              Do not you have an account?&nbsp;
              <Link className={`font-normal ${activeStyle}`} to='/sign-up'>Sign Up here</Link>
            </span>
          </p>
          <Link to='/' className='w-full'>
            <button
            type='button'
            className='mb-5 font-semibold text-lg text-white bg-black rounded-lg w-full h-14 p-2'
            >Log In</button>
            </Link>
        </form>
      </div>
    </Layout>
  )
}

export default SignIn