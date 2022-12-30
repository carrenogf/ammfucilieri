import {Layout} from "../components/Layout"
import {ContactForm} from "../components/contactForm"
import {imgUrls} from '../components/admin/fields'

export const ContactView = () => {
  return (
    <Layout>
      <div className="container fcc flex-column pt-5" style={{ backgroundImage: `url(${imgUrls.home3.url})` }}>
        <h1>Contacto</h1>
        <ContactForm/>
      </div>
    </Layout>
  )
}