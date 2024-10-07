import React, { useRef, useState, useEffect } from 'react';

function Main() {
    const ciudades1 = [
        {
            nombre: "Chicago",
            image: "https://images.pexels.com/photos/1823680/pexels-photo-1823680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            nombre: "Tokyo",
            image: "https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            nombre: "New York",
            image: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            nombre: "San Francisco",
            image: "https://images.pexels.com/photos/196642/pexels-photo-196642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ];

    const ciudades2 = [
        {
            nombre: "Seattle",
            image: "https://images.pexels.com/photos/2539395/pexels-photo-2539395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            nombre: "Paris",
            image: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            nombre: "Estambul",
            image: "https://images.pexels.com/photos/23227975/pexels-photo-23227975/free-photo-of-ciudad-punto-de-referencia-noche-oscuro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            nombre: "Barcelona",
            image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ];

    const ciudades3 = [
        {
            nombre: "Queenstown",
            image: "https://images.pexels.com/photos/18439533/pexels-photo-18439533/free-photo-of-vista-aerea-de-casas-y-montanas-cubiertas-de-nieve.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            nombre: "Palermo",
            image: "https://images.pexels.com/photos/13849371/pexels-photo-13849371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            nombre: "Rio de Janeiro",
            image: "https://images.pexels.com/photos/28235675/pexels-photo-28235675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            nombre: "Sidney",
            image: "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ];

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
            if(divRef.current.scrollLeft>=1390){

               divRef.current.scrollLeft = 0
            }else{
                adelante(); 
                console.log(divRef.current.scrollLeft);
                
            }
            
        }, 5000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <>
            <main>
                <div className="titulo-carrusel">
                    <img src="./src/Resources/star-removebg-preview.png" alt="" />
                    <h3 className="text-2xl font-bold mt-7">Popular Mytineraries</h3>
                </div>
                <div className="carrusel-info flex">
                    <button className="slide-izq slides" onClick={atras} disabled={animacionEnCurso}>◀</button>
                    <div className="carrusel" ref={divRef}>
                        <div className='caja1-carrusel-m'>
                            {ciudades1.map((i) => (
                                <div key={i.nombre}>
                                    <p>{i.nombre}</p>
                                    <img src={i.image} alt={i.nombre} />
                                </div>
                            ))}
                        </div>
                        <div className='caja2-carrusel-m'>
                            {ciudades2.map((i) => (
                                <div key={i.nombre}>
                                    <p>{i.nombre}</p>
                                    <img src={i.image} alt={i.nombre} />
                                </div>
                            ))}
                        </div>
                        <div className='caja3-carrusel-m'>
                            {ciudades3.map((i) => (
                                <div key={i.nombre}>
                                    <p>{i.nombre}</p>
                                    <img src={i.image} alt={i.nombre} />
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
