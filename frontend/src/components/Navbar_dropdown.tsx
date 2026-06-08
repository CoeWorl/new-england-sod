import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Navbar_dropdown.css";

interface DropdownProps {
  buttonLabel: string;
  items: {
    title: string;
    url?: string;
    action?: () => void;
  }[];
}

export const DropdownMenu = ({ buttonLabel, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <button type="button" className="toggle-button" onClick={handleToggle}>
        {buttonLabel}
        <span className="m1-2">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="dropdown-items-container">
          <ul className="dropdown-items">
            {items.map((item, index) => (
              <li key={index} className="dropdown-item">
                {item.url ? (
                  <Link
                    to={item.url}
                    className="dropdown-item-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <button
                    className="dropdown-item-button"
                    onClick={() => {
                      item.action?.();
                      setIsOpen(false);
                    }}
                    type="button"
                  >
                    {item.title}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
