import React from "react";

import ReactPaginate from "react-paginate";

const OptionButton = ({ currentPage, perPage, totalPages, handlePagination }) => {
  return (
    <ReactPaginate
      previousLabel={""}
      nextLabel={""}
      pageCount={totalPages || 1}
      activeClassName="active"
      forcePage={currentPage !== 0 ? currentPage - 1 : 0}
      onPageChange={(page) => handlePagination(page)}
      pageClassName={"page-item"}
      nextLinkClassName={"page-link"}
      nextClassName={"page-item next"}
      previousClassName={"page-item prev"}
      previousLinkClassName={"page-link"}
      pageLinkClassName={"page-link"}
      containerClassName={
        "pagination react-paginate justify-content-end my-2 pr-1"
      }
    />
  );
};

export default OptionButton;
