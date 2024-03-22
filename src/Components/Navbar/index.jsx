import { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const location = useLocation()

  return (
    <nav className='navbar flex justify-between items-center fixed z-10 bg-white shadow-lg shadow-gray-800/50 top-0 w-full py-5 px-6 text-sm font-light'>

      <ul className='flex items-center gap-3'>
        <li className='bars3Icon w-7 h-7 cursor-pointer'>
          <Bars3Icon
            onClick={() => {
              context.toggleResponsiveNavbarLeft()
              context.closeResponsiveNavbarRight()
              }}/>
        </li>
        <li className='navbarLeft font-semibold text-lg'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => 
              isActive ? `${context.activeStyle} navbarLeft` : `navbarLeft`
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) => 
              isActive ? `${context.activeStyle} navbarLeft` : `navbarLeft`
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) => 
              isActive ? `${context.activeStyle} navbarLeft` : `navbarLeft`
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) => 
              isActive ? `${context.activeStyle} navbarLeft` : `navbarLeft`
            }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) => 
              isActive ? `${context.activeStyle} navbarLeft` : `navbarLeft`
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) => 
              isActive ? `${context.activeStyle} navbarLeft` : `navbarLeft`
            }>
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>

        {
          context.logout === false
          ?
          (() => {
            
            return (
              <li className='text-black/60 navbarRight'>
                {context.loggedUser.email}
              </li>
            )
          })()
          :
          null
        }

        <li>
        {(context.logout === false) ? (
          <NavLink
          to='/my-orders'
          className={`${({ isActive }) =>
            isActive ? context.activeStyle : undefined
        } navbarRight`}>
          My Orders
        </NavLink>
        ) : (undefined)}
        </li>
        
        <li>
        {(context.logout === false) ? (
          <NavLink
          to='/my-account'
          className={`${({ isActive }) =>
          isActive ? context.activeStyle : undefined
      } navbarRight`}>
          My Account
        </NavLink>
        ) : (undefined)}
        </li>
        
        {
          (context.logout === false) ? (
            <Link to='/sign-in'>
            <button
            className='navbarRight'
            onClick={() => {
              context.logoutTrueAndloggedInFalse()
              context.setEmail('')
              context.setPassword('')
            }}
            >Log Out</button>
            </Link>
          ) : (
            <li>
            <NavLink
              to='/sign-in'
              onClick={context.closeCheckoutSideMenu}
              className={({ isActive }) =>
              isActive ? context.activeStyle : undefined
              }>
              Sign In
            </NavLink>
          </li>
          )
        }

        {location.pathname !== '/sign-in' && location.pathname !== '/sign-up' ? (
          <li
          className='flex items-center cursor-pointer'
          onClick={context.toggleCheckoutSideMenu}>
            <ShoppingBagIcon
            onClick={() => context.closeProductDetail()}
            className='h-6 w-6 text-black'></ShoppingBagIcon>
            <div>{context.cartProducts.length}</div>
          </li>
        ) : (
          null
        )}

        {
          (context.logout === false) ? (
            <UserCircleIcon
            onClick={() => {
              context.toggleResponsiveNavbarRight()
              context.closeResponsiveNavbarLeft()}}
            className='userCricleIcon w-7 h-7 cursor-pointer' />
          ) : (
            null
          )
        }

      </ul>

    </nav>
  )
}

export default Navbar