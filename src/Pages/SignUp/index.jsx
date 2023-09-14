import { useContext } from 'react';
import { Form, useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';
import { addUser, addSignOutStatus } from '../../utils/localStorage';
import Layout from '../../Components/Layout'

function SignUp() {
  const context = useContext(ShoppingCartContext)
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    if (name && email && password) {
      const userAdded = addUser({ name, email, password });
      addSignOutStatus(false);

      context.setUser(userAdded);
      context.setSignOutStatus(false);

      navigate('/')
    }
  }

  return (
    <Layout>
      <Form onSubmit={formHandler} className='grid gap-4 w-80'>
        <h1 className='text-center text-xl font-medium mb-2'>Welcome</h1>
        <div>
          <label className='block mb-1 text-sm font-light'>Your name: </label>
          <input 
            required
            type="text"
            name='name'
            placeholder='Peter'
            className='w-full px-4 py-2 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none' 
          />
        </div>
        <div>
          <label className='block mb-1 text-sm font-light'>Your email: </label>
          <input
            required
            type="email"
            name='email'
            placeholder='hi@helloworld.com'
            className='w-full px-4 py-2 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none'
          />
        </div>
        <div>
          <label className='block mb-1 text-sm font-light'>Your password: </label>
          <input
            required
            type="text"
            name='password'
            placeholder='******'
            className='w-full px-4 py-2 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none'
          />
        </div>
        <button className='py-3 rounded-md bg-black disabled:bg-black/40 text-white'>Create</button>
      </Form>
    </Layout>
  )
}

export default SignUp