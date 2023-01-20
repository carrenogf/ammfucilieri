import { deleteData } from "../../firebase/database"
import Swal from 'sweetalert2'
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
        <button className="btn btn-danger" onClick={()=>{
          Swal.fire({
            title:`Eliminar el servicio ${service.titulo}`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: 'No',
          }).then((result) => {
            if (result.isConfirmed) {
              deleteData('services',service.id)
              Swal.fire({
                title:`Se elimino el servicio ${service.titulo}`,
                confirmButtonText: 'ok'
              }).then((result) => {if (result.isConfirmed) {window.location.reload()}})
              
            } else if (result.isDenied) {
              Swal.fire('No se eliminó el servicio', '', 'info')
            }
          })
        }}
        >Eliminar</button>
      
      </div>
    </div>
  )
}
