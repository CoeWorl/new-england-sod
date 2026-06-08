import "./County_buttons.css";
import { Link } from "react-router-dom";

export default function CountyButtons() {
  return (
    <div className="county-list">
      <Link to={"../counties/hartford"}>
        <button className="county-button">Hartford County</button>
      </Link>
      <Link to={"../counties/new_haven"}>
        <button className="county-button">New Haven County</button>
      </Link>
      <Link to={"../counties/fairfield"}>
        <button className="county-button">Fairfield County</button>
      </Link>
      <Link to={"../counties/new_london"}>
        <button className="county-button">New London County</button>
      </Link>
      <Link to={"../counties/middlesex"}>
        <button className="county-button">Middlesex County</button>
      </Link>
      <Link to={"../counties/tolland"}>
        <button className="county-button">Tolland County</button>
      </Link>
      <Link to={"../counties/litchfield"}>
        <button className="county-button">Litchfield County</button>
      </Link>
      <Link to={"../counties/windham"}>
        <button className="county-button">Windham County</button>
      </Link>
    </div>
  );
}
