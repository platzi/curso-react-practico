import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

function MyAccount() {

  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <form className='responsiveMyAccount flex flex-col justify-between w-96 mt-4 gap-6 p-3'>
        <h1 className='flex justify-center text-lg font-semibold'>MyAccount</h1>
        <p>
          <span className='ml-2'>Username:&nbsp;</span>
          <span className='font-semibold'>&nbsp;{context.loggedUser.name}</span>
        </p>
        <p>
          <span className='ml-2'>Email:&nbsp;</span>
          <span className='font-semibold'>&nbsp;{context.loggedUser.email}</span>
        </p>
        <p>
          <span className='ml-2'>Password:&nbsp;</span>
          <span className='font-semibold'>&nbsp;{'*'.repeat(context.loggedUser.password.length)}</span>
        </p>
        <Link
        to='/my-account-edit'
        type='button'
        className='flex justify-center p-3 w-full rounded-md border border-black font-semibold'>Edit</Link>
      </form>
    </Layout>
  )
}

export default MyAccount