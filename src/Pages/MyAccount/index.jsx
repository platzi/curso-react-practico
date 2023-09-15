import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'

function MyAccount() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='grid gap-6 w-full max-w-xs'>
        <h1 className='text-center text-xl font-medium'>My account</h1>
        <div className='text-sm font-light leading-6'>
          <p>Name: <span className='text-base font-normal'>{context.user?.name}</span></p>
          <p>Email: <span className='text-base font-normal'>{context.user?.email}</span></p>
        </div>
        <Link to={"./edit"} className='inline-block'>
          <button className='w-full py-3 border rounded-md border-black'>Edit</button>
        </Link>
      </div>
    </Layout>
  )
}

export default MyAccount