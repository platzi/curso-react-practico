import { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <nav className='flex justify-between items-center fixed z-10 bg-white shadow-lg shadow-gray-800/50 top-0 w-full py-5 px-6 text-sm font-light'>

      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? context.activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? context.activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? context.activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) =>
              isActive ? context.activeStyle : undefined
            }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? context.activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? context.activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>

        <li className='text-black/60'>
        {(context.logout === false) ? (context.users[0]?.email) : (undefined)}
        </li>

        <li>
        {(context.logout === false) ? (
          <NavLink
          to='/my-orders'
          className={({ isActive }) =>
            isActive ? context.activeStyle : undefined
          }>
          My Orders
        </NavLink>
        ) : (undefined)}
        </li>
        
        <li>
        {(context.logout === false) ? (
          <NavLink
          to='/my-account'
          className={({ isActive }) =>
            isActive ? context.activeStyle : undefined
          }>
          My Account
        </NavLink>
        ) : (undefined)}
        </li>
        
        {
          (context.logout === false) ? (
            <Link to='/sign-in'>
            <button
            onClick={() => context.setLogout(true)}
            >Log Out</button>
            </Link>
          ) : (
            <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) =>
              isActive ? context.activeStyle : undefined
              }>
              Sign In
            </NavLink>
          </li>
          )
        }

        {useLocation().pathname !== '/sign-in' && useLocation().pathname !== '/sign-up' ? (
          <li
          className='flex items-center cursor-pointer'
          onClick={() => context.toggleCheckoutSideMenu()}>
            <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
            <div>{context.cartProducts.length}</div>
          </li>
        ) : (
          null
        )}

      </ul>

    </nav>
  )
}

export default Navbar