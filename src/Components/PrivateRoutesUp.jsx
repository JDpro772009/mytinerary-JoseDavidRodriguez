import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

function PrivateRouteUp({children}) {

    const token = localStorage.getItem("token")
    console.log(token);
    
    if(token){
        
        return <Navigate to="/home" replace></Navigate>
    }
    return children
}


export default PrivateRouteUp;