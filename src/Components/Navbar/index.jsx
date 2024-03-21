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

  const logoutTrueAndloggedInFalse = () => {
    const updatedUsers = context.users.map(user => {
      return { ...user, loggedIn: false }
    })
    localStorage.setItem('USERS_V1', JSON.stringify(updatedUsers))
    localStorage.setItem('LOGGED_USER', JSON.stringify({}))
    context.closeCheckoutSideMenu()
    context.setLogout(true)
  }

  return (
    <nav className='navbar flex justify-between items-center fixed z-10 bg-white shadow-lg shadow-gray-800/50 top-0 w-full py-5 px-6 text-sm font-light'>

      <ul className='flex items-center gap-3'>
        <li className='navbarLeft font-semibold text-lg'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li className='bars3Icon w-7 h-7'>
          <Bars3Icon />
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={`${({ isActive }) =>
              isActive ? context.activeStyle : undefined
            }, navbarLeft`}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={`${({ isActive }) =>
              isActive ? context.activeStyle : undefined
            }, navbarLeft`}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={`${({ isActive }) =>
              isActive ? context.activeStyle : undefined
            }, navbarLeft`}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furnitures')}
            className={`${({ isActive }) =>
              isActive ? context.activeStyle : undefined
            }, navbarLeft`}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={`${({ isActive }) =>
              isActive ? context.activeStyle : undefined
            }, navbarLeft`}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={`${({ isActive }) =>
              isActive ? context.activeStyle : undefined
            }, navbarLeft`}>
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
            onClick={() => logoutTrueAndloggedInFalse()}
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
            <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
            <div>{context.cartProducts.length}</div>
          </li>
        ) : (
          null
        )}

        {
          (context.logout === false) ? (
            <UserCircleIcon className='userCricleIcon w-7 h-7' />
          ) : (
            null
          )
        }

      </ul>

    </nav>
  )
}

export default Navbar