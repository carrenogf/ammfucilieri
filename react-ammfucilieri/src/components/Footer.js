import { Link } from "react-router-dom";
import {useContext } from 'react'
import { ThemeContext } from "../Context/ThemeContext";
const Footer = ()=>{
    const {datos} = useContext(ThemeContext);
    if (datos!=null){
    return (
        <footer className="text-center text-lg-start bg-light text-muted mt-5">
        {/* Section: Social media  */}
        <section
            className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
            {/* Left  */}
            <div className="me-5 d-none d-lg-block">
              <span>{datos.tituloFooter}</span>
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
                    <Link className="text-reset" to="/"><i className="fa-solid fa-address-card"></i>{datos.tituloFooter}</Link>
                </h6>
                <p>{datos.textoFooter}</p>
                </div>
                {/* Grid column  */}

                {/* Grid column  */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links  */}
                <h6 className="text-uppercase fw-bold mb-4">Servicios</h6>
                <p><Link to="/services" className="text-reset">{datos.servicio1}</Link></p>
                <p><Link to="/services" className="text-reset">{datos.servicio2}</Link></p>
                <p><Link to="/services" className="text-reset">{datos.servicio3}</Link></p>
                <p><Link to="/services" className="text-reset">{datos.servicio4}</Link></p>
                </div>
                {/* Grid column  */}

                {/* Grid column  */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links  */}
                  <h6 className="text-uppercase fw-bold mb-4">Links de utilidad</h6>
                  {datos.ulink1 && datos.nombre_ulink1 ? <p><a href={datos.ulink1} className="text-reset" target="_blank">{datos.nombre_ulink1}</a></p>:""}
                  {datos.ulink2 && datos.nombre_ulink2 ? <p><a href={datos.ulink2} className="text-reset" target="_blank">{datos.nombre_ulink2}</a></p>:""}
                  {datos.ulink3 && datos.nombre_ulink3 ? <p><a href={datos.ulink3} className="text-reset" target="_blank">{datos.nombre_ulink3}</a></p>:""}
                  {datos.ulink4 && datos.nombre_ulink4 ? <p><a href={datos.ulink4} className="text-reset" target="_blank">{datos.nombre_ulink4}</a></p>:""}

                
                </div>
                {/* Grid column  */}

                {/* Grid column  */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links  */}
                <h6 className="text-uppercase fw-bold mb-4">
                    Contacto
                </h6>
                    {datos.direccion?<p><i className="fas fa-home me-3"></i>{datos.direccion}</p> : "" }
                    {datos.email?<p><i className="fas fa-envelope me-3"></i>{datos.email}</p> : "" }
                    {datos.telefono?<p><i className="fas fa-phone me-3"></i>{datos.telefono}</p> : "" }                    
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
    )}else{return("")}
}
export default Footer;