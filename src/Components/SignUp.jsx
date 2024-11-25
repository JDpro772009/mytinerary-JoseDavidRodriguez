
import { useState,useEffect } from "react"


function SignUp() {

const token = localStorage.getItem("token")
function cerrarSesion(){
  let params = new URLSearchParams(window.location.search)
  params.delete("token")
  params.delete("nombrePerfil")
  params.delete("fotoPerfil")
  params.delete("email")
  const newUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);
  localStorage.removeItem("token")
  location.reload()
}
function Perfil() {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
  
    const fetchPerfil = async () => {
      let params = new URLSearchParams(window.location.search);
      let email = params.get("email");
      let nombrePerfil = params.get("nombrePerfil")
      let fotoPerfil = params.get("fotoPerfil")

      try {
        if(email&&nombrePerfil&&fotoPerfil){
         let data = {
          response:[{
            email:email,
            nombre:nombrePerfil,
            foto:fotoPerfil
          }]
         }
         setPerfil(data.response)
        
        }else{
          const response = await fetch(`http://localhost:2020/api/usuarios/${email}`);
          const data = await response.json();
  
          setPerfil(data.response); 
          console.log(data.response);
        }
        
      } catch (error) {
        console.error("Error al obtener el perfil:", error);
      }
    };
    fetchPerfil();
  }, []); 

  useEffect(() => {
    console.log(perfil);  
  }, [perfil]); 

  return (
    <div className='perf'>
      {perfil && perfil.length > 0 ? (
        <>
          <img src={perfil[0].foto} alt="foto de perfil" className='fotoPerfil'/>
          <a href="/perfil" className='font-bold text-lg linkPerfil'>{perfil[0].nombre}</a>
        </>
      ) : (
        <p className='font-bold text-base'>Cargando perfil...</p>
      )}
    </div>
  );
}
function Sesion({token}){
  let params = new URLSearchParams(window.location.search);
  let email = params.get("email");
  if(!token && !email){
    return(<>
    <img src="./src/Resources/sigin-removebg-preview.png" alt="" className="icono-sign-in"/>
    <a href="/signIn" >Sign Up</a>
    </>)
  }else{
    return(<>  
    <Perfil></Perfil>
    </>)
  }
}
    return (
      <>
      <div className="iniciar-sesion">
<Sesion token={token}></Sesion>
{token && <button className="signOut" onClick={cerrarSesion}>Sign Out</button>}
</div>
      </>
    )
  }
  
  export {SignUp}