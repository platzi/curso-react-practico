import Layout from '../../Components/Layout'

function MyAccount() {
  return (
    <Layout>
      <div className='flex flex-col text-center w-72'>
        <div className='py-2 font-medium text-xl'>  
          My Account
        </div>
        <div className='py-3'>
          <div className='text-left'><span className='opacity-50 '>Name: </span><span>test</span></div>
          <div className='text-left'><span className='opacity-50 '>Email: </span><span></span>test@test.com</div>
        </div>
        <div className='py-3 cursor-pointer rounded-lg border-2 border-black mb-3'>Edit</div>
        <div className='py-3 bg-black text-white cursor-pointer rounded-lg'>Log Out</div>
      </div>
    </Layout>
  )
}

export default MyAccount