import React from "react";
import { NavLink } from "react-router-dom";
import hederContent from "../../Content/HederContent";

const Navbar = () => {
  return (
    <nav className="navbar m-2 p-2 navbar-expand-lg">
      <div className="container">
        <div className="w-100">
          <div className="row">
            <div className="col-3">
              <NavLink className="navbar-brand" to="/">
                <img
                  className="img-fluid w-25"
                  src={hederContent.img_logo}
                  alt="Logo"
                />
              </NavLink>
            </div>
            <div className="col-6">
              <div className="navbar-collapse" id="navbarNav">
                <ul
                  className="navbar-nav"
                  style={{ textTransform: "uppercase" }}
                >
                  {hederContent.nav_links.map((items, index) => (
                    <li className="nav-item" key={index}>
                      <NavLink
                        className={({ isActive }) =>
                          `nav-link ${isActive ? "active fw-semibold" : ""}`
                        }
                        to={items.href}
                      >
                        {items.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-3">
              <button className="nav-item btn btn-info ms-2">
                <NavLink
                  className="text-light text-decoration-none"
                  to="/contact"
                >
                  {hederContent.nav_button}
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
