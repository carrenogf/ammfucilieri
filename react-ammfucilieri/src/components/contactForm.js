import Swal from 'sweetalert2'
export const ContactForm = () =>{
  
  function formSubmitAlert(){
    Swal.fire('hola mundo');
    }
  return (
    <div className="col-lg-6 col-md-12 mt-5">
      <h2>Nos pongamos en contacto!</h2>
      <form action="" className="form" id="form">
        {/* nombre y apellido*/}
        <div className="form-group">
          <label htmlFor="id_nombre">Nombre y apellido</label>
          <input 
            type="text" 
            className="form-control" 
            id="id_nombre" 
            name="nombre" 
            maxLength="60" 
            placeholder="Nombre y apellido"
            required="required"
          />
        </div>
        {/* Email*/}
        <div className="form-group">
          <label htmlFor="id_email">E-mail</label>
          <input 
            type="email" 
            className="form-control" 
            id="id_email" 
            maxLength="254" 
            name="email" 
            placeholder="Email"
            required="required"
            />
        </div>
        {/* Asunto*/}
        <div className="form-group">
          <label htmlFor="id_asunto">Asunto</label>
          <input 
            type="text" 
            className="form-control" 
            id="id_asunto" 
            name="asunto" 
            placeholder="Asunto"
            required="required"
          />
        </div>
        {/* Consulta*/}
        <div className="form-group">
          <label htmlFor="id_consulta">Consulta</label>
          <textarea 
            id="id_consulta" 
            className="form-control" 
            name="consulta"
            rows="5"
            required="required"
            >
          </textarea>
        </div>
        <button type="button" onClick={formSubmitAlert} className="btn btn-success mt-2">Enviar</button>
      </form>

    </div>
    )
}