import { fields } from "./fields"

export const ThemeForm = ()=>{

  return (
    <div className="border rounded mt-3 mb-3 p-3">
      <h4>Modificar datos de la página principal</h4>
      <form action="" className="form" id="form">
        {fields.map((field)=>(
          <div className="form-group p-2">
            <label htmlFor={field.id}>{field.label}</label>
            {field.fromComponent==="input" ? (
              <input 
              type={field.typeInput} 
              className={field.className} 
              id={field.id} 
              name={field.name} 
              placeholder={field.label}
              required={field.required}
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
            ></textarea>
            ):""}

        </div>
        ))}
        <button type="button" className="btn btn-success mt-2">Enviar</button>
      </form>

    </div>
  )
}