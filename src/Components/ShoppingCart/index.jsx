import { useContext } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const ShoppingCart = () => {

    const context = useContext(ShoppingCartContext)

    const openCheckoutSideMenu = () => {
        context.openCheckout()
        context.closeProductDetail()
    }

    return (

        <div className='flex relative items-center gap-0.5'
             onClick={() => openCheckoutSideMenu()}>
            <ShoppingBagIcon className='h-6 w-6 fill-none stroke-black cursor-poit'/>
            <div className='flex absolute justify-center items-center left-3.5 bottom-3.5
                     w-4 h-4 bg-black text-xs text-white rounded-full'>
                    {context.cartProducts.length}
            </div>
        </div>
    )
}

export default ShoppingCart
