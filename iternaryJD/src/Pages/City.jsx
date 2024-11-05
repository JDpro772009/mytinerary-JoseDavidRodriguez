import { useState,useEffect } from "react"
import { SignUp } from "../Components/SignUp"
import { useAccordion } from "@material-tailwind/react"
import { useDispatch, useSelector } from 'react-redux';
import { addCities } from '../redux/citySlice.js';
import { set } from "mongoose";


function City() {
  let misKeys = window.location.search
  let urlParams = new URLSearchParams(misKeys)

  let id = urlParams.get("id")
  const [verMas, setVerMas] = useState("no-ver")
  let titulo = urlParams.get("nombre")
  let foto = urlParams.get("foto")
  const [ciudad, setCiudad] = useState([])//estos no los logre acomodar con redux ;C
  let descripcion = urlParams.get("descp")
  let paiss = urlParams.get("pais")
  let divisas = urlParams.get("divisa")

 
  
  const dispatch = useDispatch()

  let ciudades= useSelector((state=>state.cities.cities.response))

  useEffect(()=>{
    fetch("http://localhost:2020/api/cities/all")
    .then((val) => val.json())
      .then((data) => {
        dispatch(addCities({cities:data}))
        
        
      });
  
  },[])

  useEffect(() => {
    if (ciudades) {
      const ciudadSeleccionada = ciudades.find((e) => e._id === id);
      setCiudad(ciudadSeleccionada || {});
    }
  }, [ciudades, id]);
  console.log(ciudad);
  
  
  return (
    <>
     
      <main className="flex justify-center flex-wrap relative">
      
      <img src={foto} alt={titulo} className="imagen-card-city" />
        <div className="caja-carta-ciudad">

          <a className="link-card-city relative" href="/cities">🡠</a>
          <img src="./src/Resources/avion-removebg-preview.png" alt="" class="avion-city"></img>
          <div className="contenido">
            
         <h4 className="titulo-card-city">{titulo}</h4>
         
         <p className="descp-card-city">{descripcion}</p>
          </div>
          <div className="datos-esp">
            
        <a  className="esp-link">
        <svg
  aria-hidden="true"
  focusable="false"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 256"
  className="svg-inline--fa fa-bill fa-w-16 fa-9x"
>
  <rect width="512" height="256" rx="20" ry="20" fill="#44fc5d" />

 
  <rect x="20" y="20" width="472" height="216" rx="15" ry="15" fill="none" stroke="#168024" stroke-width="5"/>

  <g className="fa-group">

    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dy=".3em"
      fill="#2C7A7B"
      font-size="200"
      font-weight="bold"
    >
      $
    </text>

    <rect x="0" y="96" width="512" height="64" fill="#168024" opacity="0.1"/>
  </g>
</svg>

           <p>Moneda: {divisas}</p>
        </a>
        <a  className="esp-link">
        <svg
  aria-hidden="true"
  focusable="false"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 128 128"
  className="svg-inline--fa fa-flag fa-w-16 fa-9x"
>
  <rect x="10" y="10" width="6" height="108" fill="#6D4C41" />

  <rect x="16" y="10" width="90" height="50" fill="#d42828" />
 
</svg>
           <p>Pais: {paiss}</p>
        </a>
       
          </div>
        </div>
        <div className="iternarios">
        <h2 className="text-2xl font-bold mt-7 text-center">Iternarys</h2>
        
        {
        ciudad.iternario?<Iternary VerMas={verMas} actVer={setVerMas} imagen={ciudad.iternario?.foto[0]} duracion={ciudad.iternario?.duracion} nombre={ciudad.iternario?.nombre} hast={ciudad.iternario?.hashtags} imagen2={ciudad.iternario?.foto[1]} precio={ciudad.iternario?.precio}></Iternary>:<NoIternarios></NoIternarios>
           
        
        
        }
        </div>
      </main>
      
    </>
  )
}
function NoIternarios(){
return(
  <>
  <div>
    <img src="./src/Resources/png-removebg-preview.png" className="imgNotFound"></img>
    <h2 className="text-2xl font-bold mt-7 text-center">Sorry, we dont found itineraries...</h2>
  </div>
  </>
)
}
function Iternary({VerMas, actVer, imagen, duracion, nombre, hast,imagen2, precio}) {

  
  return(
    <>
    <div className={`click-escena ${VerMas} relative`}>
         
         <button className="cerrar-iternary" onClick={()=>{aparecer(VerMas,actVer)}}>
         <svg aria-label="Cerrar" class="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
         
        
   
         </button>
         <Iternary2 imagen={imagen} nombre={nombre} hast={hast} imagen2={imagen2}></Iternary2>
         </div>
      <div className="iternary">
        <div className="perfil">
         <img src={imagen} alt="" />
         <p className="font-bold">{nombre}</p>
         
        </div>
        <div className="hast relative">
        <img src={imagen2} alt="" />
        <div className="hastachs">
           {
            hast?.map(t=><p>{t}</p>)
           }
           
           
        </div>
        </div>
        
        <div className="datos">
          <p className="font-bold">Tittle of viaje</p>
          <div>
            <div className="billetes">
              {
                precio?.map(p=><p>{p}</p>)
              }
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32">
<path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 15 8 L 15 17 L 22 17 L 22 15 L 17 15 L 17 8 Z" fill="white"></path>
</svg>
            <p>{duracion} minutes</p>
          </div>
        </div>
        <p className="descp">Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Minus odit tempore 
          fugit reprehenderit sint velit harum, 
          qui quidem ipsum! Voluptate quisquam natus sed, esse recusandae a quaerat facilis dolores molestias.</p>
        <div className="interaccion">
        <button  className="iter-link">
       
        <svg aria-label="Me gusta" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Me gusta</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>

        <p>0 Likes</p>
        </button>
        <button className="iter-link" onClick={()=>{aparecer(VerMas,actVer)}}>
        <svg aria-label="Comentar" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comentar</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
        <p>View more</p>
        </button>
        </div>
      </div>
      
    </>
  )
}
function Iternary2({imagen,nombre,hast, imagen2}) {
  return(
    <>
      <div className="iternary2 relative">
        <div className="perfil2">
         <img src={imagen} alt="" />
         <p className="font-bold">{nombre}</p>
         
        </div>
        <div className="hast2 relative">
        <img src={imagen2} alt="" />
        <div className="hastachs">
        {
            hast?.map(t=><p>{t}</p>)
           }
        </div>
        </div>
        <div className="interaccion2">
        <button  className="iter-link">
       
        <svg aria-label="Me gusta" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Me gusta</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>

        <p>Like</p>
        </button>
        <button className="iter-link">
        <svg aria-label="Comentar" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comentar</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
        <p>View more</p>
        </button>
        </div>
        <div className="actividades">
          <p className="font-bold">Activities Under Construccion</p>
        </div>
        <div className="comentarios">
          <p className="font-bold">Comments Under Construccion</p>
        </div>
      </div>
      
    </>
  )
}
function aparecer(VerMas,actVer) {
  switch(VerMas){
    case "ver":
      actVer("no-ver")
      console.log("nose ve");
      
      break
    case "no-ver":
      actVer("ver")
      console.log("se ve");
      break
  }
}

export {City}