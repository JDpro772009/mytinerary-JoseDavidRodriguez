

function Footer(){
    
    return(
        <>
         <footer>
            <div className="contenedor-redes">
           <a href="#"> <img src="./src/Resources/1-removebg-preview.png" alt="" /></a>
            <a href="#"><img src="./src/Resources/2-removebg-preview.png" alt="" /></a>
            <a href="#"><img src="./src/Resources/3-removebg-preview.png" alt="" /></a>
            </div>
            <div className="contenedor-contactos">
                <div className="sub-contactos">
                    <ul><span className="font-bold ">Contact us</span>
                        <li>Phone number: +57 310-3536281</li>
                        <li>Gmail: mytinerary@gmail.com</li>
                    </ul>
                </div>
                <div className="sub-contactos">
                    <ul><span className="font-bold ">Help</span>
                        <li><a href="#" className="links-contactos">Customer service</a></li>
                        <li><a href="#" className="links-contactos">About us</a></li>
                        <li><a href="#" className="links-contactos">Terms and conditions</a></li>
                    </ul>
                </div>
                <div className="sub-contacto-parraf">
                    <p><span className="font-bold ">Countries present: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferterminais dolore
                    fugit dolorum illum tempora. Esse architecto ab hi.</p>
                      
                </div>
            </div>
         </footer>
        </>
    )
}

export {Footer}  