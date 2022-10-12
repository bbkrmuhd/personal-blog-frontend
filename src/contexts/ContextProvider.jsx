import { useState, createContext, useEffect } from "react";
import { LocalStorageService } from "../services/LocalStorageService";

export const AuthContext = createContext()


export const AuthContextProvider= ({children}) => {
    const [currentUser, setCurrentUser] = useState(LocalStorageService.loadJSON("user") || null)

    const login = async (inputs) => {
        const res = await fetch("http://127.0.0.1:5000/api/v1/login", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(inputs)})
            .then((result) => result.json())
            .then((data) => {

             setCurrentUser(data)
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

        LocalStorageService.saveJSON("user", currentUser)
    
    }, [currentUser])


    return (<AuthContext.Provider value={{currentUser, login, logout}}>
                {children}
            </AuthContext.Provider>)
    

}