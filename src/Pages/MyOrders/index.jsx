import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='grid gap-4 justify-items-center w-full max-w-xs'>
        <h1 className='font-medium text-xl'>My Orders</h1>
        <div className='grid gap-y-3 w-full'>
          {
            context.order.map((order, index) => (
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard
                  totalPrice={order.totalPrice}
                  totalProducts={order.totalProducts} />
              </Link>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default MyOrders