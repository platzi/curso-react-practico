import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'

function SignIn() {
  return (
    <Layout>
      <div className='grid gap-4 w-80'>
        <h1 className='text-center text-xl font-medium mb-2'>Welcome</h1>
        <div className='text-sm font-light leading-6'>
          <p>Email: <span className='text-base font-normal'></span></p>
          <p>Password: <span className='text-base font-normal'></span></p>
        </div>
        <button className='py-3 rounded-md bg-black disabled:bg-black/40 text-white'>Log in</button>
        <Link to={"#"} className='mb-2 text-center text-xs font-light underline underline-offset-4'>Forgot my password</Link>
        <Link to={"/sign-up"} className='inline-block'>
          <button className='w-full py-3 border rounded-md border-black'>Sign up</button>
        </Link>
      </div>
    </Layout>
  )
}

export default SignIn