import "./Footer.css"

export function Footer(){
    return(
        <>
            <footer>
                <div className="footer-2">
                    <form className="form">
                        <p>Contacto</p>
                        <input type="text" placeholder="Nombre" className="contacto"/>
                        <input type="text" placeholder="Email" className="contacto"/>
                        <input type="text" placeholder="Telefono" className="contacto"/>
                        <input type="text" placeholder="Hola! En que puedo ayudarte?" className="mensaje"/>
                    </form>
                </div>
                <div className="footer">
                    <div>
                        <p>Copyright © 2025 eCommerce.</p>
                        <p>Defensa de las y los consumidores. Para reclamos ingresá acá. </p>
                    </div>
                </div>
            </footer>
        </>
    )
}