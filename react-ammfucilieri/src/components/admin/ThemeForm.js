import { fields,themeid } from "./fields"
import {getDoc,doc,setDoc} from "firebase/firestore"
import { db } from "../../firebase/config";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
export const ThemeForm = ()=>{
 
  const [datos,setDatos] = useState(null)
  useEffect(()=>{
    const getdatos = async () =>{
      const refDatos = doc(db,'Temas',themeid);
      const datatheme = await getDoc(refDatos);
      if (datos==null){setDatos(datatheme.data())}
    }
    getdatos()
  },[])
  function updateTheme(event){
    event.preventDefault();
    let datosForm = {}
    fields.forEach((field) =>{
      datosForm[field.id] = document.getElementById(field.id).value;
    })

    const docRef = doc(db,'Temas',themeid)
    setDoc(docRef,datosForm).then(()=>{Swal.fire({title:`Datos Actualizados`})})
  }
  return (
    <div className="border rounded mt-3 mb-3 p-3">
      <h4>Modificar datos de la página principal</h4>
      <form action="" className="form" id="form" onSubmit={updateTheme}>
        {datos!=null ?
        fields.map((field)=>(
          <div key={field.id} className="form-group p-2">
            <label htmlFor={field.id}>{field.label}</label>
            {field.fromComponent==="input" ? (
              <input 
              type={field.typeInput} 
              className={field.className} 
              id={field.id} 
              name={field.name} 
              placeholder={field.label}
              required={field.required}
              defaultValue={datos[field.name]}
            />
            ):
            field.fromComponent==="textarea"?(
              <textarea 
              type={field.typeInput} 
              className={field.className} 
              id={field.id} 
              name={field.name} 
              placeholder={field.label}
              required={field.required}
              rows={4}
              defaultValue={datos[field.name]}
            ></textarea>
            ):""}

        </div>
        ))
        :
        "loading..."}
        <br/>
        <button type="submit" className="btn btn-success mt-2">Guardar</button>
      </form>

    </div>
  )
}