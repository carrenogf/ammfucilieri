import {Link} from 'react-router-dom'
import {ContactForm} from "../components/contactForm"
import {imgUrls} from '../components/admin/fields'
export const HomeView = () =>{


  const textoEjemplo = "plemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como p"

    return (
      <div>
      <div className="container">
      {/* {/* Titulo*/}
        <div className="row mt-5"><h1 className="text-center">Macarena Fucilieri</h1></div>
      {/* Presentación 1*/}
        <div className="row mt-5 d-flex presentacion1">
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={imgUrls.home1.url} alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div>
            <h2 className="h1">Titulo 1</h2>
            <p>{textoEjemplo}</p>
            </div>
          </div>
        </div>
      {/* Presentación 2*/}
        <div className="row mt-5 d-flex presentacion2">
          <div className="col-12 col-md-6">
            <h2 className="h1">Titulo 2</h2>
            <p>{textoEjemplo}</p>
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
            <Link to="/" className="col-12 fcc home__serviceCard text-decoration-none text-dark">
              <h3>servicio_1</h3>
            </Link>
            <Link to="/" className="col-12 fcc home__serviceCard text-decoration-none text-dark">
              <h3>servicio_2</h3>
            </Link>
            <Link to="/" className="col-12 fcc home__serviceCard text-decoration-none text-dark">
              <h3>servicio_3</h3>
            </Link>
            <Link to="/" className="col-12 fcc home__serviceCard text-decoration-none text-dark">
                <h3>servicio_4</h3>
            </Link>
          </div>
        </div>
      <ContactForm/>
      </div>
      </div>
    )
}