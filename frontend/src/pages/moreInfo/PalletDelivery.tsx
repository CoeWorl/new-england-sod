import CountyButtons from "../../components/County_buttons";
import { Link } from "react-router-dom";
import "./PalletDelivery.css";

export default function PalletDelivery() {
  return (
    <>
      <div className="delivery-header">
        <h5>Pallet Delivery · Fresh Off The Farm</h5>
        <h1>Sod Pallet Delivery — Connecticut</h1>
        <p>
          Single pallet of sod — <b>$699 delivered</b> — covering ~500 sq ft.
          Volume pricing drops to <b>$0.66/sq ft</b> on larger orders. Fresh-cut
          for your delivery window, placed exactly where you’re working with an
          all-terrain forklift.
        </p>
        <a href="tel: +18001234567">
          <button className="call-button">Call 1-800-123-4567</button>
        </a>
        <Link className="calc-button" to="../sod_calculator">
          Calculate Delivered Price →
        </Link>
        <Link className="contact-button" to="../contact">
          Get a Written Quote
        </Link>
      </div>

      <div className="info-blob">
        <h3>What You Get with a Sod Pallet Delivery</h3>
        <p>
          A sod pallet is the standard unit of fresh-cut sod — roughly{" "}
          <b>500 square feet of grass per pallet</b>, made up of about{" "}
          <b>50 rolls measuring 2 feet by 5 feet each</b> . One pallet covers a
          small front yard or a starter back-lawn project. A typical suburban
          lawn needs 9 to 10 pallets; a large lot or estate often runs 17 to 20
          pallets or more.
        </p>
        <p>
          We deliver sod pallets across the Northeast — cut to order for your
          delivery window, transported directly from the farm to your property,
          and placed where you’re working with all-terrain forklifts. No
          middlemen, no inventory sitting on a lot, no compromises on freshness.
          The difference between a lawn that establishes beautifully and one
          that struggles for years often comes down to a single variable.
        </p>
        <h3>Sod Pallet Pricing — What a Pallet of Sod Costs Delivered</h3>
        <p>
          All-in delivered pricing, no separate freight quote, no callbacks. The
          number you see is the number we quote on the phone. Final invoice
          includes the sod, the pallet charge, delivery, and applicable state
          sales tax.
        </p>

        <ul className="size-list">
          <li>
            <p>
              <b>1 pallet (500 sq ft):</b> $699 delivered
            </p>
          </li>
          <li>
            <p>
              <b>600–1,100 sq ft:</b> $0.90 / sq ft
            </p>
          </li>
          <li>
            <p>
              <b>1,200–2,000 sq ft:</b> $0.75 / sq ft
            </p>
          </li>
          <li>
            <p>
              <b>2,100–3,900 sq ft:</b> $0.70 / sq ft
            </p>
          </li>
          <li>
            <p>
              <b>4,000+ sq ft:</b> $0.66 / sq ft (volume floor)
            </p>
          </li>
        </ul>

        <p>
          <b>Delivery fee:</b> $99 per order · <b>Pallet charge:</b> $20 per
          pallet · <b>Small-order fee:</b> $50 on small orders 500–900 sq ft ·
          <b>Variety upgrade:</b> +$0.10/sq ft for Tall Fescue.
        </p>
        <p>
          For an exact delivered total on your project, use the{" "}
          <Link to="../sod_calculator">sod cost calculator</Link> — no email
          required, no callback queue, just a live number.
        </p>

        <h3>Sod Pallet Specs — Size, Weight, and Coverage</h3>
        <ul className="specs-list">
          <li>
            <p>
              <b>Standard coverage:</b> 500 sq ft per pallet (~50 rolls @ 2′ ×
              5′ each)
            </p>
          </li>
          <li>
            <p>
              <b>Larger pallet option:</b> up to 600 sq ft, subject to
              availability and variety
            </p>
          </li>
          <li>
            <p>
              <b>Pallet weight:</b> 750–2,000 lbs depending on grass type, soil
              thickness, and moisture
            </p>
          </li>
          <li>
            <p>
              <b>Pallet footprint:</b> standard 48″ × 40″ wood pallet base
            </p>
          </li>
          <li>
            <p>
              <b>Forklift access needed:</b> firm, level staging area roughly 6′
              × 6′ per pallet, accessible from the truck path
            </p>
          </li>
        </ul>
        <p>
          For homeowners planning where the pallets will land: the ideal staging
          spot is flat, firm, shaded if possible, and close to where you’ll be
          laying. Driveways, patios, and compacted gravel work well. Grass works
          but protect it with plywood if you’re staging heavy pallets for more
          than a few hours. Heavier pallets require firm, accessible staging
          areas — our forklifts handle placement, but the pallet still needs
          solid ground to sit on.
        </p>

        <h3>Where We Deliver Sod Pallets — Whole-State Coverage</h3>
        <p>
          Fresh-cut sod pallet delivery across Connecticut. Click into your
          county for local pricing notes.
        </p>
        <CountyButtons />

        <h3>How Sod Pallet Delivery Works</h3>
        <ul className="delivery-instructions">
          <li>
            <p>
              <b>Place your order.</b> Call <b>1-800-123-4567</b> or{" "}
              <Link to="../contact">request a quote online</Link> with your
              address, square footage, and variety preference. We’ll confirm
              availability and lock pricing.
            </p>
          </li>
          <li>
            <p>
              <b>Scheduling.</b> Most pallet deliveries are scheduled 2–7 days
              from order placement. In peak season (late April–June,
              September–October), book 1–2 weeks ahead. Off-season, we usually
              accommodate within days. You get a specific time window the day
              before delivery.
            </p>
          </li>
          <li>
            <p>
              <b>Site preparation (by you, before we arrive).</b> Have your soil
              prepared and ready for immediate installation. Sod goes on the
              ground the same day it’s delivered — the deterioration clock
              starts the moment it leaves the farm. The{" "}
              <Link to="../installation_guide">sod installation guide</Link>{" "}
              covers the full prep checklist
            </p>
          </li>
          <li>
            <p>
              <b>Delivery and forklift placement</b> Our truck arrives in the
              scheduled window. The driver uses an all-terrain forklift to place
              pallets at your specified staging location. Offload typically
              takes 15–30 minutes depending on pallet count and site access. No
              curb dumps, no hand-bombing pallets across your yard.
            </p>
          </li>
          <li>
            <p>
              <b>Installation (your call).</b> DIY and install the same day, or
              arrange for our professional installation crews. See the{" "}
              <Link to="../installation_guide">sod installation guide</Link> for
              the full DIY process and professional service tiers.
            </p>
          </li>
        </ul>

        <h3>Installation Services (If You Don’t Want to Lay It Yourself)</h3>
        <p>
          Prefer not to handle the installation yourself? Our crews handle
          projects of all sizes — from small residential front yards to
          multi-acre commercial properties and{" "}
          <Link to="../golf_course_supplier">golf course installs</Link>. Three
          service tiers:
        </p>

        <ul className="service-list">
          <li>
            <p>
              <b>Sod pallet delivery only</b> (this page) — pallets delivered,
              you install.
            </p>
          </li>
          <li>
            <p>
              <b>Delivery + site preparation</b> — we handle old lawn removal,
              grading, and topsoil; you install.
            </p>
          </li>
          <li>
            <p>
              <b>Full-service installation</b> — we handle everything from prep
              to finished lawn.
            </p>
          </li>
        </ul>
        <p>
          See the <Link to="../installation_guide">sod installation guide</Link>{" "}
          for the DIY-vs-hire breakdown and{" "}
          <Link to="../contact">request a quote</Link> on any of the three
          service levels.
        </p>

        <h3>Getting the Best Results from Your Pallet Delivery</h3>
        <p>
          The first 24 hours after delivery determine whether your new lawn
          thrives or struggles. A few honest tips that dramatically improve
          outcomes whether you DIY or hire installation:
        </p>
        <p>
          <b>Install the same day.</b> Sod on a pallet is a plant in severe
          stress. Core pallet temperatures climb fast in summer heat, and tissue
          damage begins within 24 hours. Waiting until “tomorrow” is the single
          most common DIY mistake.
        </p>
        <p>
          <b>Water as you lay, not after you finish.</b> Each section should be
          watered within 30 minutes of being laid. Don’t wait until the whole
          lawn is complete — early sections dehydrate while late ones are still
          being installed.
        </p>
        <p>
          <b>Prepare soil before the pallet arrives.</b> Finished grading, pH
          correction, and topsoil amendments should all be done before delivery
          day. The{" "}
          <Link to="../installation_guide"> sod installation guide</Link> covers
          the full prep checklist.
        </p>
        <p>
          <b>Understand what’s happening underground.</b> New sod isn’t just
          “placed” — it’s a plant community recovering from transplant shock,
          rebuilding roots, and forming microbial partnerships with the soil.
          Owners who get the best long-term results understand the biology.
        </p>

        <h3>Timing and Seasonal Scheduling</h3>
        <p>
          Sod pallet delivery runs year-round, but cool-season sod establishes
          best in spring and fall. Peak demand windows are late April through
          June and September through October — book 1–2 weeks ahead during those
          months. Mid-summer and winter installations are possible with
          appropriate watering protocols and dormancy expectations, and pallet
          availability is usually next-day in those windows.
        </p>
      </div>
    </>
  );
}
