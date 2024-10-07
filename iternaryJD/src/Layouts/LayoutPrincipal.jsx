import { Outlet } from "react-router-dom"
function LayoutPrincipal() {


  return (
    <>
      <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        <a href="/home" className="nav-link">
          <span className="link-text logo-text">My iternary</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>
      <li className="nav-item">
        <a href="/home" className="nav-link">
        <svg
  aria-hidden="true"
  focusable="false"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  className="svg-inline--fa fa-house fa-w-16 fa-9x"
>
  <g className="fa-group">
    <path
      fill="currentColor"
      d="M256 0L0 256h64v192h128V320h128v128h128V256h64z"
      className="fa-primary"
    ></path>
    <path
      fill="currentColor"
      d="M128 256h64v128h-64zm128 0h64v128h-64z"
      className="fa-secondary"
    ></path>
  </g>
</svg>

          <span className="link-text">Home</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="/cities" className="nav-link">
        <svg
  aria-hidden="true"
  focusable="false"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  className="svg-inline--fa fa-building fa-w-16 fa-9x"
>
  <g className="fa-group">
    <path
      fill="currentColor"
      d="M64 512h384a32 32 0 0 0 32-32V128H32v352a32 32 0 0 0 32 32zm64-384h64v64H128zm0 96h64v64H128zm0 96h64v64H128zm128-192h64v64h-64zm0 96h64v64h-64zm0 96h64v64h-64zm128-192h64v64h-64zm0 96h64v64h-64zm0 96h64v64h-64z"
      className="fa-primary"
    ></path>
    <path
      fill="currentColor"
      d="M0 128h512V0H0zm384 0V32h64v96zm0 0H128V32h256z"
      className="fa-secondary"
    ></path>
  </g>
</svg>
          <span className="link-text">Cities</span>
        </a>
      </li>

      
      {/* No logre que funcionara el cambio de tema */}
            <li className="nav-item" id="themeButton">
        <a href="#" className="nav-link">
          <svg
            className="theme-icon"
            id="lightIcon"
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="moon-stars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
          
          <span className="link-text">Themify</span>
        </a>
      </li>
    </ul>
  </nav>
 <Outlet></Outlet>
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

export {LayoutPrincipal}