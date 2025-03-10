import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import hederContent from "../../Content/HederContent";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <>
      <nav className="navbar mt-2 p-2 navbar-expand-lg">
        <div className="container">
          <div className="w-100">
            <div className="row align-items-center">
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
                  <ul className="navbar-nav text-uppercase">
                    {hederContent.nav_links.map((items, index) => (
                      <li
                        className={`nav-item ${
                          items.dropdown ? "dropdown" : ""
                        }`}
                        key={index}
                        onMouseEnter={() => setOpenDropdown(index)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {items.dropdown ? (
                          <>
                            <NavLink
                              className="nav-link dropdown-toggle"
                              to={items.href}
                            >
                              {items.name}
                            </NavLink>
                            <ul
                              className={`dropdown-menu ${
                                openDropdown === index ? "d-block" : "d-none"
                              }`}
                            >
                              {items.dropdown.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <NavLink
                                    className="dropdown-item "
                                    to={subItem.href}
                                  >
                                    {subItem.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <NavLink
                            className={({ isActive }) =>
                              `nav-link ${isActive ? "active fw-semibold" : ""}`
                            }
                            to={items.href}
                          >
                            {items.name}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <button className="nav-item btn btn-info">
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
      <hr
        className="m-0"
        style={{ width: "100%", color: "#61CE70", zIndex: "2000" }}
      />
    </>
  );
};

export default Navbar;
