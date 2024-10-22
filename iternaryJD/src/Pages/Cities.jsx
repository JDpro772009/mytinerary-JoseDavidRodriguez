import { useState,useEffect } from "react"
import { SignUp } from "../Components/SignUp"
import { useAccordion } from "@material-tailwind/react"



function Cities() {

  let [buscar,setBuscar] = useState("")
  let [ciudades,setCiudades] = useState([])

  useEffect(()=>{
    fetch("http://localhost:2020/api/cities/all")
    .then((val) => val.json())
      .then((data) => {
      
        
        setCiudades(data.response||[])
        console.log(data);
        
      });
  },[])

  function colocarTexto(texto){
    setBuscar(texto)
    console.log(buscar);
    
  }
  
  return (
    <>
      <header>
      <img src="https://images.pexels.com/photos/28277492/pexels-photo-28277492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="fotoHeader"></img>

<div className="caja-header-flex">
<img src="./src/Resources/Estrellas.png" alt="" className="absolute -top-20 w-60 right-60"/>
<img src="./src/Resources/avion-removebg-preview.png" alt="" className="img-avion1"/>
<SignUp></SignUp>
<div className="sub-caja-header1">
<h1 className="text-5xl font-bold titu text-center">Explore your next city</h1>
<p className="text-center">"Cities are the pulse of life, where every street tells a story and every corner holds a dream."</p>
      </div>

    
<img src="./src/Resources/avion2-removebg-preview.png" alt="" className="img-avion2"/>
<img src="./src/Resources/diseñoPuntos.png" alt="" className="absolute -left-48 -bottom-56"/>

</div>
      </header>
      <main className="flex justify-center flex-wrap">
        <div>
          <label for="buscar-ciudades" className="mr-2 font-bold text-xl">Cities:</label>
          <input type="text" id="buscar-ciudades" value={buscar}  onChange={e=>colocarTexto(e.target.value)}/>
        </div>
        <div className="ciudades justify-center">
        <ColocarCartas ciudades={ciudades} texto={buscar} ></ColocarCartas>
        </div>
      </main>
      
    </>
  )
}
function ColocarCartas({ciudades, texto}){
  let datos=ciudades.filter(c=>{
    // let filt1=c.nombre.toLowerCase().includes(texto.toLowerCase())
    let filt1=texto.toLowerCase()
    let filt2=c.nombre.toLowerCase()
    
    return filt2.startsWith(filt1)
    
   })
  if(datos.length!=0){
  return(
    <>
    {
      datos.map(e=><Cartas nombre={e.nombre} foto={e.foto} descripcion={e.descripcion}></Cartas>)
    }
    </>
  )}else{
    return(<>
        <p>Sorry, we couldn't find what you were looking for.</p>

    </>)
  }
  
}
function Cartas({nombre, foto, descripcion}){
return(
  <>
  <div className="cartas-ciudades relative">
                        
                        <p>{nombre}</p>
                        <a href={`/city?nombre=${nombre}&foto=${foto}&descp=${descripcion}`}
                        className="link-click">
                        <h4 className="click absolute">Click here</h4>
                        <img src={foto} alt={nombre} className="hover-img"/>
                        </a>
                    
                    </div>
                    </>
)
}
export {Cities}