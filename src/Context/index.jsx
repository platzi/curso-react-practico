import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

  // NavBar underline color categories
  const activeStyle = 'underline underline-offset-4'

  // Modals whit React Portals
  const [openResponsiveNavbarLeft, setOpenResponsiveNavbarLeft] = useState(false)
  const toggleResponsiveNavbarLeft = () => setOpenResponsiveNavbarLeft(!openResponsiveNavbarLeft)
  const closeResponsiveNavbarLeft = () => setOpenResponsiveNavbarLeft(false)
  const [openResponsiveNavbarRight, setOpenResponsiveNavbarRight] = useState(false)
  const toggleResponsiveNavbarRight = () => setOpenResponsiveNavbarRight(!openResponsiveNavbarRight)
  const closeResponsiveNavbarRight = () => setOpenResponsiveNavbarRight(false)

  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0)

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  const toggleCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart · Order
  const [order, setOrder] = useState([])

  // Get products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  // All about Local Storage
  const [userData, setUserData] = useState({})
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("USERS_V1")) || [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [logout, setLogout] = useState(() => {
    const storedLogout = localStorage.getItem("LOGOUT");
    return storedLogout ? JSON.parse(storedLogout) : true;
  })
  
  useEffect(() => {
    localStorage.setItem("LOGOUT", JSON.stringify(logout));
  }, [logout])

  const saveUsers = (newArray) => {
    localStorage.setItem("USERS_V1", JSON.stringify(newArray));
    setUsers(newArray);
}

  const loggedUser = JSON.parse(localStorage.getItem('LOGGED_USER'))

  const logoutTrueAndloggedInFalse = () => {
    const updatedUsers = users.map(user => {
      return { ...user, loggedIn: false }
    })
    localStorage.setItem('USERS_V1', JSON.stringify(updatedUsers))
    localStorage.setItem('LOGGED_USER', JSON.stringify({}))
    closeCheckoutSideMenu()
    setLogout(true)
  }



  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

  return (
    <ShoppingCartContext.Provider value={{
      activeStyle,
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      toggleCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory,
      userData,
      setUserData,
      users,
      saveUsers,
      email,
      setEmail,
      password,
      setPassword,
      logout,
      setLogout,
      loggedUser,
      openResponsiveNavbarLeft,
      toggleResponsiveNavbarLeft,
      closeResponsiveNavbarLeft,
      openResponsiveNavbarRight,
      toggleResponsiveNavbarRight,
      closeResponsiveNavbarRight,
      logoutTrueAndloggedInFalse,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

