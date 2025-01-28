import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const setUser = createAction("setUser", (datos)=>{
    return {
        payload:datos,
    }
})




const signUp = createAsyncThunk("SignUp", async({email,contraseña,nombre,apellido,urlPhoto,pais}) => {
    console.log("SignUp");
    const credentials = {
        correo:email,
        contraseña:contraseña,
        nombre:nombre,
        apellido:apellido,
        foto:urlPhoto,
        pais:pais

    }
    
        const response = await axios.post("https://mytinerary-back-josedavidrodriguez.onrender.com/api/usuarios/crear",credentials)

        console.log("Se proceso la solicitud");
    console.log("Response",response.data);
    console.log("registro completado");

    window.location.href="http://localhost:5173/signIn"
    return response.data
   
    
}) 

export {signUp,setUser};