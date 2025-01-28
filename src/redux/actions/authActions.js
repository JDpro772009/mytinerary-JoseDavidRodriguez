import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const setUser = createAction("setUser", (datos)=>{
    return {
        payload:datos,
    }
})




const login = createAsyncThunk("login", async({email,password}) => {
    console.log("Login");
    const credentials = {
        correo:email,
        contraseña:password
    }
   
        const response = await axios.post("https://mytinerary-back-josedavidrodriguez.onrender.com",credentials)

        console.log("Se proceso la solicitud");

    console.log("Login completado");

    window.location.href="http://localhost:5173/home?email="+credentials.correo+"&email="+response.data.user.correo+"&nombrePerfil="+response.data.user.nombre+"&fotoPerfil="+response.data.user.foto
  
    localStorage.setItem("token",response.data.token)
 
    
}) 

export {login,setUser};