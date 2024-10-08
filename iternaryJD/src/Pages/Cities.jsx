import { useState } from "react"
import { SignUp } from "../Components/SignUp"
const ciudades = [{
  nombre:"Chicago",
  image:"https://images.pexels.com/photos/1823680/pexels-photo-1823680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},{
  nombre:"Tokyo",
  image:"https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},{
  nombre:"New York",
  image:"https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},{
  nombre:"San Francisco",
  image:"https://images.pexels.com/photos/196642/pexels-photo-196642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},{
  nombre:"Seattle",
  image:"https://images.pexels.com/photos/2539395/pexels-photo-2539395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},{
  nombre:"Paris",
  image:"https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},{
  nombre:"Estambul",
  image:"https://images.pexels.com/photos/23227975/pexels-photo-23227975/free-photo-of-ciudad-punto-de-referencia-noche-oscuro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},{
  nombre:"Barcelona",
  image:"https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},{
  nombre:"Queenstown",
  image:"https://images.pexels.com/photos/18439533/pexels-photo-18439533/free-photo-of-vista-aerea-de-casas-y-montanas-cubiertas-de-nieve.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},{
  nombre:"Palermo",
  image:"https://images.pexels.com/photos/13849371/pexels-photo-13849371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},{
  nombre:"Rio de Janeiro",
  image:"https://images.pexels.com/photos/28235675/pexels-photo-28235675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
},{
  nombre:"Sidney",
  image:"https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}]
function Cities() {
  
  let [buscar,setBuscar] = useState("")
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
        <ColocarCartas ciudades={ciudades} texto={buscar}></ColocarCartas>
        </div>
      </main>
      
    </>
  )
}
function ColocarCartas({ciudades, texto}){
  let datos=ciudades.filter(c=>{
    let filt1=c.nombre.toLowerCase().includes(texto.toLowerCase())
    return filt1})
  if(datos.length!=0){
  return(
    <>
    {
      datos.map(e=><Cartas nombre={e.nombre} imagen={e.image}></Cartas>)
    }
    </>
  )}else{
    return(<>
        <p>Sorry, we couldn't find what you were looking for.</p>

    </>)
  }
  
}
function Cartas({nombre, imagen}){
return(
  <>
  <div className="cartas-ciudades relative">
                        <p>{nombre}</p>
                    <img src={imagen} alt={nombre} />
                    </div>
                    </>
)
}
export {Cities}