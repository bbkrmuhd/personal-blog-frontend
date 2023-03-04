import { useState, createContext, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { config } from '../config/environment'

const StateContext = createContext()


export const ContextProvider= ({children}) => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('user') || null)
    const [active, setActive] = useState(false)

    const navigate = useNavigate()

    const redirectPath = (data) => {
        return  data.is_admin ? "sirri" : '/'
    }

    const login = async (inputs) => {
        const res = await fetch(`${config.base_url}login`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(inputs)})
            .then((result) => result.json())
            .then((data) => {
             setCurrentUser(data)
             localStorage.setItem('user', JSON.stringify(data))
             navigate(redirectPath(data), { replace: true })

           })
             
    }

    const logout = async (inputs) => {
        await fetch(`${config.base_url}logout`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(inputs)})
           .then((result) => result.json())
           .then((data) => {
             setCurrentUser(null)
           })
    }


    useEffect(() => {
        localStorage.setItem('user', currentUser)
    }, [currentUser])


    return (<StateContext.Provider value={{currentUser, login, logout, active, setActive}}>
                {children}
            </StateContext.Provider>)
    

}

export const useStateContext = () => useContext(StateContext)