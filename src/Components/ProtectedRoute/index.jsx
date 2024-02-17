import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () => {
    const { isLogged } = useContext(ShoppingCartContext)

    return (
        isLogged ? <Outlet /> : <Navigate replace to='/sign-in' />
    )
}
