import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length === 0 ||
      context.openResponsiveNavbarLeft === true ||
      context.openResponsiveNavbarRight === true) {
      return (
        <div>There are no products available</div>

      )
    } else {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4 mt-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder='Search a product'
        className=' widthInput rounded-lg border border-black w-80 p-4 mb-9 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />

      <div className='home w-full max-w-screen-lg'>
        {renderView()}
      </div>
      
      <ProductDetail />
    </Layout>
  )
}

export default Home