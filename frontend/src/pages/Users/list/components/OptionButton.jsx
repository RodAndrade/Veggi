import React from "react";
import { Link } from "react-router-dom";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { MoreVertical, FileText, Trash2 } from "react-feather";

const OptionButton = ({row, open, destroy}) => {
  return (
    <UncontrolledDropdown className="user-options ms-auto">
      <DropdownToggle tag="div" className="btn btn-sm">
        <MoreVertical size={14} className="cursor-pointer" />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem
          tag={Link}
          to={`/users/${row.id}`}
          className="w-100 d-flex align-items-center"
          onClick={() => open(row)}
        >
          <FileText size={14} color="#24d15d" />
          <span className="align-middle ps-2">Detalhes</span>
        </DropdownItem>
        <DropdownItem
          className="w-100 d-flex align-items-center"
          onClick={() => destroy(row)}
        >
          <Trash2 size={14} color="#ff0000" />
          <span className="align-middle ps-2">Deletar</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default OptionButton;
