import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../Context'
import { useNavigate } from 'react-router-dom'


export const SignUp = () => {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const {signUpUser} = useContext(ShoppingCartContext)
    const navigate = useNavigate()

    const handleInputChange = event => {
        const target = event.target.name
        const value = event.target.value
        setNewUser({
          ...newUser, 
          [target]: value
        })
      }
    
      const handleSubmit = (event) => {
        event.preventDefault()
        signUpUser(newUser)
        navigate('/')
      }


    return (
        <div className="signUp-container flex flex-col w-80">
        <h2 className='font-bold mb-3 text-center text-lg'>Welcome</h2>
        <form action="">
          <div className="input-container flex flex-col mb-4">
            <label htmlFor="name" className='text-sm'>Your Name:</label>
            <input type="text" id='name' name='name' placeholder='John Doe' value={newUser.name} onChange={handleInputChange} className='py-2 px-4 border border-slate-900 rounded-lg outline-none'/>
          </div>
          <div className="input-container flex flex-col mb-4">
            <label htmlFor="email" className='text-sm'>Your Email</label>
            <input type="email" id='email' name='email' placeholder='johndoe@mail.com' value={newUser.email} onChange={handleInputChange} className='py-2 px-4 border border-slate-900 rounded-lg outline-none'/>
          </div>
          <div className="input-container flex flex-col mb-4">
            <label htmlFor="password">Your Password</label>
            <input type="password" id='password' name='password' value={newUser.password} onChange={handleInputChange} className='py-2 px-4 border border-slate-900 rounded-lg outline-none w-full'/>
          </div>
          <button onClick={handleSubmit} className='p-3 my-8 bg-slate-900 text-slate-100 rounded-lg w-full'>Create</button>
        </form>
      </div>
    )
}