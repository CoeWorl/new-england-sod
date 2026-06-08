import "./County_pricing.css";

interface PricingProps {
  countyName: string;
}

export const CountyPricing = ({ countyName }: PricingProps) => {
  return (
    <>
      <div className="pricing-info">
        <h2 id="pricing-info-header">
          {countyName} County Sod Delivery Pricing
        </h2>
        <p id="pricing-info-blob">
          Standard pallets hold 500 sq ft (up to 600 if needed). Delivery is
          <b>$99.00</b>. Orders <b>500–900 sq ft</b> include a{" "}
          <b>$50 small-order fee</b>. Add <b>$0.10/sq ft</b> for Tall Fescue.
          See the full <a href="/pallet_delivery">sod pallet delivery guide</a>{" "}
          for specs, varieties, and whole-state coverage.
        </p>
      </div>
      <div className="pricing-container">
        <ul className="pricing-list">
          <li id="pricing-list-item">
            <span>500 square feet</span>
            <span>$699.00</span>
            <p id="pallette-size">1 pallette</p>
          </li>
          <li id="pricing-list-item">
            <span>600 square feet</span>
            <span>$749.00</span>
            <p id="pallette-size">1 pallette</p>
          </li>
          <li id="pricing-list-item">
            <span>600-1,100 square feet</span>
            <span>$0.90 sq. ft.</span>
            <p id="pallette-size">1-2 pallettes</p>
          </li>
          <li id="pricing-list-item">
            <span>1,200-2,000 square feet</span>
            <span>$0.75 sq. ft.</span>
            <p id="pallette-size">2-4 pallettes</p>
          </li>
          <li id="pricing-list-item">
            <span>2,100-3,900 square feet</span>
            <span>$0.70 sq. ft.</span>
            <p id="pallette-size">4-8 pallettes</p>
          </li>
          <li id="pricing-list-item">
            <span>4,000 square feet or More</span>
            <span>$0.60 sq. ft.</span>
            <p id="pallette-size">8+ pallettes</p>
          </li>
        </ul>
      </div>
      <p>
        Call <a href="tel: +18001234567">1-800-123-4567</a> for exact quotes,
        RTF pricing, or installation pricing.
      </p>
    </>
  );
};
