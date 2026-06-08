import CountyButtons from "../components/County_buttons";
import "./Counties.css";

export default function Counties() {
  return (
    <>
      <section id="center">
        <div className="header">
          <h1 id="header-title">Connecticut Sod Delivery by County</h1>
        </div>
        <div className="county-info">
          <p id="info">
            We deliver fresh-cut sod across every Connecticut county we list
            below. Pick your county to see the towns we cover, lead times, and
            county-specific pricing notes. Don't see your area? Call{" "}
            <a href="tel:1234567890">1-800-123-4567</a>.
          </p>
        </div>
        <CountyButtons />
      </section>
    </>
  );
}
