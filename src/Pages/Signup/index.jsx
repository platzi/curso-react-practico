import Layout from '../../Components/Layout'

function SignUp() {
  return (
    <Layout>
      <div className='flex flex-col text-center w-72'>
        <div className='py-2 font-medium text-xl'>  
          Welcome
        </div>
        <div className='text-left'>Your name:</div>
        <input className='rounded-lg border-2 border-black p-2 text-sm mb-3' placeholder='Peter'></input>
        <div className='text-left'>Your email:</div>
        <input className='rounded-lg border-2 border-black  p-2 text-sm mb-3' placeholder='hi@helloworld.com'></input>
        <div className='text-left'>Your password:</div>
        <input className='rounded-lg border-2 border-black p-2 text-sm mb-3' type='password' placeholder='******'></input>
        <div className='py-3 bg-black text-white cursor-pointer rounded-lg mt-2'>Create</div>
      </div>
    </Layout>
  )
}

export default SignUp