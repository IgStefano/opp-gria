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
    <div className="p-4 my-3 bg-light col-10">
      <div className="d-flex flex-row ">
        <img
          style={{ width: "40px", height: "40px" }}
          alt={props.nome}
          src={props.imagem}
        />
        <div className="d-flex flex-column">
          <p>{props.nome}</p>
          <strong className="">{props.cargo}</strong>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center">
        <img
          className="me-2 mb-3"
          style={{ width: "15px", height: "15px" }}
          alt="Nível"
          src={personIcon}
        />
        <p>{props.nivel}</p>
      </div>
      <div className="d-flex flex-row align-items-center">
        <img
          className="me-2 mb-3"
          style={{ width: "15px", height: "15px" }}
          alt="Periodo"
          src={AccessAlarmIcon}
        />
        <p>{props.periodo}</p>
      </div>
      <div className="d-flex flex-row align-items-center">
        <img
          className="me-2 mb-3"
          style={{ width: "15px", height: "15px" }}
          alt="Local"
          src={LocationOnOutlinedIcon}
        />
        <p>{props.local}</p>
      </div>

      <small>{opportunityDay()} </small>
    </div>
  );
}
