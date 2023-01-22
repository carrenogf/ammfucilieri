import { useState } from "react"
import { uploadfileUrl,getUrl} from "../../firebase/storage";
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
    const updateServiceInput = document.getElementById("serviceUpdate");
    console.log(updateServiceInput.value)
    let serviceKey;
    let formTitle;
    let formSubTitle;
    let formDescription;
    let urlImg;
    if (updateServiceInput.value==0){
      const newService =  push(dbref(db,"services"));
      serviceKey = newService.key;
      formTitle =  servicesFormData.titulo
      formSubTitle =  servicesFormData.subtitulo
      formDescription =servicesFormData.descripcion
      urlImg = await uploadfileUrl(servicesFormData.imagen,`img/services/${serviceKey}`);
    }else {
      serviceKey = updateServiceInput.value
      const formImg = document.getElementById("servicio-img");
      if (!formImg.files[0]){
        urlImg = await getUrl(`img/services/${serviceKey}`)
      }else{
        urlImg = await uploadfileUrl(formImg.files[0],`img/services/${serviceKey}`);
      }
      formTitle =  document.getElementById("servicio-titulo").value;
      formSubTitle =  document.getElementById("servicio-subtitulo").value;
      formDescription =  document.getElementById("servicio-descripcion").value;
    }
    setDoc(doc(getFirestore(app),'services',serviceKey),{
      titulo:formTitle,
      subtitulo:formSubTitle,
      descripcion:formDescription,
      urlImg:urlImg,
    })
    .then(()=>window.location.reload())

  }
  function prueba (text) {console.log(text)}
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
              <input id="serviceUpdate" type="hidden" />
              <div className="form-group">
                <label htmlFor="servicio-img" className="col-form-label">Imagen:</label>
                <input onChange={handleInputChange} name="imagen" type="file" className="form-control" id="servicio-img" required="required" />
              </div>
              <div className="form-group">
                <label htmlFor="servicio-titulo" className="col-form-label">Titulo:</label>
                <input onChange={handleInputChange} name="titulo" type="text" className="form-control" id="servicio-titulo" required="required"/>
              </div>
              <div className="form-group">
                <label htmlFor="servicio-subtitutulo" className="col-form-label">Subtitulo:</label>
                <input onChange={handleInputChange} name="subtitulo" type="text" className="form-control" id="servicio-subtitulo" required="required"/>
              </div>
              <div className="form-group">
                <label htmlFor="servicio-descripcion" className="col-form-label">descripcion:</label>
                <textarea onChange={handleInputChange} name="descripcion" className="form-control" id="servicio-descripcion" required="required"></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <div id="button-container"><button type="submit" className="btn btn-primary">Agregar</button></div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}