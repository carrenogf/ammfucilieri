import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AboutView } from "../views/About";
import { ContactView } from "../views/Contact"
import { ServicesView } from "../views/Services";
import { AdminView } from '../views/AdminView'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/contact',
    element: <ContactView/>,
  },
  {
    path:"/services",
    element: <ServicesView/>
  },
  {
    path:"/about",
    element: <AboutView/>
  },
  {
    path:"/admin",
    element: <AdminView/>},
  
]);