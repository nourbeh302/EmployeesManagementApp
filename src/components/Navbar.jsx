import { Link } from "react-router-dom";
import logo from "../ems-logo.png"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">
        <Link className="navbar-brand text-muted fw-bold" to="/">
          <img src={logo} alt="" height="32" />
          <small className="ms-2 fw-bold text-primary">EMS</small>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-muted" aria-current="page" to="/addEmployee">
                Add New Employee
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}