import { ref, uploadBytes,getDownloadURL} from 'firebase/storage';
import { storage } from './config';
// storage
export async function uploadfile(file,reference){
    const storageRef = ref(storage,reference);
    await uploadBytes(storageRef,file);
  }
  
  export  function getUrl(reference) {
    const urlimg =  getDownloadURL(ref(storage, reference))
    return urlimg
  }

  export async function uploadfileUrl(file,reference){
    const storageRef = ref(storage,reference);
    await uploadBytes(storageRef,file);
    return await getUrl(reference)
  }