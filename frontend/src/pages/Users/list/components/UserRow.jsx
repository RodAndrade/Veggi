import React from "react";
import { Link } from "react-router-dom";

const getInitials = str => {
  const results = []
  const wordArray = str.split(' ')

  wordArray.forEach((e, i) => {
    if(i === 0 || i === wordArray.length - 1) results.push(e[0])
    if(wordArray.length === 1) results.push(e[1] || '');
  })
  return results.join('')
}

const Avatar = ({ row }) => {
  let initials = getInitials(row.name);

  return (
    <span className="user-avatar">
      {initials}
    </span>
  )
};

const UserRow = ({ row }) => {
  return (
    <div className="userRow d-flex justify-content-left align-items-center">
      <Avatar row={row} />
      <div className="d-flex flex-column">
        <Link
          to={`/tasks/${row.id}`}
          className="user-name text-truncate"
          onClick={() => {
            console.log("click");
          }}
        >
          <span className="font-weight-bold">{row.name}</span>
        </Link>
        <small className="text-truncate text-muted">{row.email || ''}</small>
      </div>
    </div>
  );
};

export default UserRow;
