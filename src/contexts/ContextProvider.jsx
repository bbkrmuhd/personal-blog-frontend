import { useState, createContext, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loadJSON } from "../services/LoadJSON";
import { saveJSON } from "../services/SaveJSON";

const StateContext = createContext()


export const ContextProvider= ({children}) => {
    const [currentUser, setCurrentUser] = useState(loadJSON('user') || null)
    const [active, setActive] = useState(false)

    const navigate = useNavigate()

    const login = async (inputs) => {
        const res = await fetch("http://127.0.0.1:5000/api/v1/login", {
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
        const res = await fetch("http://127.0.0.1:5000/api/v1/logout ", {
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