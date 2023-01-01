import { db} from "./config"
import {collection,getDocs, getFirestore, query, where} from "firebase/firestore"


// database

export const create = (colectionName,values) => {
    db.collection(colectionName).doc().set(values)
  }
