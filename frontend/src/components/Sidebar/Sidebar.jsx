import React from "react";
import { Link } from "react-router-dom";

import useBasePath from "../../hooks/useBasePath";

const Sidebar = ({ isOpen }) => {
  const basePath = useBasePath();

  return (
    <>
      <div className={`navbar ${!isOpen ? "hide" : ""}`}>
        <ul className="navbar-menu">
          <li className={`navbar-item ${basePath === '/users' && 'active'}`}>
            <Link to="/users">
              <i className="fas fa-chart-line"></i>
              Usuários
            </Link>
          </li>
          <li className={`navbar-item ${(basePath === '/tasks' || basePath === '/') && 'active'}`}>
            <Link to="/tasks">
              <i className="fas fa-car"></i>
              Tarefas
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
