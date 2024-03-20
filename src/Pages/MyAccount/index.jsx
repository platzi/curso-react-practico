import { useContext } from 'react';
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'

function MyAccount() {

  const { users } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <form className='flex flex-col justify-between w-1/3 mt-4 gap-6'>
        <h1 className='flex justify-center text-lg font-semibold'>MyAccount</h1>
        <p className='flex'>
          <span>Username :</span>
          <span className='font-semibold'>&nbsp;{users[0]?.name}</span>
        </p>
        <p className='flex'>
          <span>Email :</span>
          <span className='font-semibold'>&nbsp;{users[0]?.email}</span>
        </p>
        <p className='flex'>
          <span>Password :</span>
          <span className='font-semibold'>&nbsp;{users[0]?.password}</span>
        </p>
        <button type='button' className='flex justify-center p-3 w-full rounded-md border border-black font-semibold'>Edit</button>
      </form>
    </Layout>
  )
}

export default MyAccount