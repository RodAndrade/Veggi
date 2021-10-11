import React from "react";

const Wrapper = ({ isOpen, children }) => {
  return (
    <>
      <div className={`wrapper ${!isOpen ? 'full' : ''}`}>
        {children}
      </div>
    </>
  );
}

export default Wrapper;
