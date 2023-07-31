import React from "react";
import { usePage } from "../context/PageContxt";
import { useTotalResults } from "../context/totalResultsContext";

const Pagination = ({ pageSize }) => {
  //context apis
  const [page, setPage] = usePage();
  const [totalResults] = useTotalResults();

  const handlePrevBtnDisabled = () => {
    if (page <= 1) {
      return "disabled";
    } else {
      return " ";
    }
  };
  const handlePrevBtn = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };

  const handleNextBtnDisabled = () => {
    if (page + 1 > Math.ceil(totalResults / pageSize)) {
      return "disabled";
    } else {
      return " ";
    }
  };
  const handleNextBtn = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const handle1BtnDisabled = () => {
    if (page === 1) {
      return "disabled";
    } else {
      return " ";
    }
  };
  const handleBtn1 = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const handle2BtnDisabled = () => {
    if (page === 2) {
      return "disabled";
    } else {
      return " ";
    }
  };
  const handleBtn2 = (e) => {
    e.preventDefault();
    setPage(2);
  };

  const handle3BtnDisabled = () => {
    if (page === 3) {
      return "disabled";
    } else {
      return " ";
    }
  };
  const handleBtn3 = (e) => {
    e.preventDefault();
    setPage(3);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${handlePrevBtnDisabled()}`}>
          <button className="page-link" onClick={handlePrevBtn}>
            Previous
          </button>
        </li>
        <li className={`page-item ${handle1BtnDisabled()}`}>
          <button className="page-link" onClick={handleBtn1}>
            1
          </button>
        </li>
        <li className={`page-item ${handle2BtnDisabled()}`}>
          <button className="page-link" onClick={handleBtn2}>
            2
          </button>
        </li>
        <li className={`page-item ${handle3BtnDisabled()}`}>
          <button className="page-link" onClick={handleBtn3}>
            3
          </button>
        </li>
        <li className={`page-item ${handleNextBtnDisabled()}`}>
          <button className="page-link" onClick={handleNextBtn}>
            Next
          </button>
        </li>
      </ul>
    </nav>

    // <div className="d-flex justify-content-between">
    //   <button
    //     className="btn btn-success"
    //     type="button"
    //     disabled={page === 1}
    //     onClick={handlePrevBtn}
    //   >
    //     &larr; Previous
    //   </button>
    //   <button
    //     className="btn btn-success"
    //     type="button"
    //     disabled={page + 1 > Math.ceil(totalResults / pageSize)}
    //     onClick={handleNextBtn}
    //   >
    //     Next &rarr;
    //   </button>
    // </div>
  );
};

export default Pagination;
