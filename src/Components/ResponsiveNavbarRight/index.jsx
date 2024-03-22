import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { NavLink }  from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

const ResponsiveNavbarRight = () => {

    const context = useContext(ShoppingCartContext)

    return ReactDOM.createPortal (
        <div className='responsiveNavbar absolute bg-white'>
        <ul className='flex flex-col items-center gap-5 mt-6 font-semibold'>
            <li className='text-black/60'>
                {context.loggedUser.email}
            </li>
            <li>
            <NavLink
                to='/my-orders'
                onClick={() => context.closeResponsiveNavbarRight()}
                className={({ isActive }) =>
                isActive ? context.activeStyle : undefined}>
                My Orders
            </NavLink>
            </li>
            
            <li>
            <NavLink
                to='/my-account'
                onClick={() => context.closeResponsiveNavbarRight()}
                className={({ isActive }) =>
                isActive ? context.activeStyle : undefined}>
                My Account
            </NavLink>
            </li>
            {
                (context.logout === false) ? (
                <NavLink
                    to='/sign-in'>
                    <button onClick={() => {
                        context.logoutTrueAndloggedInFalse()
                        context.closeResponsiveNavbarRight()
                        context.setEmail('')
                        context.setPassword('')
                    }}
                    >Log Out</button>
                    </NavLink>
                    ) : (
                    <li>
                <NavLink
                    to='/sign-in'
                    onClick={() => {
                        context.closeCheckoutSideMenu()
                        context.closeResponsiveNavbarRight()
                    }}
                    className={({ isActive }) =>
                    isActive ? context.activeStyle : undefined
                    }>
                    Sign In
                </NavLink>
                </li>
                )
            }
            </ul>
        </div>,

        document.getElementById('rootResponsiveNavbarRight')
    )
}

export { ResponsiveNavbarRight }