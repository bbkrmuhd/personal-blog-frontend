import { Navigate, useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";


const RequireAuth = ({ children }) => {
    const { currentUser} = useStateContext()
    const location = useLocation()


    if(!currentUser){
        return <Navigate  to='/login' state={{path: location.pathname}}/>
    }

    return children
    
} 

export default RequireAuth;