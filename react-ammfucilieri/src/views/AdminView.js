import { ThemeForm } from "../components/admin/ThemeForm";
import {Layout} from "../components/Layout"
import { ImgHome } from "../components/admin/ImgHome"
export const AdminView = () =>{
  return (
    <Layout>
      <div className="container-fluid p-2">
        <h1>Sitio de Administración</h1>
        <ImgHome/>
        <ThemeForm/>
      </div>
    </Layout>
  )

}