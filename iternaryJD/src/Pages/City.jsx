import { useState,useEffect } from "react"
import { SignUp } from "../Components/SignUp"
import { useAccordion } from "@material-tailwind/react"



function City() {
  let misKeys = window.location.search
  let urlParams = new URLSearchParams(misKeys)

  let titulo = urlParams.get("nombre")
  let foto = urlParams.get("foto")
  let descripcion = urlParams.get("descp")
  
  return (
    <>
     
      <main className="flex justify-center flex-wrap">
        <div className="caja-carta-ciudad">

          <a className="link-card-city relative" href="/cities">🡠</a>
          <img src="./src/Resources/avion-removebg-preview.png" alt="" class="avion-city"></img>

         <h4 className="titulo-card-city">{titulo}</h4>
         <img src={foto} alt={titulo} className="imagen-card-city" />
         <p className="descp-card-city">{descripcion}</p>

        </div>
      </main>
      
    </>
  )
}

export {City}