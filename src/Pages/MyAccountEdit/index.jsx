import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout'
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../Context';

const MyAccountEdit = () => {

    const context = useContext(ShoppingCartContext)

    const [editName, setEditName] = useState('')
    const [editPassword, setEditPassword] = useState('')

    const saveChanges = () => {
        if (editName !== '' || editPassword !== '') {
            if (editName !== '') {
                context.loggedUser.name = editName;
            }
            if (editPassword !== '') {
                context.loggedUser.password = editPassword;
            }
            let users = JSON.parse(localStorage.getItem('USERS_V1'));
            let userIndex = users.findIndex(user => user.id === context.loggedUser.id);
    
            if (userIndex !== -1) {
                users[userIndex] = context.loggedUser;
            }
            localStorage.setItem('USERS_V1', JSON.stringify(users))
            localStorage.setItem('LOGGED_USER', JSON.stringify(context.loggedUser));
        }
    }

    return(
    <Layout>
        <form className='flex flex-col justify-between w-96 mt-4 gap-6'>
            <h1 className='flex justify-center text-lg font-semibold'>Edit Account</h1>
            <p className='flex flex-col gap-2'>
            <span>New Username&nbsp;:</span>
            <input
            defaultValue={context.loggedUser.name}
            onChange={(event) => setEditName(event.target.value)}
            className='font-semibold border border-black rounded-md h-9 p-2'
            ></input>
            </p>
            <p className='flex flex-col gap-2'>
            <span>New Password&nbsp;:</span>
            <input
            defaultValue={context.loggedUser.password}
            onChange={(event) => setEditPassword(event.target.value)}
            className='font-semibold border border-black rounded-md h-9 p-2'
            ></input>
            </p>
            <Link
            onClick={saveChanges}
            to='/my-account'
            type='button'
            className='flex justify-center items-center p-3 w-full h-14 rounded-md text-white bg-black font-semibold'>Save</Link>
        </form>
    </Layout>
    )
}

export default MyAccountEdit