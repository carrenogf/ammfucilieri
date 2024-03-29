import {Link} from 'react-router-dom'
import {ContactForm} from "../components/contactForm"
import {imgUrls} from '../components/admin/fields'
import {useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export const HomeView = () =>{
  const {datos} = useContext(ThemeContext);

    if (datos!=null){
    return (
     
      <div>
      <div className="container">
      
      {/* {/* Titulo*/}
        <div className="row mt-5"><h1 className="text-center">{datos.tituloGeneral}</h1></div>
      {/* Presentación 1*/}
        <div className="row mt-5 d-flex presentacion1">
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={imgUrls.home1.url} alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div>
            <h2 className="h1">{datos.titulo1}</h2>
            <p>{datos.texto1}</p>
            </div>
          </div>
        </div>
      {/* Presentación 2*/}
        <div className="row mt-5 d-flex presentacion2">
          <div className="col-12 col-md-6">
            <h2 className="h1">{datos.titulo2}</h2>
            <p>{datos.texto2}</p>
          </div>
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={imgUrls.home2.url} alt="" />
          </div>
        </div>
      {/* Profesional matriculado*/}
        <div className="row bg-dark mt-5 text-center">
          <div className="col-12  text-light p-5">
            <h2><i className="fas fa-exclamation-circle"></i> Contrata a un Profesional Matriculado</h2>
            <p>Te aseguras de contar con alguien con conocimientos actualizados y cuya actividad está regulada 
              por la ley. Yo cuento con matricula activa en el Colegio de Graduados en Ciencias Económicas de Tucumán, 
              ¡di <strong>NO</strong> al ejercicio ilegal de la Profesión!</p>
              
          </div>
        </div>

      </div>

      {/* servicios y contacto*/}
      <div className="row mt-5 servicios_contacto" id="servicios_contacto"
      style={{ backgroundImage: `url(${imgUrls.home3.url})` }}>
        {/* servicios*/}
        <div className="col-lg-6 col-md-12">
          <div className="home__serviceTit"><h2>Servicios</h2></div>
          <div className="row d-flex justify-content-around home__serviceCard_cont">
            <Link to="/services" className="col-12 fcc home__serviceCard text-decoration-none text-dark">
              <h3>{datos.servicio1}</h3>
            </Link>
            <Link to="/services" className="col-12 fcc home__serviceCard text-decoration-none text-dark">
              <h3>{datos.servicio2}</h3>
            </Link>
            <Link to="/services" className="col-12 fcc home__serviceCard text-decoration-none text-dark">
              <h3>{datos.servicio3}</h3>
            </Link>
            <Link to="/services" className="col-12 fcc home__serviceCard text-decoration-none text-dark">
                <h3>{datos.servicio4}</h3>
            </Link>
          </div>
        </div>
      <ContactForm/>
      </div>
      </div>
    )}else{return("loading...")}
}