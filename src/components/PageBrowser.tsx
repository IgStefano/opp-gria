import { NavLink } from "react-router-dom";

export default function PageBrowser(props: { pageRef: any }) {
  return (
    <nav aria-label="Page navigation" className="d-flex justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <NavLink
            className="page-link"
            onClick={() =>
              props.pageRef.current > 1 ? (props.pageRef.current = 1) : null
            }
            to={`${props.pageRef > 1 ? "/opportunities/1" : ""}`}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </NavLink>
        </li>
        <li
          className={`page-item ${props.pageRef.current === 1 ? "active" : ""}`}
        >
          <NavLink
            className="page-link"
            onClick={() => (props.pageRef.current = 1)}
            to={`/opportunities/1`}
            aria-label="1"
          >
            <span aria-hidden="true">1</span>
          </NavLink>
        </li>
        <li
          className={`page-item ${props.pageRef.current === 2 ? "active" : ""}`}
        >
          <NavLink
            className="page-link"
            onClick={() => (props.pageRef.current = 2)}
            to={"/opportunities/2"}
            aria-label="2"
          >
            <span aria-hidden="true">2</span>
          </NavLink>
        </li>

        <li className="page-item">
          <NavLink
            className="page-link"
            style={{}}
            onClick={() =>
              props.pageRef.current < 2 ? (props.pageRef.current = 2) : null
            }
            to={`${props.pageRef.current < 2 ? "/opportunities/2" : 2}`}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
