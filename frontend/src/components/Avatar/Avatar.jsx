import React, { useState } from "react";

import { Tooltip } from "reactstrap";

import isValidUrl from "../../utils/isValidUrl";

import "./Avatar.styles.scss";

const Avatar = ({ id, src, name, innerClass, className, tooltipPosition, hover = false }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  const initials = () => {
    if (!name) return "";

    const results = [];
    const wordArray = name.split(" ");

    wordArray.forEach((e, i) => {
      if (i === 0 || i === wordArray.length - 1) results.push(e[0]);
      if (wordArray.length === 1) results.push(e[1] || "");
    });
    return results.join("");
  };

  return (
    <div className={`avatar ${innerClass}`}>
      {src && isValidUrl(src) ? (
        <img
          className={`avatar-img ${hover && `avatar-hover`} ${className}`}
          src={src}
          alt={`${name} avatar`}
          id={id ? "AvatarTooltip-" + id : ""}
        />
      ) : (
        <span
          className={`avatar-initials ${hover && `avatar-hover`} ${className}`}
          id={id ? "AvatarTooltip-" + id : ""}
        >
          {initials()}
        </span>
      )}
      {id && name && (
        <Tooltip
          placement={tooltipPosition ? tooltipPosition : 'right'}
          isOpen={tooltipOpen}
          target={"AvatarTooltip-" + id}
          toggle={toggle}
        >
          {name}
        </Tooltip>
      )}
    </div>
  );
};

export default Avatar;
