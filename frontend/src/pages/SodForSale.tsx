import "./SodForSale.css";
import { Link } from "react-router-dom";
import { Pricing } from "../components/Pricing";

export default function SodForSale() {
  return (
    <>
      <div className="info-blob">
        <h1 id="info-header">
          Sod For Sale — Fresh-Cut Pallets Delivered Across Connecticut
        </h1>
        <p>
          Single pallet (500 sq ft) <b>$699 delivered</b>. Volume pricing down
          to <b>$.66/sq ft.</b> Kentucky Bluegrass, Tall Fescue, and RTF —
          harvested same-day from our partner farms and trucked direct to your
          driveway across <b>Connecticut</b>.
        </p>
      </div>
      <div className="info-buttons">
        <span id="info-call-button">
          <a href="tel: +18001234567">
            <button id="call">Call 1-800-123-4567</button>
          </a>
        </span>
        <span id="calc-button">
          <Link to="../sod_calculator">Calculate My Price →</Link>
        </span>
      </div>
      <div className="pricing-info">
        <h4>Transparent Pricing</h4>
        <h2>Sod For Sale — Pallet Pricing Delivered</h2>
        <p>
          Pricing is per square foot, delivered. One pallet covers 500 sq ft. No
          hidden fees — what you see is what you pay.
        </p>
      </div>
      <Pricing />
      <div className="call-button">
        <a className="bottom-call-btn" href="tel:+18001234567">
          Call 1-800-123-4567
        </a>
      </div>
    </>
  );
}
