function PageControl({ page, totalPages, totalResultsCount, setPage }) {
  // Returns the "Previous" link
  const prevPageLink = () => {
    // Return a disabled view when on page 1
    if (page === 1) {
      return (
        <li className="page-item disabled">
          <span className="page-link">Previous</span>
        </li>
      );
    }

    // Otherwise, return a link to the previous page
    return (
      <li className="page-item">
        <a
          className="page-link"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setPage(page - 1);
          }}
        >
          Previous
        </a>
      </li>
    );
  };

  // Return the "Next" page link
  const nextPageLink = () => {
    // Return disabled state when on the last page
    if (page === totalPages) {
      return (
        <li className="page-item disabled">
          <span className="page-link">Next</span>
        </li>
      );
    }

    return (
      <li className="page-item">
        <a
          className="page-link"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setPage(page + 1);
          }}
        >
          Next
        </a>
      </li>
    );
  };

  // Link to the current page
  const currentPageLink = (
    <li className="page-item active" aria-current="page">
      <span className="page-link">{page}</span>
    </li>
  );

  // Returns a numbered link to the previous page, or empty
  // when on first page
  const pageMinusOne = () => {
    if (page > 1) {
      return (
        <li className="page-item">
          <a
            className="page-link"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setPage(page - 1);
            }}
          >
            {page - 1}
          </a>
        </li>
      );
    }

    return "";
  };

  // Returns a numbered link to the next page, or empty
  // when on the last page
  const pagePlusOne = () => {
    if (page < totalPages) {
      return (
        <li className="page-item">
          <a
            className="page-link"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
          >
            {page + 1}
          </a>
        </li>
      );
    }
    return "";
  };

  const titlePlural = totalResultsCount < 2 ? "title" : "titles";

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-2">
          <p
            className=""
            style={{ paddingTop: ".5rem", paddingLeft: "-.5rem" }}
          >
            Found {totalResultsCount} {titlePlural}
          </p>
        </div>
        <div className="col-md-3 offset-md-7">
          <nav aria-label="Page navigation example" className="float-end">
            <ul className="pagination">
              {prevPageLink()}
              {pageMinusOne()}
              {currentPageLink}
              {pagePlusOne()}
              {nextPageLink()}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default PageControl;
