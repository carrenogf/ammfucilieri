export const ServiceCard = ({service})=>{
  return (
    <div className="row border p-2">
      {/* imagen servicio */}
      <div className="col-12 col-sm-2">
        <img src={service.urlImg} className="img-fluid" alt={service.alt}/>
      </div>
      {/* datos servicio */}
      <div className="col-12 col-sm-8 d-flex flex-column">
        <h3>{service.titulo}</h3>
        <h6>{service.subtitulo}</h6>
        <p>{service.descripcion}</p>
      </div>
      <div className="col-12 col-sm-2 d-flex flex-column justify-content-around">
        <button className="btn btn-warning">Editar</button>
        <button className="btn btn-danger">Eliminar</button>
      </div>
    </div>
  )
}
