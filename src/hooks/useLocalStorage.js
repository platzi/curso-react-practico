
export const useLocalStorage = () => {
    const saveLocalStorage = (key, object) => {
        const value = JSON.stringify(object)
        localStorage.setItem(key, value)
    }

    const readLocalStorage = (key) => {
        const value = localStorage.getItem(key)
        return JSON.parse(value)
    }
    return { saveLocalStorage, readLocalStorage }

}