import "../styles/dropdown.css";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);

  const options = ["Yes", "Probably not"];

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onMouseEnter={(e) => setIsActive(!isActive)}
      >
        {selected}
        <span>
          <FiChevronDown />
        </span>
      </div>

      {isActive && (
        <div
          className="dropdown-content"
          onMouseLeave={(e) => setIsActive(!setIsActive)}
        >
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
