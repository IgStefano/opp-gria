import { NavLink } from "react-router-dom";
import PaginationItem from "@mui/material/PaginationItem";

import Stack from "@mui/material/Stack";

// Componente que renderiza os botões de paginação no footer da página

export default function PageBrowser(props: { pageRef: any }) {
  return (
    <div style={{ height: "60px" }} className="text-decoration-none mt-5 pb-4">
      <Stack spacing={2}>
        <div className="h-100 d-flex justify-content-center flex-row align-items-center">
          <NavLink
            className="text-decoration-none"
            onClick={() =>
              props.pageRef.current > 1 ? (props.pageRef.current = 1) : null
            }
            to={`${props.pageRef.current > 1 ? "/opportunities/1" : ""}`}
          >
            <PaginationItem
              disabled={props.pageRef.current === 1}
              type={"previous"}
              size={"large"}
            />
          </NavLink>
          <NavLink
            className="text-decoration-none"
            onClick={() => (props.pageRef.current = 1)}
            to={`/opportunities/1`}
          >
            <PaginationItem
              className={`paginationItem ${
                props.pageRef.current === 1 ? "paginationItemSelected" : ""
              }`}
              page={1}
              selected={props.pageRef.current === 1}
              size={"large"}
            />
          </NavLink>
          <NavLink
            className="text-decoration-none"
            onClick={() => (props.pageRef.current = 2)}
            to={"/opportunities/2"}
          >
            <PaginationItem
              className={`paginationItem ${
                props.pageRef.current === 2 ? "paginationItemSelected" : ""
              }`}
              selected={props.pageRef.current === 2}
              page={2}
              size={"large"}
            />
          </NavLink>
          <NavLink
            onClick={() =>
              props.pageRef.current < 2 ? (props.pageRef.current = 2) : null
            }
            to={`${props.pageRef.current < 2 ? "/opportunities/2" : 2}`}
          >
            <PaginationItem
              disabled={props.pageRef.current === 2}
              type={"next"}
              size={"large"}
            />
          </NavLink>
        </div>
      </Stack>
    </div>
  );
}
