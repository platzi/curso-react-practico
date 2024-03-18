import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'

function SignIn() {

  const {userData, setUserData, users, saveUsers} = useContext(ShoppingCartContext)

  const getUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  }

  const addUser = () => {
    const newArray = [...users]
    newArray.push({
        id: uuidv4(),
        ...userData,
    })
    saveUsers(newArray);
}; console.log(users)

  return (
    <Layout>
      <div className='absolute top-0 flex items-center justify-center w-full h-screen'>
        <form className='flex flex-col justify-around items-center p-3 gap-3 w-1/3 h-2/5'>
          <h1 className='font-semibold text-lg'>Welcome</h1>
          <p className='w-full'>
            <span>Your name:</span>
            <input
            type='text'
            name='name'
            placeholder='Complete name'
            className='rounded-md border border-black p-2 w-full'
            onChange={getUserData}/>
          </p>
          <p className='w-full'>
            <span>Your email:</span>
            <input
            type='text'
            name='email'
            placeholder='E-mail'
            className='rounded-md border border-black p-2 w-full'
            onChange={getUserData}/>
          </p>
          <p className='w-full'>
            <span>Your Password:</span>
            <input
            type='password'
            name='password'
            placeholder='Password'
            className='rounded-md border border-black p-2 w-full'
            onChange={getUserData}/>
          </p>
          <Link to='/' className='w-full'>
            <button
            type='button'
            className='mt-5 font-semibold text-lg text-white bg-black rounded-lg w-full h-14 p-2'
            onClick={() => addUser()}
            >Create</button>
            </Link>
        </form>
      </div>
    </Layout>
  )
}

export default SignIn