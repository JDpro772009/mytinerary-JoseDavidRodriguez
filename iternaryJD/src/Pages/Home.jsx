
import { Main } from '../Components/Main'
import { Button } from "@material-tailwind/react";




function Home() {

  return (
    <>
      
      <header>
            <img src="https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="fotoHeader"></img>

            <div className="caja-header-flex">
            <img src="./src/Resources/avion-removebg-preview.png" alt="" className="img-avion1"/>
            <div className="iniciar-sesion">
            
                <img src="./src/Resources/sigin-removebg-preview.png" alt="" className="icono-sign-in"/>
                <a href="youtube.com" >Sign In</a>
            </div>
            <div className="sub-caja-header1">
            <h1 className="text-5xl font-bold titu">My Tinerary</h1>
            <p>Find your <span className='text-cyan-600'>perfect</span> trip, designed by insiders who know and love their <span className='text-cyan-600'>cities!</span><br />Explore your next city on the<span className='text-cyan-600'> button</span></p>
                  <a href="/cities" className="w-36">
        <Button variant="gradient" className="boton-redirect">Cities</Button>
      </a>
                  </div>

                  <div className="sub-caja-header2">
            <img className="imagenes-header imagen1" src="https://images.pexels.com/photos/28164260/pexels-photo-28164260/free-photo-of-estambul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Estambul" />
            <img className="imagenes-header imagen2" src="https://images.pexels.com/photos/28288105/pexels-photo-28288105/free-photo-of-ciudad-edificios-chicago-rio-chicago.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Chicago" />
            <img className="imagenes-header imagen3" src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ciudad 3" />
            </div> 
            <img src="./src/Resources/avion2-removebg-preview.png" alt="" className="img-avion2"/>
      </div>
        </header>
      <Main></Main>
      
    </>
  )
}

export {Home}