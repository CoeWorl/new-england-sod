import "./Pricing.css";

export const Pricing = () => {
  return (
    <div className="pricing-container">
      <ul className="pricing-list">
        <li className="pricing-list-item">
          <span>500 square feet</span>
          <span>$699.00</span>
          <p className="pallette-size">1 pallette</p>
        </li>
        <li className="pricing-list-item">
          <span>600 square feet</span>
          <span>$749.00</span>
          <p className="pallette-size">1 pallette</p>
        </li>
        <li className="pricing-list-item">
          <span>600-1,100 square feet</span>
          <span>$0.90 sq. ft.</span>
          <p className="pallette-size">1-2 pallettes</p>
        </li>
        <li className="pricing-list-item">
          <span>1,200-2,000 square feet</span>
          <span>$0.75 sq. ft.</span>
          <p className="pallette-size">2-4 pallettes</p>
        </li>
        <li className="pricing-list-item">
          <span>2,100-3,900 square feet</span>
          <span>$0.70 sq. ft.</span>
          <p className="pallette-size">4-8 pallettes</p>
        </li>
        <li className="pricing-list-item">
          <span>4,000 square feet or More</span>
          <span>$0.60 sq. ft.</span>
          <p className="pallette-size">8+ pallettes</p>
        </li>
      </ul>
    </div>
  );
};
