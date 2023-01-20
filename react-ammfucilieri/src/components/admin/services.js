import { db } from "../../firebase/config";
import {collection,getDocs} from "firebase/firestore"
import { useEffect,useState } from "react";
import { ServiceCard } from "./serviceCard";
import { ServiceForm } from "./serviceForm";
export const Services = ()=>{
  const [services,setServices] = useState([]);

  useEffect(()=>{
    getDocs(collection(db,'services')).then((snapshot)=>{
      const servList = snapshot.docs.map((service)=>({id:service.id, ...service.data()}));
      setServices(servList);
    })
  },[])
  // if (services.length === 0){
  //   return <p>Loading...</p>;
  // }
  return (
    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingservices">
          <h5 className="mb-0">
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseServices" aria-expanded="true" aria-controls="collapseOne">
              Modificar servicios
            </button>
          </h5>
        </div>
        <ServiceForm/>
        <div id="collapseServices" className="collapse p-5" aria-labelledby="headingservices" data-parent="#accordion">
        <div className="d-flex flex-row justify-content-between">
          <h2>Servicios</h2>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Agregar +</button>
        
        </div>
        {services.length === 0 ? <p>Loading...</p> :
          services.map((service)=>(
            <div key={service.id} className="card-body">
              <ServiceCard service={service} />
            </div>
          ))
        }
        </div>
     
      </div>
    </div>
  )
}

