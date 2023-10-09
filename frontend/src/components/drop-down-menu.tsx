import Dropdown from "react-bootstrap/Dropdown";
import "./drop-down-menu.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <img src="/src/assets/menu-white-2.png" alt="Menu" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <ul>
          <Dropdown.Item onClick={() => navigate("../planttracker")}>
            Plants
          </Dropdown.Item>
        </ul>
        <ul>
          <Dropdown.Item onClick={() => navigate("../marketplace")}>
            Marketplace
          </Dropdown.Item>
        </ul>
        <ul>
          <Dropdown.Item onClick={() => navigate("../carboncredit")}>
            Carbon Credits
          </Dropdown.Item>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
