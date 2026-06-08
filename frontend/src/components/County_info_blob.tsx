import { Link } from "react-router-dom";
import "./County_info_blob.css";

interface BlobProps {
  countyName: string;
  buttonLabel: string;
  linkLabel: string;
}

export const CountyInfoBlob = ({
  countyName,
  buttonLabel,
  linkLabel,
}: BlobProps) => {
  return (
    <section id="center">
      <div className="header">
        <h1 id="header-title">Connecticut Sod Delivery in {countyName} </h1>
      </div>
      <div className="county-info">
        <p id="info">
          Fresh-cut Kentucky bluegrass, tall fescue, blends & RTF sod delivered
          across {countyName}, Connecticut. Standard lead time is 2–7 days. Call{" "}
          <a href="tel:1234567890">1-800-123-4567</a> to schedule, or pick your
          town below for local notes and pricing.
        </p>
      </div>
      <div className="call-button">
        <button id="call">{buttonLabel}</button>
      </div>
      <div className="calculator-link-button">
        <Link to="/sod_calculator" id="calc-link">
          {linkLabel}
        </Link>
      </div>
    </section>
  );
};
