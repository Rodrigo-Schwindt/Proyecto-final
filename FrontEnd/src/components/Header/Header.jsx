import { Link } from "react-router-dom";
import "./Header.css"
import { Search } from "./search/Search"
import { FaShoppingCart, FaWhatsapp, FaStar, FaUser  } from "react-icons/fa";


export function Header(){
  return(
    <>
        <header id="header">
          <img src="logo.png" className="logo-header" />
          <div className="searcher-container">
            <Search/>
          </div>
          <div className="header-section">
            <div className="log-shop">
              <div>
                <FaUser style={{color: "skyblue", fontSize:"2rem"}} />
                <p>Entrá <br/>Registráte</p>
              </div>
              <div>
                <FaShoppingCart style={{color:"crimson", fontSize:"1.8rem"}} />
                <p>Carrito <br/>(0) <span>$0,00</span></p>
              </div>
            </div>
          </div>
        </header>
        <div className="header-section-2">
          <Link to="/">Tienda</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
    </>
  )
}
    
