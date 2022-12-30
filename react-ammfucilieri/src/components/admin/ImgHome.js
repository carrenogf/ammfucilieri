import {uploadImgHome} from '../../firebase/config'
import { imgUrls } from './fields';
import { useState, useEffect} from 'react'
export const ImgHome = ()=>{
  const [img1,setImg1] = useState(null);
  const [img2,setImg2] = useState(null);
  const [img3,setImg3] = useState(null);

  useEffect(()=>{
    if(img1){uploadImgHome(img1,'imgHome1').then(()=>window.location.reload())}
    if(img2){uploadImgHome(img2,'imgHome2').then(()=>window.location.reload())}
    if(img3){uploadImgHome(img3,'imgHome3').then(()=>window.location.reload())}
    
  },[img1,img2,img3])

  return (
    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Modificar imagenes de la página principal
            </button>
          </h5>
        </div>

        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-sm-4">
                <div className='fcc' style={{maxHeight:"200px",overflow:"hidden"}}>
                  <img className='img-fluid' src={imgUrls.home1.url} alt=""/>
                </div>
                <p>Imagen 1</p>
                <input type="file" className="form-control" onChange={e=>setImg1(e.target.files[0])}/>
              </div>

              <div className="col-12 col-sm-4">
                <div className='fcc' style={{maxHeight:"200px",overflow:"hidden"}}>
                  <img className='img-fluid' src={imgUrls.home2.url} alt=""/>
                </div>
                <p>Imagen 2</p>
                <input type="file" className="form-control" onChange={e=>setImg2(e.target.files[0])}/>
              </div>

              <div className="col-12 col-sm-4">
                <div className='fcc' style={{maxHeight:"200px",overflow:"hidden"}}>
                  <img className='img-fluid' src={imgUrls.home3.url} alt=""/>
                </div>
                <p>Imagen Fondo Formulario Contacto</p>
                <input type="file" className="form-control" onChange={e=>setImg3(e.target.files[0])}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

