import { useState } from "react"
import { uploadfileUrl} from "../../firebase/storage";
import { getDatabase,ref as dbref,push} from "firebase/database";
import { app } from "../../firebase/config";
import {getFirestore,setDoc,doc} from "firebase/firestore";
export const ServiceForm = ()=> {
  const [servicesFormData, setServicesFormData] = useState({
    titulo: '',
    subtitulo: '',
    descripcion: '',
    imagen: '',
  })

  const handleInputChange = (event) => {
    if (event.target.name === 'imagen'){
      setServicesFormData({...servicesFormData,
        [event.target.name] : event.target.files[0]
      })
    }else{
      setServicesFormData({...servicesFormData,
        [event.target.name] : event.target.value
      })
    }
  }
  async function enviarDatos (event) {
    event.preventDefault();
    const db = getDatabase(app);
    const newService =  push(dbref(db,"services"));
    const newServiceKey = newService.key;
    const urlImg = await uploadfileUrl(servicesFormData.imagen,`img/services/${newServiceKey}`);
    setDoc(doc(getFirestore(app),'services',newServiceKey),{
      titulo:servicesFormData.titulo,
      subtitulo:servicesFormData.subtitulo,
      descripcion:servicesFormData.descripcion,
      urlImg:urlImg,
    }).then(()=>window.location.reload())

  }

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Servicio</h5>
            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="servicesForm" onSubmit={enviarDatos}>
              <div className="form-group">
                <label htmlFor="servicio-img" className="col-form-label">Imagen:</label>
                <input onChange={handleInputChange} name="imagen" type="file" className="form-control" id="service-img" required="required" />
              </div>
              <div className="form-group">
                <label htmlFor="servicio-titulo" className="col-form-label">Titulo:</label>
                <input onChange={handleInputChange} name="titulo" type="text" className="form-control" id="servicio-titulo" required="required"/>
              </div>
              <div className="form-group">
                <label htmlFor="servicio-subtitutulo" className="col-form-label">Subtitulo:</label>
                <input onChange={handleInputChange} name="subtitulo" type="text" className="form-control" id="servicio-subtitutulo" required="required"/>
              </div>
              <div className="form-group">
                <label htmlFor="servicio-descripcion" className="col-form-label">descripcion:</label>
                <textarea onChange={handleInputChange} name="descripcion" className="form-control" id="servicio-descripcion" required="required"></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Agregar</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}