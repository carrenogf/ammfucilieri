import { initializeApp } from "firebase/app";
import { getStorage,ref, uploadBytes} from 'firebase/storage';



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadImgHome(file,name){
  const storageRef = ref(storage,'img/home/'+name);
  await uploadBytes(storageRef,file);

}