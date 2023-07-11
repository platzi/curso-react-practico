import { useContext, Fragment  } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ShoppingCartContext, UserContext } from '../../Context'
import './responsive.css'
const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const userContext = useContext(UserContext)
  const activeStyle = 'underline underline-offset-4'
  
  return (
    <nav className='flex bg-white justify-between items-center fixed z-10 top-0 w-full px-5 pt-5 px-8 text-sm font-light'>
      <ul id='left-navbar' className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
            Shopi
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
  
      <Menu as="div" id='left-navbar-responsive' className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 ">
            Shopi
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="flex items-center absolute w-full right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item className="block text-center p-2">
                <NavLink
                  to='/'
                  onClick={() => context.setSearchByCategory()}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  All
                </NavLink>
              </Menu.Item>
              <Menu.Item className="block text-center p-2">
                <NavLink
                  to='/clothes'
                  onClick={() => context.setSearchByCategory('clothes')}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Clothes
                </NavLink>
              </Menu.Item>
              <Menu.Item className="block text-center p-2">
                <NavLink
                  to='/electronics'
                  onClick={() => context.setSearchByCategory('electronics')}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Electronics
                </NavLink>
              </Menu.Item>
              <Menu.Item className="block text-center p-2">
                <NavLink
                  to='/furnitures'
                  onClick={() => context.setSearchByCategory('furnitures')}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Furnitures
                </NavLink>
              </Menu.Item>
              <Menu.Item className="block text-center p-2">
                <NavLink
                  to='/toys'
                  onClick={() => context.setSearchByCategory('toys')}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Toys
                </NavLink>
              </Menu.Item>
              <Menu.Item className="block text-center p-2">
                <NavLink
                  to='/others'
                  onClick={() => context.setSearchByCategory('others')}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Others
                </NavLink>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      
      {
        userContext.isLoggedIn && userContext.user? (  
        <>
          <ul id='right-navbar' className='flex items-center gap-3'>
            <li className='text-black/60'>
              {userContext.user.email}
            </li>
            <li>
              <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
                My Account
              </NavLink>
            </li>
            <li className='flex items-center'>
              <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
              <div>{context.cartProducts.length}</div>
            </li>
          </ul>
          <Menu as="div" id='right-navbar-responsive' className="relative inline-block text-right">
              <div>
                <Menu.Button className="text-black/60 inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 ">
                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {userContext.user.email}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="flex items-center absolute w-full right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
  <div className="py-1">
    <div>
      <Menu.Item>
        <div className="block text-center p-2">
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            My Orders
          </NavLink>
        </div>
      </Menu.Item>
    </div>
    <div>
      <Menu.Item>
        <div className="block text-center p-2">
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            My Account
          </NavLink>
        </div>
      </Menu.Item>
    </div>
    <div>
      <Menu.Item>
        <div className="flex items-center justify-center text-center p-2">
          <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
          <div>{context.cartProducts.length}</div>
        </div>
      </Menu.Item>
    </div>
  </div>
</Menu.Items>

              </Transition>
          </Menu>
        </>
        ) : (
        <ul className='flex items-center gap-3'>
          <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Sign In
            </NavLink>
          </li>
        </ul>
        )
      }
    </nav>
  )
}

export default Navbar