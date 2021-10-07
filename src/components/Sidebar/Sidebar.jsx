import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const { pathname } = useLocation();

  return (
    <>
      <div className={`navbar ${!isOpen ? "hide" : ""}`}>
        <ul className="navbar-menu">
          <li className={`navbar-item ${pathname === '/tasks' && 'active'}`}>
            <Link to="/tasks">
              <i className="fas fa-car"></i>
              Tarefas
            </Link>
          </li>
          <li className={`navbar-item ${pathname === '/users' && 'active'}`}>
            <Link to="/users">
              <i className="fas fa-chart-line"></i>
              Usuários
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
