import React, { useState } from "react";

import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Wrapper from "../../components/Wrapper";

const Root = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <>
      <Topbar
        handleMenu={() => setIsMenuOpen((val) => !val)}
        isOpen={isMenuOpen}
      />
      <Sidebar isOpen={isMenuOpen} />
      <Wrapper isOpen={isMenuOpen}>
         {children}
      </Wrapper>
    </>
  );
};

export default Root;
