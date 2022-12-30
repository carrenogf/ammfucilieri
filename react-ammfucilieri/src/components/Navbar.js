import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
          <Link className="navbar-brand bg-dark text-white p-2 rounded" to="/">
            Macarena Fucilieri
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarsExample11"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/services">Servicios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Sobre mí</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
