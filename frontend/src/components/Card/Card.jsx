import React from "react";

import {
  Card as RSCard, CardBody
} from 'reactstrap';

import './Card.styles.scss';

const Card = ({ className, children }) => {
  return (
    <>
      <RSCard className={`cardStyled ${className}`}>
        <CardBody className="cardBodyStyled">
          {children}
        </CardBody>
      </RSCard>
    </>
  );
};

export default Card;
