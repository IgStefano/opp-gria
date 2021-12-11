import AccessAlarmIcon from "../assets/images/clock_icon_128908.png";
import LocationOnOutlinedIcon from "../assets/images/location.png";
import personIcon from "../assets/images/person_icon.95c4e732.svg";
const moment = require("moment");

export default function SingleCard(props: {
  nome: string;
  cargo: string;
  nivel: string;
  periodo: string;
  local: string;
  data: string;
  imagem: string;
}) {
  function opportunityDay() {
    const date = moment(props.data);
    const today = Date.now();
    const opportunityNumberOfDays = -1 * Math.ceil((date - today) / 86400000);
    if (opportunityNumberOfDays === 1) {
      return "Criada há 1 dia";
    } else if (opportunityNumberOfDays === 0) {
      return "Criada hoje";
    } else {
      return `Criada há ${opportunityNumberOfDays} dias`;
    }
  }

  return (
    <div
      style={{ boxShadow: "0px 2px 2px rgba(17,17,26,0.1)", width: "90%" }}
      className="p-3 mt-3 col-10 rounded searchbg"
    >
      <div className="d-flex flex-row ">
        <img
          style={{ width: "40px", height: "40px" }}
          alt={props.nome}
          src={props.imagem}
        />
        <div className="d-flex flex-column">
          <p style={{ fontSize: "12px" }} className="ps-2">
            {props.nome}
          </p>
        </div>
      </div>
      <div className="py-3">
        <strong style={{ fontSize: "12px" }}>{props.cargo}</strong>
      </div>
      <div className="d-flex flex-row align-items-center">
        <img
          className="me-2 mb-2"
          style={{ width: "15px", height: "15px" }}
          alt="Nível"
          src={personIcon}
        />
        <p style={{ fontSize: "12px", marginBottom: "5px", fontWeight: "300" }}>
          {props.nivel}
        </p>
      </div>
      <div className="d-flex flex-row align-items-center">
        <img
          className="me-2 mb-2"
          style={{ width: "15px", height: "15px" }}
          alt="Periodo"
          src={AccessAlarmIcon}
        />
        <p style={{ fontSize: "12px", marginBottom: "5px", fontWeight: "300" }}>
          {props.periodo}
        </p>
      </div>
      <div className="d-flex flex-row align-items-center">
        <img
          className="me-2 mb-2"
          style={{ width: "15px", height: "15px" }}
          alt="Local"
          src={LocationOnOutlinedIcon}
        />
        <p style={{ fontSize: "12px", marginBottom: "5px", fontWeight: "300" }}>
          {props.local}
        </p>
      </div>
      <div className="pt-4">
        <small
          style={{
            fontSize: "0.65rem",
            fontFamily: "roboto",
            fontWeight: "300",
          }}
        >
          {opportunityDay()}{" "}
        </small>
      </div>
    </div>
  );
}
