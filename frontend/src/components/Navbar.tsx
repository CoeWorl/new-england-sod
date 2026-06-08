import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { DropdownMenu } from "./Navbar_dropdown";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="nav-logo">
          NESOD.COM
        </NavLink>

        {/* Mobile Hamburger Icon */}
        <div className="nav-icon" onClick={toggleMenu}>
          <span className={isOpen ? "fas fa-times" : "fas fa-bars"}>
            {isOpen ? "x" : "☰"}
          </span>
        </div>

        {/* Navigation Menu Links */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/sod_for_sale"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={toggleMenu}
            >
              Sod for Sale
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/sod_calculator"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={toggleMenu}
            >
              Sod Cost Calculator
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/service_areas"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={toggleMenu}
            >
              Service Areas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/sod_installation"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={toggleMenu}
            >
              Sod Installation
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <DropdownMenu
              buttonLabel="More"
              items={[
                { title: "For the Trade", url: "/for_the_trade" },
                { title: "Terms & Conditions", url: "/terms" },
                { title: "Before You Order", url: "/before_you_order" },
                {
                  title: "Sod Installation Guide",
                  url: "/installation_guide",
                },
                {
                  title: "Sod Pallett Delivery",
                  url: "/pallet_delivery",
                },
                {
                  title: "Golf Course Supplier",
                  url: "/golf_course_supplier",
                },
              ]}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};
