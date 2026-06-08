import "./Contact.css";
import ContactForm from "../components/Contact_form";

// TO DO
// somehow connect this to an email to send the form to when submitted.

export default function ContactUs() {
  return (
    <>
      <div className="info-container">
        <div className="contact-info">
          <h1>Get a Quote</h1>
          <p>
            Fastest way to get an exact price is a phone call — tell us your
            project size, location, and timing and we’ll quote you in a few
            minutes.
          </p>
        </div>
        <div className="call-button">
          <a href="tel: +18001234567">Call 1-800-123-4567</a>
        </div>
      </div>

      <div className="fact-bar">
        <div className="fact-bar-item">
          <h5>Order Minimums</h5>
          <p>
            <b>1 pallet</b> (500–600 sq ft) across CT
          </p>
        </div>

        <div className="fact-bar-item">
          <h5>Lead Time</h5>
          <p>
            <b>2–7 days</b> From order to delivery. Sod is cut fresh off the
            farm against your delivery date — no inventory pallets sitting in a
            yard.
          </p>
        </div>

        <div className="fact-bar-item">
          <h5>Pickup</h5>
          <p>
            <b>No pickup — delivery only.</b> Our trucks carry all-terrain
            forklifts and place pallets where you need them on the property.
          </p>
        </div>
      </div>

      <div className="contact-forms-container">
        <div className="phone-and-info-container">
          <div className="phone-container">
            <h3>By Phone</h3>
            <p>
              The fastest path to a real quote. We’ll walk through your project
              size, variety options, location, and timing, then book you a
              delivery or install date.
            </p>
            <a href="tel: +18001234567">
              <button>1-800-123-4567</button>
            </a>
          </div>
          <div className="hours-of-operation">
            <h4>Hours</h4>
            <div id="weekdays">
              <span>Mon - Fri</span>
              <span>7:00am - 5:00pm</span>
            </div>
            <div id="saturday">
              <span>Saturday</span>
              <span>7:00am - 4:00pm</span>
            </div>
            <div id="sunday">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
          <div className="office-address">
            <h4>Office</h4>
            <p>123 Main St</p>
            <p>New Haven, Connecticut 06510</p> {/* Dummy Address */}
          </div>
        </div>

        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
