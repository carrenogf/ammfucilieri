import { Link } from "react-router-dom";
const Footer = ()=>{
    return (
        <footer className="text-center text-lg-start bg-light text-muted mt-5">
        {/* Section: Social media  */}
        <section
            className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
            {/* Left  */}
            <div className="me-5 d-none d-lg-block">
              <span>Macarena Fucilieri</span>
            </div>
            {/* Left  */}

            {/* Right redes  */}
            <div className="d-flex flex-row justify-content-between redes-container">
              <Link to="/" className="text-reset"><i className="fab fa-facebook-f"></i></Link>
              <Link to="/" className="text-reset"><i className="fab fa-twitter"></i></Link>
              <Link to="/" className="text-reset"><i className="fab fa-google"></i></Link>
              <Link to="/" className="text-reset"><i className="fab fa-instagram"></i></Link>
              <Link to="/" className="text-reset"><i className="fab fa-linkedin"></i></Link>
              <Link to="/" className="text-reset"><i className="fab fa-github"></i></Link>
            </div>
            {/* Right  */}
        </section>
        {/* Section: Social media  */}

        {/* Section: Links   */}
        <section className="">
            <div className="container text-center text-md-start mt-5">
            {/* Grid row  */}
            <div className="row mt-3">
                {/* Grid column  */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content  */}
                <h6 className="text-uppercase fw-bold mb-4">
                    <Link className="text-reset" to="/"><i className="fa-solid fa-address-card"></i>Macarena Fucilieri</Link>
                </h6>
                <p>texto</p>
                </div>
                {/* Grid column  */}

                {/* Grid column  */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links  */}
                <h6 className="text-uppercase fw-bold mb-4">Servicios</h6>
                <p><Link to="/" className="text-reset">servicio_1</Link></p>
                <p><Link to="/" className="text-reset">servicio_2</Link></p>
                <p><Link to="/" className="text-reset">servicio_3</Link></p>
                <p><Link to="/" className="text-reset">servicio_4</Link></p>
                </div>
                {/* Grid column  */}

                {/* Grid column  */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links  */}
                  <h6 className="text-uppercase fw-bold mb-4">Links de utilidad</h6>
                  <p><Link to="/" className="text-reset" target="_blank">link_1_nombre</Link></p>
                  <p><Link to="/" className="text-reset" target="_blank">link_2_nombre</Link></p>
                  <p><Link to="/" className="text-reset" target="_blank">link_3_nombre</Link></p>
                  <p><Link to="/" className="text-reset" target="_blank">link_4_nombre</Link></p>
                
                </div>
                {/* Grid column  */}

                {/* Grid column  */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links  */}
                <h6 className="text-uppercase fw-bold mb-4">
                    Contacto
                </h6>
                    <p><i className="fas fa-home me-3"></i>direccion</p>
                    <p><i className="fas fa-envelope me-3"></i>email</p>
                    <p><i className="fas fa-phone me-3"></i>telefono</p>                     
                </div>
                {/* Grid column  */}
            </div>
            {/* Grid row  */}
            </div>
        </section>
        {/* Section: Links   */}

        {/* Copyright  */}
        <div className="text-center p-4" >
            © año Copyright: 
            <Link className="text-reset fw-bold" to="/">Macarena Fucilieri</Link>
        </div>
        {/* Copyright  */}
        </footer>
    )
}
export default Footer;