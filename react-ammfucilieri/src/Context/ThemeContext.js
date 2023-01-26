import { createContext, useState,useEffect } from "react";
import {getDoc,doc} from "firebase/firestore"
import { db } from "../firebase/config";
import { themeid } from "../components/admin/fields";

export const ThemeContext = createContext({});
export const ThemeContextProvider = ({children}) => {
    const [datos,setDatos] = useState(null);
    useEffect(()=>{
        const getdatos = async () =>{
          const refDatos = doc(db,'Temas',themeid);
          const datatheme = await getDoc(refDatos);
          if (datos==null){setDatos(datatheme.data())}
        }
        getdatos()
      },[])
    return (
    <ThemeContext.Provider  value={{datos}}>
        {children}
    </ThemeContext.Provider>
    );
};



