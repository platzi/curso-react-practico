import CheckoutSideMenu from "../CheckoutSideMenu"
import Navbar from "../Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center mt-20'>
        {children}
      </div>
      <CheckoutSideMenu />
    </>
  )
}

export default Layout