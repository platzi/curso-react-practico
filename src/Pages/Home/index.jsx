import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div className='col-span-full text-center'>We don't have anything :(</div>
      )
    }
  }

  return (
    <Layout>
      <div className='flex flex-col items-center gap-y-4 w-full max-w-screen-lg'>
        <h1 className=' font-medium text-xl'>Exclusive Products</h1>
        <input
          type="text"
          placeholder='Search a product'
          className='w-full max-w-xs rounded-lg border border-black p-4 focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value)} />
        <div className='grid grid-cols-[repeat(auto-fill,225px)] justify-center gap-4 w-full'>
          {renderView()}
        </div>
        <ProductDetail />
      </div>
    </Layout>
  )
}

export default Home