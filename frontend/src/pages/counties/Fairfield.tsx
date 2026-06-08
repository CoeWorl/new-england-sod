import "./County.css";
import { CountyInfoBlob } from "../../components/County_info_blob";
import { CountyPricing } from "../../components/County_pricing";
export default function Fairfield() {
  return (
    <>
      <CountyInfoBlob
        countyName="Fairfield County"
        buttonLabel="Call 1-800-123-4567"
        linkLabel="Get a Price"
      />
      <div className="bold-county-info">
        <span id="bold-county-info">$699</span>
        <span id="bold-county-info">2-7 Days</span>
        <span id="bold-county-info">All Towns</span>
      </div>
      <div className="small-county-info">
        <span id="small-county-info">1 Pallet · 600 sq ft min</span>
        <span id="small-county-info">Standard Lead</span>
        <span id="small-county-info">In Fairfield County</span>
      </div>
      <CountyPricing countyName="Fairfield" />
    </>
  );
}
