
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCities } from '../redux/citySlice.js';



function Main() {

let params = new URLSearchParams(window.location.search)
let token = params.get("token")
let email = params.get("email")
let nombrePerfil = params.get("nombrePerfil")
let fotoPerfil = params.get("fotoPerfil")

const dispatch = useDispatch()

const ciudades = useSelector((state=>state.cities.cities.response))



  useEffect(()=>{
    fetch("https://mytinerary-back-josedavidrodriguez.onrender.com/api/cities/all")
    .then((val) => val.json())
      .then((data) => {
        dispatch(addCities({cities:data}))
     
        
      });

  },[])
  
  let iterar = {
 ciudades1 : [],
 ciudades2 : [],
 ciudades3 : [],
 ciudades4 : []}


 
ciudades?.map(c=>{
   if(iterar.ciudades1.length < 4){
    iterar.ciudades1.push(c)
    
   }else if(iterar.ciudades2.length < 4){
    iterar.ciudades2.push(c)
   }else if(iterar.ciudades3.length < 4){
    iterar.ciudades3.push(c)
   }else{
    iterar.ciudades4.push(c)
   }
})
   
   

    const divRef = useRef(null);
    const [animacionEnCurso, setAnimacionEnCurso] = useState(false);

    const desplazar = (direccion) => {
        if (divRef.current && !animacionEnCurso) {
            const montoScroll = 700;
            const inicia = divRef.current.scrollLeft;
            const termina = inicia + (direccion === 'adelante' ? montoScroll : -montoScroll);
            const duracion = 500;
            let comienzaTiempo;

            const animacionScroll = (ctime) => {
                if (!comienzaTiempo) comienzaTiempo = ctime;
                const timeElapsed = ctime - comienzaTiempo;
                const progress = Math.min(timeElapsed / duracion, 1);
                divRef.current.scrollLeft = inicia + (termina - inicia) * progress;

                if (progress < 1) {
                    requestAnimationFrame(animacionScroll);
                } else {
                    setAnimacionEnCurso(false);
                }
            };

            setAnimacionEnCurso(true);
            requestAnimationFrame(animacionScroll);
        }
    };

    const atras = () => desplazar('atras');
    const adelante = () => desplazar('adelante');

    useEffect(() => {
        
        const interval = setInterval(() => {
            if(divRef.current.scrollLeft>=1890){

               divRef.current.scrollLeft = 0
            }else{
                adelante(); 
        
                
            }
            
        }, 5000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <>
            <main>
                <div className="titulo-carrusel">
                    <img src="./src/Resources/star-removebg-preview.png" alt="" />
                    <h3 className="text-2xl font-bold mt-7">Popular Mytineraries </h3>
                </div>
                <div className="carrusel-info flex">
                    <button className="slide-izq slides" onClick={atras} disabled={animacionEnCurso}>◀</button>
                    <div className="carrusel" ref={divRef}>
                        <div className='caja1-carrusel-m'>
                            {iterar.ciudades1.map((i) => (
                                <div key={i.nombre} className="link-click">
                                    {/* href={token||email||fotoPerfil||nombrePerfil?`/city?email=${email}&fotoPerfil=${foto}&nombrePerfil=${nombre}&token=${token}&nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}&pais=${i.pais}&divisa=${i.divisa}&id=${i._id}`:"/city?nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}&pais=${i.pais}&divisa=${i.divisa}&id=${i._id}"} */}
                                    <a href={token||email||fotoPerfil||nombrePerfil?`/city?email=${email}&fotoPerfil=${fotoPerfil}&nombrePerfil=${nombrePerfil}&token=${token}&nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}&pais=${i.pais}&divisa=${i.divisa}&id=${i._id}`:`/city?nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}&pais=${i.pais}&divisa=${i.divisa}&id=${i._id}`}>
                                     <h4 className="click absolute">Click here</h4>
                                     </a>
                                    <p>{i.nombre}</p>
                                    <img src={i.foto} alt={i.nombre} />
                                </div>
                            ))}
                        </div>
                        <div className='caja2-carrusel-m'>
                            {iterar.ciudades2.map((i) => (
                                <div key={i.nombre} className="link-click"><a href={token||email||fotoPerfil||nombrePerfil?`/city?email=${email}&fotoPerfil=${fotoPerfil}&nombrePerfil=${nombrePerfil}&token=${token}&nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}&pais=${i.pais}&divisa=${i.divisa}&id=${i._id}`:`/city?nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}&pais=${i.pais}&divisa=${i.divisa}&id=${i._id}`}>
                                <h4 className="click absolute">Click here</h4>
                                </a>
                                    <p>{i.nombre}</p>
                                    <a href={`/city?nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}`}><img src={i.foto} alt={i.nombre} /></a>
                                </div>
                            ))}
                        </div>
                        <div className='caja3-carrusel-m'>
                            {iterar.ciudades3.map((i) => (
                                <div key={i.nombre} className="link-click"><a href={token||email||fotoPerfil||nombrePerfil?`/city?email=${email}&fotoPerfil=${fotoPerfil}&nombrePerfil=${nombrePerfil}&token=${token}&nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}&pais=${i.pais}&divisa=${i.divisa}&id=${i._id}`:`/city?nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}&pais=${i.pais}&divisa=${i.divisa}&id=${i._id}`}>
                                <h4 className="click absolute">Click here</h4>
                                </a>
                                    <p>{i.nombre}</p>
                                    <a href={`/city?nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}`}><img src={i.foto} alt={i.nombre} /></a>
                                </div>
                            ))}
                        </div>
                        <div className='caja3-carrusel-m'>
                            {iterar.ciudades4.map((i) => (
                                <div key={i.nombre} className="link-click"><a href={token||email||fotoPerfil||nombrePerfil?`/city?email=${email}&fotoPerfil=${fotoPerfil}&nombrePerfil=${nombrePerfil}&token=${token}&nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}&pais=${i.pais}&divisa=${i.divisa}&id=${i._id}`:`/city?nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}&pais=${i.pais}&divisa=${i.divisa}&id=${i._id}`}>
                                <h4 className="click absolute">Click here</h4>
                                </a>
                                    <p>{i.nombre}</p>
                                    <a href={`/city?nombre=${i.nombre}&foto=${i.foto}&descp=${i.descripcion}`}><img src={i.foto} alt={i.nombre} /></a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="slide-der slides" onClick={adelante} disabled={animacionEnCurso}>▶</button>

                    <p className='info-iternarys'>
                        Discover a world of wonders in our carousel of cities! On our website,
                        we invite you to explore fascinating destinations that capture the essence
                        of each place. From the vibrant culture of cosmopolitan metropolises to
                        the charms of quaint villages, each city has a unique story to tell.
                        Swipe to get inspired and plan your next adventure. Your journey starts here!
                    </p>
                </div>
            </main>
        </>
    );
}

export { Main };
