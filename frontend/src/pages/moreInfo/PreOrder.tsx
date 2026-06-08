import "./PreOrder.css";
import { HashLink as Link } from "react-router-hash-link";
import FAQ from "../../components/FAQ";

export default function PreOrder() {
  return (
    <>
      <div className="pre-header">
        <h5>The Complete Sod Ordering Guide</h5>
        <h1>Before You Order</h1>
        <p>
          Everything that determines whether your new lawn thrives or struggles
          — sizing, varieties, prep, delivery, timing, and the failure points
          buyers don't see coming. From experts at delivering sod across
          Connecticut
        </p>
        <a href="tel: +18001234567">
          <button className="call-button">Call 1-800-123-4567</button>
        </a>
      </div>

      <div className="info-bar">
        <div className="bold-info-bar">
          <span>All Towns</span>
          <span>Same Day</span>
          <span>2–7 Days</span>
        </div>
        <div className="small-info-bar">
          <span>Across Connecticut</span>
          <span>Sod Must Be Laid</span>
          <span>Typical Lead Time</span>
        </div>
      </div>

      <div className="table-of-contents">
        <p>On This Page</p>
        <ul className="contents-list">
          <li>
            <Link smooth to="/before_you_order#project-size">
              Project Size
            </Link>
          </li>
          <li>
            <Link smooth to="/before_you_order#sod-varieties">
              Sod Varieties
            </Link>
          </li>
          <li>
            <Link smooth to="/before_you_order#site-prep">
              Site Prep
            </Link>
          </li>
          <li>
            <Link smooth to="/before_you_order#delivery-day">
              Delivery Day
            </Link>
          </li>
          <li>
            <Link smooth to="/before_you_order#what-goes-wrong">
              What Goes Wrong
            </Link>
          </li>
          <li>
            <Link smooth to="/before_you_order#time-and-season">
              Timing & Seasons
            </Link>
          </li>
          <li>
            <Link smooth to="/before_you_order#diy-install">
              DIY & Install
            </Link>
          </li>
          <li>
            <Link smooth to="/before_you_order#faq">
              Common Questions
            </Link>
          </li>
          <li>
            <Link smooth to="/before_you_order#coverage">
              State Coverage
            </Link>
          </li>
        </ul>
      </div>

      <div className="notice-message">
        <p>
          <b>
            Ordering sod in Connecticut is fundamentally different from ordering
            most landscape materials.
          </b>{" "}
          Sod is a perishable, living product on a tight clock from the moment
          it leaves the farm — harvested fresh, palletized, transported, and
          installed the same day. Treating it like bulk material is the single
          most common reason new lawns fail in the region.
        </p>
        <p>
          This guide explains how sod ordering actually works across Connecticut
          — applicable to ordering from any reputable supplier.
        </p>
      </div>

      <div className="where-to-start">
        <p>Where to Start</p>
        <h2>Project Size Determines Process</h2>
        <div id="project-size">
          <p>
            Before anything else, identify the size of the project — the
            ordering process is operationally different at each scale.
          </p>
          <div className="size-grid">
            <div className="size-item">
              <h5>SMALL</h5>
              <b>1–3 pallets · 500–1,500 sq ft</b>
              <p>
                Backyard repairs, dog-damaged sections, fill-in patches,
                post-pool restoration. Typically homeowner-installed. Per-sq-ft
                pricing is highest at this scale.
              </p>
            </div>
            <div className="size-item">
              <h5>MID-SIZE</h5>
              <b>4–9 pallets · 2,000–4,500 sq ft</b>
              <p>
                Small yards, sections of larger yards, partial lawn
                replacements. Mix of homeowner and professionally installed.
                Per-sq-ft pricing drops meaningfully here.
              </p>
            </div>
            <div className="size-item">
              <h5>SUBSTANTIAL</h5>
              <b>10–20 pallets · 5,000–10,000 sq ft</b>
              <p>
                Full lawn replacements on residential properties, large
                new-construction installs. Almost always professionally
                installed. Pre-order site walk recommended.
              </p>
            </div>
            <div className="size-item">
              <h5>LARGE / ESTATE</h5>
              <b>20+ pallets · 10,000+ sq ft</b>
              <p>
                Estate-scale residential, commercial, athletic fields,
                full-construction landscape jobs. Multi-day staggered delivery,
                dedicated trucking, full coordination.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pick-grass">
        <p>Pick the right grass for your site</p>
        <h2>Cool-Season Sod Varieties</h2>
        <div id="sod-varieties">
          <p>
            Northeast sod is cool-season grass. The four common varieties have
            meaningfully different strengths — match the variety to your sun,
            traffic, and irrigation.
          </p>
          <div className="grass-grid">
            <div className="grass-item">
              <h5>CLASSIC CARPET LAWN</h5>
              <h4>Kentucky Bluegrass</h4>
              <p>
                Fine blades, dark blue-green color, self-repairing through
                rhizomes. Best for irrigated, full-to-light-shade properties.
              </p>
            </div>
            <div className="grass-item">
              <h5>DROUGHT-TOUGH · +$.10/sq ft</h5>
              <h4>Turf-Type Tall Fescue</h4>
              <p>
                Deepest root system — multi-foot roots for drought tolerance and
                heavy traffic without irrigation. The choice for full-sun yards
                without sprinklers.
              </p>
            </div>
            <div className="grass-item">
              <h5>MOST VERSATILE</h5>
              <h4>Bluegrass-Fescue Blend</h4>
              <p>
                Balanced blend for mixed sun-and-shade. KBG contributes color
                and fine texture; tall fescue adds deep roots and durability.
              </p>
            </div>
            <div className="grass-item">
              <h5>PREMIUM · BEST FOR DOGS</h5>
              <h4>RTF (Rhizomatous Tall Fescue)</h4>
              <p>
                Premium tall fescue with underground runners that fill in worn
                paths and pet-urine damage. Most dog-resistant cool-season sod.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="work-decides-outcome">
        <p>The work that decides your outcome</p>
        <h2>Site Preparation</h2>
        <div id="site-prep">
          <p>
            Sod is a thin, flexible layer that conforms to whatever is
            underneath it. Prep is where most lawns succeed or fail — long
            before the truck arrives.
          </p>
          <div className="checklist">
            <h4>Standard Prep Checklist</h4>
            <ul>
              <li>
                Remove existing grass, weeds, and debris from the install area
              </li>
              <li>
                Remove existing grass, weeds, and debris from the install area
              </li>
              <li>
                Add fresh topsoil if existing soil is poor — typically 2–3 inch
                layer for renovations (topsoil depth requirements)
              </li>
              <li>
                Grade to final contour with a slight slope away from buildings
              </li>
              <li>
                Hand-rake free of rocks, roots, and debris — anything that would
                bump under the sod
              </li>
              <li>
                Lightly water prepared soil the day before so it is moist but
                not muddy
              </li>
              <li>
                Confirm truck access is clear (gates open, vehicles moved, low
                branches trimmed)
              </li>
              <li>
                Have your install crew or helpers on-site, ready for delivery
              </li>
            </ul>
          </div>
          <div className="notice">
            <p id="grid header">
              For sandy or compromised soils, amending with compost meaningfully
              improves establishment
            </p>
            <div className="notice-grid">
              <div className="notice-item">
                <h6>SMALL PROJECT</h6>
                <p>
                  A weekend with a rented rototiller handles it. Don't defer
                  prep to delivery day — that's how sod sits in the driveway.
                </p>
              </div>
              <div className="notice-item">
                <h6>MID-SIZE PROJECT</h6>
                <p>
                  A committed homeowner with the right tools, or a half-day
                  landscaper job. Finish 1–2 days before delivery.
                </p>
              </div>
              <div className="notice-item">
                <h6>SUBSTANTIAL PROJECT</h6>
                <p>
                  Hire a landscaper or excavator. Multiple days for a homeowner,
                  full day or two for a pro crew with equipment.
                </p>
              </div>
              <div className="notice-item">
                <h6>LARGE/ESTATE PROJECT</h6>
                <p>
                  Prep is a project of its own — 5–10 days with a pro crew.
                  Finish 2–3 days before sod, final grade check day-of.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="truck-arrival">
        <p>What to expect when the truck arrives</p>
        <h2>Delivery Day — Step by Step</h2>
        <div id="delivery-day">
          <div className="delivery-list">
            <div className="delivery-item">
              <h5>Access Check</h5>
              <p>
                Forklift needs minimum 8 ft horizontal and ~10 ft vertical
                clearance, reasonable ground conditions, no paved surface
                required.
              </p>
            </div>
            <div className="delivery-item">
              <h5>Pallet Placement</h5>
              <p>
                All-terrain forklift places pallets where you need them on the
                property — not at the curb. Tell us the drop spot when ordering.
              </p>
            </div>
            <div className="delivery-item">
              <h5>Walk the Order</h5>
              <p>
                Confirm pallet count, variety, and condition before the driver
                leaves. Pull a top roll — look for vibrant green blades, dark
                moist soil, fresh grass-and-soil smell.
              </p>
            </div>
            <div className="delivery-item">
              <h5>Inspect for Stress</h5>
              <p>
                Sour, swampy, or musty smell = sod in trouble. Raise it before
                the truck leaves, not after.
              </p>
            </div>
            <div className="delivery-item">
              <h5>Same-Day Install</h5>
              <p>
                The non-negotiable rule: sod must be laid the day it arrives.
                Crew should be waiting when the truck shows up.
              </p>
            </div>
            <div className="delivery-item">
              <h5>Heat Management</h5>
              <p>
                When air temps exceed 85°F, lay immediately on arrival.
                Cool-season pallets are unwrapped — crossed-pattern stacks that
                need airflow and a clock.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="order-stage">
        <p>Almost all of it is preventable at order stage</p>
        <h2>What Goes Wrong Most Often</h2>
        <div id="what-goes-wrong">
          <p>
            After 30+ years across the Northeast, the same problems account for
            almost every failed install. None are unfixable. All are preventable
            if buyers think about them upfront.
          </p>
          <div className="warning-list">
            <div className="warning-item">
              <b>Access width that did not get measured</b>
              <p>
                Forklift needs 8 ft horizontal clearance. Driveway gates often
                run narrower than buyers eyeball. Prevention: measure with a
                tape before ordering.
              </p>
            </div>
            <div className="warning-item">
              <b>Overhead clearance that did not get checked</b>
              <p>
                Driveway wide enough but a low branch hangs at 9 ft. Same
                problem. Prevention: check overhead at every point along the
                forklift's path.
              </p>
            </div>
            <div className="warning-item">
              <b>Surface prep that left bumps and rocks</b>
              <p>
                Rocks and debris translate directly into bumps and dead spots.
                Hand-rake smooth, not just tilled. Treat it like prepping a
                floor before laying carpet.
              </p>
            </div>
            <div className="warning-item">
              <b>Install crew that didn't show</b>
              <p>
                Homeowner schedules delivery, books landscaper for same day.
                Landscaper bumps to another job. Sod sits in summer heat.
                Prevention: lock in the crew first.
              </p>
            </div>
            <div className="warning-item">
              <b>Watering that didn't start fast enough</b>
              <p>
                New sod needs water within the first hour and daily for two
                weeks. Follow the watering schedule. Letting it dry out once
                kills establishment.
              </p>
            </div>
            <div className="warning-item">
              <b>Wrong variety for the conditions</b>
              <p>
                Full-sun no-irrigation yard sodded with Kentucky Bluegrass.
                Heavy-shade yard sodded with tall fescue. The wrong variety is
                the most common reason lawns disappoint.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="when-to-install">
        <p>When to install in the Northeast</p>
        <h2>Timing & Seasons</h2>
        <div id="time-and-season">
          <div className="peak-install">
            <h4>Peak Windows</h4>
            <p>
              April–May and September–October — both equal-peak windows. Cool
              soil, strong rooting, and lawns that are well-established before
              summer heat or winter dormancy.
            </p>
          </div>
          <div className="okay-install">
            <div className="jun-nov">
              <h4>June & November — Okay</h4>
              <p>
                Solid shoulder months around the peaks. Cool enough to root well
                without the watering load of high summer.
              </p>
            </div>
            <div className="jul-aug">
              <h4>Summer (July & August) — Diligent Watering</h4>
              <p>
                Installation is possible but requires significantly more water
                management. Sod going down in 85°+ needs frequent watering
                through establishment.
              </p>
            </div>
          </div>
          <div className="bad-install">
            <h4>December – February — Dormant Install</h4>
            <p>
              Sod can still go down as long as the ground isn't frozen, but the
              grass is fully dormant — it won't green up or root meaningfully
              until spring soil temperatures return. The lawn finishes
              establishing in spring.
            </p>
          </div>
          <div className="lead-time-info">
            <h4>Lead Time Reality</h4>
            <p>
              Sod orders run on harvest cycles and trucking availability, not
              normal-fleet logistics. Typical lead time is <b>2-7 days</b> for
              delivery, with a bit more runway during peak windows. Faster
              delivery on dedicated trucking is available at higher cost.
            </p>
          </div>
        </div>
      </div>

      <div className="diff-workflow">
        <p>Decide at order time — the workflows are different</p>
        <h2>Decide at order time — the workflows are different</h2>
        <div id="diy-install">
          <div className="options">
            <div className="options-item">
              <h6>OPTION A</h6>
              <h4>Order for DIY Install</h4>
              <ul>
                <li>Pay sod-only delivered pricing</li>
                <li>Handle prep yourself or hire it out separately</li>
                <li>Coordinate the install crew or do it yourself</li>
                <li>Delivery scheduled for the morning of install day</li>
                <li>
                  Sod knife, lawn roller, hose with spray nozzle, wheelbarrow
                  ready
                </li>
                <li>Lock in the install help before placing the order</li>
              </ul>
            </div>
            <div className="options-item">
              <h6>OPTION B</h6>
              <h4>Order With Installation</h4>
              <ul>
                <li>Sod-only pricing PLUS installation cost</li>
                <li>Add prep cost if topsoil and grading are needed</li>
                <li>
                  Same-day delivery and install — crew arrives with the truck
                </li>
                <li>Rolling, watering coordination, and cleanup handled</li>
                <li>
                  Site must arrive prepped, or full prep + install is quoted
                </li>
                <li>Crews scale with project size to maintain pace</li>
              </ul>
            </div>
          </div>
          <div className="considerations">
            <h4>Large Project Considerations</h4>
            <p>
              Multi-day staggered delivery to match install pace. Crew capacity
              scales — typical install pace ranges <b>5,000-30,000 sq ft</b>
              per day depending on crew size and site complexity. Site walk
              before order placement, coordination with landscape architect or
              GC when applicable.
            </p>
          </div>
        </div>
      </div>

      <div className="quick-answers">
        <p>Quick answers</p>
        <h2>Frequently Asked Questions</h2>
        <div id="faq">
          <FAQ />
        </div>
      </div>
    </>
  );
}
