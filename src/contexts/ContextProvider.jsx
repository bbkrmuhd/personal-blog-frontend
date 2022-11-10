import { useState, createContext, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loadJSON } from "../services/LoadJSON";
import { saveJSON } from "../services/SaveJSON";
import { config } from '../config/environment'

const StateContext = createContext()


export const ContextProvider= ({children}) => {
    const [currentUser, setCurrentUser] = useState(loadJSON('user') || null)
    const [active, setActive] = useState(false)

    const navigate = useNavigate()

    const login = async (inputs) => {
        const res = await fetch(`${config.base_url}login`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(inputs)})
            .then((result) => result.json())
            .then((data) => {
             setCurrentUser(data)
             data.is_admin ? 
              navigate("/sirri") : 
              navigate("/")

           })
             
    }

    const logout = async (inputs) => {
        const res = await fetch(`${config.base_url}logout`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(inputs)})
           .then((result) => result.json())
           .then((data) => {
             setCurrentUser(null)
           })
    }


    useEffect(() => {
    saveJSON('user', currentUser)
    }, [currentUser])


    return (<StateContext.Provider value={{currentUser, login, logout, active, setActive}}>
                {children}
            </StateContext.Provider>)
    

}

export const useStateContext = () => useContext(StateContext)