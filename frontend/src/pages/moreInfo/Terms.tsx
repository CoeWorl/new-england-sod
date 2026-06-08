import "./Terms.css";

export default function Terms() {
  return (
    <>
      <div className="terms-header">
        <h5>Our Services - Sod Delivery, Sod Prep, Sod Installation</h5>
        <h1>Terms and Conditions</h1>
        <a href="tel: +18001234567">
          <button className="call-button">Call 1-800-123-4567</button>
        </a>
      </div>

      <div className="terms">
        <h3>Terms and Conditions</h3>
        <p>When Ordering From New England Sod You Acknowledge The Following:</p>
        <div className="guarantee-list">
          <div className="guarantee-item">
            <p>
              Orders Must Be Canceled At Least Two Full Business Before
              Scheduled Delivery - No Refunds For Last Minute Cancellation
            </p>
          </div>
          <div className="guarantee-item">
            <p>
              Sod Is Perishable - If Not Laid The Day Of Delivery New England
              Sod Accepts No Responsibility For Sod Health
            </p>
          </div>
          <div className="guarantee-item">
            <p>We Don't Accept Pallet Returns</p>
          </div>
          <div className="guarantee-item">
            <p>
              Customers Responsibility To Water & Care For Sod After
              Delivery/Install
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
