import { initializeApp } from "firebase/app";
import { getStorage,ref, uploadBytes,getDownloadURL} from 'firebase/storage';
import * as firebase from "firebase/app";


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadImgHome(file,name){
  const storageRef = ref(storage,'img/home/'+name);
  await uploadBytes(storageRef,file);
}


export  function getImgUrl(file) {
  const urlimg =  getDownloadURL(ref(storage, file))
  return urlimg

}