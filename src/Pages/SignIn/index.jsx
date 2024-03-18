import Layout from '../../Components/Layout'

function SignIn() {
  return (
    <Layout>
      <div className='absolute top-0 flex items-center justify-center w-full h-screen'>
        <form className='flex flex-col justify-around items-center p-3 gap-3 w-1/3 h-2/5'>
          <h1 className='font-semibold text-lg'>Welcome</h1>
          <p className='w-full'>
            <span>Your name:</span>
            <input type="text" placeholder='Complete name' className='rounded-md border border-black p-2 w-full'/>
          </p>
          <p className='w-full'>
            <span>Your email:</span>
            <input type="text" placeholder='E-mail' className='rounded-md border border-black p-2 w-full'/>
          </p>
          <p className='w-full'>
            <span>Your Password:</span>
            <input type="password" placeholder='Password' className='rounded-md border border-black p-2 w-full'/>
          </p>
            <button type='button' className='mt-5 font-semibold text-lg text-white bg-black rounded-lg w-full h-14 p-2'>Create</button>
        </form>
      </div>
    </Layout>
  )
}

export default SignIn