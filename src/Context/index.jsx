import { createContext, useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
   //hook para usar localStorage
   const localStorageHook = useLocalStorage()

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

  // User Information
  const [user, setUser] = useState(null)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  useEffect( () => {
    const localStorageUser = localStorageHook.readLocalStorage('user')
    const localStorageFlag = localStorageHook.readLocalStorage('isLogged')
    if (!localStorageUser) {
      if (localStorageFlag !== null){
        localStorageHook.saveLocalStorage('isLogged', false)
      }
    }
    if (localStorageUser) setUser(localStorageUser)
    if (localStorageFlag !== null) setIsLogged(localStorageFlag)
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

  //funciones para el manejo de inicio de sesión.
  //SinUp. Cuando creo un nuevo usuario.
  const signUpUser = (user) => {
    localStorageHook.saveLocalStorage('user', user)
    localStorageHook.saveLocalStorage('isLogged', true)
    setUser(user)
    setIsLogged(true)
  }
  // Log In, cuando el usuario esta creado (en el localStorage) pero se está fuera de la aplicación
  const logInUser = () => {
    if (user && !isLogged) {
      setIsLogged(true)
      localStorageHook.saveLocalStorage('isLogged', true)
    }
  }
  //LogOut. Cuando cierro sesión pero no borro los datos de la cuenta.
  const logOutUser = () => {
    if (user && isLogged) {
      setIsLogged(false)
      localStorageHook.saveLocalStorage('isLogged', false)
    }
  }

  return (
    <ShoppingCartContext.Provider value={{
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
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory,
      user, 
      isLogged,
      signUpUser, 
      logInUser, 
      logOutUser
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

