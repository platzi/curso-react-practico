import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ResponsiveNavbarLeft = () => {

    const context = useContext(ShoppingCartContext)

    return ReactDOM.createPortal (
        <div className='responsiveNavbar absolute bg-white'>
        <ul className='flex flex-col items-center gap-5 mt-6 font-semibold'>
            <li className='font-semibold text-lg'>
            <NavLink 
                className='font-bold text-xl'
                onClick={() => {
                    context.setSearchByCategory()
                    context.closeResponsiveNavbarLeft()
                    }
                }
            to='/'>
                Shopi
            </NavLink>
            </li>
            <li>
            <NavLink
                to='/'
                onClick={() => {
                    context.setSearchByCategory()
                    context.closeResponsiveNavbarLeft()
                    }
                }
                className={({ isActive }) =>
                isActive ? context.activeStyle : undefined
                }>
                All
            </NavLink>
            </li>
            <li>
            <NavLink
                to='/clothes'
                onClick={() => {
                    context.setSearchByCategory('clothes')
                    context.closeResponsiveNavbarLeft()
                    }
                }
                className={({ isActive }) =>
                isActive ? context.activeStyle : undefined
                }>
                Clothes
            </NavLink>
            </li>
            <li>
            <NavLink
                to='/electronics'
                onClick={() => {
                    context.setSearchByCategory('electronics')
                    context.closeResponsiveNavbarLeft()
                    }
                }
                className={({ isActive }) =>
                isActive ? context.activeStyle : undefined
                }>
                Electronics
            </NavLink>
            </li>
            <li>
            <NavLink
                to='/furnitures'
                onClick={() => {
                    context.setSearchByCategory('furnitures')
                    context.closeResponsiveNavbarLeft()
                    }
                }
                className={({ isActive }) =>
                isActive ? context.activeStyle : undefined
                }>
                Furnitures
            </NavLink>
            </li>
            <li>
            <NavLink
                to='/toys'
                onClick={() => {
                    context.setSearchByCategory('toys')
                    context.closeResponsiveNavbarLeft()
                    }
                }
                className={({ isActive }) =>
                isActive ? context.activeStyle : undefined
                }>
                Toys
            </NavLink>
            </li>
            <li>
            <NavLink
                to='/others'
                onClick={() => {
                    context.setSearchByCategory('others')
                    context.closeResponsiveNavbarLeft()
                    }
                }
                className={({ isActive }) =>
                isActive ? context.activeStyle : undefined
                }>
                Others
            </NavLink>
            </li>
        </ul>
        </div>,

        document.getElementById('rootResponsiveNavbarLeft')
    )
}

export { ResponsiveNavbarLeft }