import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PageBrowser() {
  const navigate = useNavigate();

  let search = window.location.search;
  let params = new URLSearchParams(search);

  const [page, setPage] = useState(parseInt("" + params.get("page")));

  const paginate = (n: number) => {
    setPage(n);
    navigate({
      pathname: "/",
      search: "?page=" + n,
    });
  };

  // return (
  //   <div>
  //     <div
  //       onClick={() => paginate(1)}
  //       style={page === 1 ? { fontSize: 30 } : {}}
  //     >
  //       1
  //     </div>
  //     <div
  //       onClick={() => paginate(2)}
  //       style={page === 2 ? { fontSize: 30 } : {}}
  //     >
  //       2
  //     </div>
  //   </div>
  // );

  return (
    <nav aria-label="Page navigation" className="d-flex justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <NavLink
            className="page-link"
            onClick={() => paginate(page > 1 ? page - 1 : 1)}
            to={`?page=${page > 1 ? page - 1 : 1}`}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink
            className="page-link"
            onClick={() => paginate(1)}
            to={`?page=1`}
            aria-label="1"
          >
            <span aria-hidden="true">1</span>
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink
            className="page-link"
            onClick={() => paginate(2)}
            to={`?page=2`}
            aria-label="2"
          >
            <span aria-hidden="true">2</span>
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink
            className="page-link"
            onClick={() => paginate(3)}
            to={`?page=3`}
            aria-label="3"
          >
            <span aria-hidden="true">3</span>
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink
            className="page-link"
            onClick={() => paginate(page < 3 ? page + 1 : 3)}
            to={`?page=${page < 3 ? page + 1 : 3}`}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
