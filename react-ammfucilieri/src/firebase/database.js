import { db } from "./config"
import {collection,doc,deleteDoc} from "firebase/firestore"


// database
export async function deleteData  (colectionName,id){
  const document = await deleteDoc(doc(db,colectionName,id))
}