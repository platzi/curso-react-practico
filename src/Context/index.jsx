import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0);

  //create account
  const createAccount = (name, email, password) => {
    const accountToLocalStorage = {
      name,
      email,
      password,
    };
    localStorage.setItem("account", JSON.stringify(accountToLocalStorage));
    setParseInfo(accountToLocalStorage);
  };

  //Verify Login
  const [login, setLogin] = useState(false);
  const [haveAccount, setHaveAccount] = useState(false);
  const [parseInfo, setParseInfo] = useState({});
  useEffect(() => {
    const localStorageSignStatus = localStorage.getItem("sign-out");
    const localStorageAccount = localStorage.getItem("account");

    if (localStorageSignStatus === null) {
      localStorage.setItem("sign-out", true);
      localStorage.setItem("account", "");
      setLogin(false);
    }
    if (localStorageAccount) {
      try {
        const parsedAccount = JSON.parse(localStorageAccount);
        setParseInfo(parsedAccount);
      } catch (error) {
        console.error("Error parsing account details:", error);
      }
    }
    if (localStorageAccount === null) {
      setLogin(false);
      setHaveAccount(false);
    }
    if (localStorageSignStatus === "false") {
      setLogin(true);
      setHaveAccount(true);
    }
    if (localStorageSignStatus === "true" && localStorageAccount !== null) {
      setLogin(false);
    }
  }, []);
  const signOut = () => {
    localStorage.removeItem("sign-out");
    localStorage.setItem("sign-out", true);
    setLogin(false);
  };
  const register = () => {
    setLogin(true);
    localStorage.removeItem("sign-out");
    localStorage.setItem("sign-out", false);
  };

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart · Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
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
        login,
        createAccount,
        parseInfo,
        setLogin,
        signOut,
        register,
        haveAccount,
        setHaveAccount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
