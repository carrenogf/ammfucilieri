import {uploadfile,getUrl} from '../../firebase/storage'
// import { imgUrls } from './fields';
import { useState, useEffect} from 'react'

export const ImgHome = ()=>{
  const [img1,setImg1] = useState({});
  const [img2,setImg2] = useState({});
  const [img3,setImg3] = useState({});

  useEffect(()=>{
    
    if (!img1.url){getUrl('img/home/imgHome1').then(u => setImg1({...img1,url:u}))}
    if (!img2.url){getUrl('img/home/imgHome2').then(u => setImg2({...img2,url:u}))}
    if (!img3.url){getUrl('img/home/imgHome3').then(u => setImg3({...img3,url:u}))}
      
    if(img1.file){uploadfile(img1.file,'img/home/imgHome1')
    .then(()=> {
      setImg1({file:null,url:img1.url})
      window.location.reload()
    })}
    if(img2.file){uploadfile(img2.file,'img/home/imgHome2')
    .then(()=>{
      setImg3({file:null,url:img2.url})
      window.location.reload()})}
    if(img3.file){uploadfile(img3.file,'img/home/imgHome3')
    .then(()=>{
      setImg3({file:null,url:img3.url})
      window.location.reload()})}
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
                  <img className='img-fluid' src={img1.url} alt=""/>
                </div>
                <p>Imagen 1</p>
                <input type="file" className="form-control" onChange={e=>setImg1({url:img1.url,file:e.target.files[0]})}/>
              </div>

              <div className="col-12 col-sm-4">
                <div className='fcc' style={{maxHeight:"200px",overflow:"hidden"}}>
                  <img className='img-fluid' src={img2.url} alt=""/>
                </div>
                <p>Imagen 2</p>
                <input type="file" className="form-control" onChange={e=>setImg2({url:img2.url,file:e.target.files[0]})}/>
              </div>

              <div className="col-12 col-sm-4">
                <div className='fcc' style={{maxHeight:"200px",overflow:"hidden"}}>
                  <img className='img-fluid' src={img3.url} alt=""/>
                </div>
                <p>Imagen Fondo Formulario Contacto</p>
                <input type="file" className="form-control" onChange={e=>setImg3({url:img3.url,file:e.target.files[0]})}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

