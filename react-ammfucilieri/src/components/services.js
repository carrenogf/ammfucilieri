import Img1 from "../assets/img/services/calc1.jpg"
import Img2 from "../assets/img/services/calc2.jpg"
import Img3 from "../assets/img/services/dolar.jpg"
import Img4 from "../assets/img/services/chartUp.jpg"
export const Services = () =>{
  return (
    <div class="container">

      <h1 class="text-center mt-5 mb-5">Mis Servicios</h1>
      <div id="carouselServicios" class="carousel slide carousel-fade" data-ride="carousel" >
        {/* indicadores */}
        <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselServicios" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselServicios" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselServicios" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselServicios" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        {/* slides */}
          <div class="carousel-inner container-fluid">
              {/*activo*/}
              <div class="carousel-item active">
                <img class="d-block w-100" src={Img1} alt=""/>
                <div class="carousel-item-dark"></div>
                <div class="servicio carousel-caption d-flex flex-column justify-content-center h-100">
                  <h2 class="servicio__titulo">servicio.nombre1</h2>
                  <p class="servicio__subtitulo">servicio.subtitulo1</p>
                  <p class="servicio__descripcion">servicio.descripcion1</p>
              </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={Img2} alt=""/>
                <div class="carousel-item-dark"></div>
                <div class="servicio carousel-caption d-flex flex-column justify-content-center h-100">
                  <h2 class="servicio__titulo">servicio.nombre2</h2>
                  <p class="servicio__subtitulo">servicio.subtitulo2</p>
                  <p class="servicio__descripcion">servicio.descripcion2</p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={Img3} alt=""/>
                <div class="carousel-item-dark"></div>
                <div class="servicio carousel-caption d-flex flex-column justify-content-center h-100">
                  <h2 class="servicio__titulo">servicio.nombre3</h2>
                  <p class="servicio__subtitulo">servicio.subtitulo3</p>
                  <p class="servicio__descripcion">servicio.descripcion3</p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={Img4} alt=""/>
                <div class="carousel-item-dark"></div>
                <div class="servicio carousel-caption d-flex flex-column justify-content-center h-100">
                  <h2 class="servicio__titulo">servicio.nombre4</h2>
                  <p class="servicio__subtitulo">servicio.subtitulo4</p>
                  <p class="servicio__descripcion">servicio.descripcion4</p>
                </div>
              </div>
          </div> 
        
        {/* controles izquiera y derecha */}
        <button class="carousel-control-prev" data-bs-target="#carouselServicios" type="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button >
        <button class="carousel-control-next" data-bs-target="#carouselServicios" type="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button >
      </div>
    </div>
  )
}