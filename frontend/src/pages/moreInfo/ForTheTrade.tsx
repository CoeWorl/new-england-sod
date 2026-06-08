import "./ForTheTrade.css";
import { Link } from "react-router-dom";

export default function ForTheTrade() {
  return (
    <>
      <div className="info-header">
        <h1>Built For The Trade. Available to Everyone.</h1>
        <p>
          Roughly half of our volume goes to landscape contractors, landscape
          architects, and golf course superintendents across the Northeast. The
          fresh-cut-against-the-order model, multi-pallet jobsite delivery, and
          cultivar-level variety fluency are built for trade specs — not bolted
          on as an afterthought.
        </p>
        <a href="tel: +18001234567">
          <div className="call-button">1-800-123-4567</div>
        </a>
        <p>
          Trade quote line · Ask for project pricing, scheduled deliveries, or
          established-account terms
        </p>
      </div>

      <div className="resource-bar">
        <div className="contractor-container">
          <h5>Landscape Contractors & GCs</h5>
          <h3>Scheduled deliveries against your install calendar</h3>
          <p>
            Standing weekly orders, multi-job staging, forklift-placed pallets
            on the lot exactly where the crew needs them. Negotiated pricing on
            volume jobs. Established accounts can request payment terms after a
            few clean jobs.
          </p>
          <Link to="../contractors">How we work with crews →</Link>
        </div>
        <div className="designer-container">
          <h5>Landscape Architects & Designers</h5>
          <h3>Variety specs, cultivar details, and project quotes</h3>
          <p>
            Species- and cultivar-level specifications, palette-split orders
            matched to site zoning, and project-specific quoting at the bid
            stage. We’ll talk through KBG vs Tall Fescue vs RTF vs blends for
            the actual site conditions.
          </p>
          <Link to="../designers">Spec resources →</Link>
        </div>
        <div className="golf-course-container">
          <h5>Golf Course Superintendents</h5>
          <h3>
            Bentgrass, KBG & fescue for tees, divots, country club grounds
          </h3>
          <p>
            Tee complex bentgrass renovations, fairway divot replacement
            programs, country club estate grounds. Multi-day delivery
            coordination, same-week response for urgent spot work, and cultivar
            sourcing across specialty growers.
          </p>
          <Link to="../golf_course">Golf course program →</Link>
        </div>
      </div>

      <div className="why-container">
        <div className="why-header">
          <h5>Why The Trade Buys From Us</h5>
          <h2>Operational fit, not just pricing</h2>
        </div>
        <div className="why-grid">
          <div className="why-grid-item">
            <h4>Fresh-cut against your install date</h4>
            <p>
              Sod is cut against the delivery date you give us — not pulled off
              a yard pallet that’s been sitting for a week. For trade crews
              working in summer heat, the difference between Day-1 sod and Day-7
              sod is the difference between a clean install and a callback.
            </p>
          </div>
          <div className="why-grid-item">
            <h4>Cultivar-level fluency, not “just green stuff”</h4>
            <p>
              Our KBG, Tall Fescue, RTF, and blend sod come from established
              Northeast and Mid-Atlantic sod growers running NTEP-evaluated
              proprietary cultivar blends. We can walk through species, cultivar
              mix, and performance expectations for the spec sheet. Exact blend
              composition shared on request per project.
            </p>
          </div>
          <div className="why-grid-item">
            <h4>Sod-only install crews</h4>
            <p>
              When the GC wants us to install too, our crews work full-time on
              sod jobs — tighter seams, consistent grade, faster than a
              landscape generalist crew that lays sod twice a year. Or we
              deliver and your crew installs. Your call.
            </p>
          </div>
          <div className="why-grid-item">
            <h4>Jobsite forklift placement, not a curb dump</h4>
            <p>
              Our trucks carry all-terrain forklifts. Pallets go where the crew
              needs them on the property — not stacked at the end of a driveway
              requiring a third trip with a skid steer. Saves an hour of labor
              per job, minimum
            </p>
          </div>
          <div className="why-grid-item">
            <h4>State-wide delivery footprint</h4>
            <p>
              Installation across CT: all counties and towns. If your firm runs
              jobs in Connecticut, one supplier covers the map
            </p>
          </div>
          <div className="why-grid-item">
            <h4>Predictable communication</h4>
            <p>
              One number, one decision-maker, one phone call for every change
              order. 1-800-123-4567 reaches Tony directly. No portal logins, no
              chasing a regional rep across three branches.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
