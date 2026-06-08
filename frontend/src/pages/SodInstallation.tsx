import "./SodInstallation.css";
import { Link } from "react-router-dom";

export default function SodInstallation() {
  return (
    <>
      <div className="info-container">
        <div className="info-blob">
          <h1>Professional Sod Installation Across Connecticut</h1>
          <p id="info-para">
            Fresh-cut Kentucky Bluegrass, Tall Fescue, and blend sod laid by
            crews that only do sod — all across Connecticut. Delivery only,
            delivery plus prep, or full turnkey install. Same day from the farm
            to your lawn.
          </p>
        </div>
        <div className="info-buttons">
          <span id="call-button">
            <a href="tel: +18001234567">
              <button>Call 1-800-123-4567</button>
            </a>
          </span>
          <span id="contact-button">
            <Link to="../contact">Request an Estimate</Link>
          </span>
          <span id="calc-button">
            <Link to="../sod_calculator">Open Sod Calculator</Link>
          </span>
        </div>
      </div>
      <div className="stats-container">
        <div className="bold-stats">
          <span id="bold-stats-info">20,000 sf/day</span>
          <span id="bold-stats-info">All Towns</span>
          <span id="bold-stats-info">Fresh Cut</span>
          <span id="bold-stats-info">1,200 sf</span>
        </div>
        <div className="small-stats">
          <span id="small-stats-info">Install Crew Capacity</span>
          <span id="small-stats-info">Across Connecticut</span>
          <span id="small-stats-info">
            Straight off the farm in the same day
          </span>
          <span id="small-stats-info">Installation Minimum</span>
        </div>
      </div>
    </>
  );
}
