import "./InstallationGuide.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import CountyButtons from "../../components/County_buttons";

export default function SodInstallationGuide() {
  return (
    <>
      <div className="install-header">
        <h5>❀ The Complete Connecticut Homeowner Guide ❀</h5>
        <h1>How To Install Sod, From First Pallet To Finished Lawn</h1>
        <p>
          Honest guidance on whether to DIY or hire a pro — plus the exact
          step-by-step process our crews use across CT.
        </p>

        <a href="tel: +18001234567">
          <button className="call-button">Call 1-800-123-4567</button>
        </a>
        <Link to="../contact">Get A Free Quote</Link>
      </div>

      <div className="info-bar">
        <div className="bold-info-bar">
          <span>All Towns</span>
          <span>Fresh Cut</span>
          <span>2-3 Weeks</span>
        </div>
        <div className="small-info-bar">
          <span>Across Connecticut</span>
          <span>Off the Farm Daily</span>
          <span>Daily-Water Window</span>
        </div>
      </div>

      <div className="table-of-contents">
        <p>In This Guide</p>
        <ul className="contents-list">
          <li>
            <HashLink smooth to="/installation_guide#diy_vs_pro">
              DIY vs. Hire a Pro
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/installation_guide#delivery">
              What NE Sod Delivers
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/installation_guide#install_process">
              The Installation Process
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/installation_guide#sod_varieties">
              Sod Varieties
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/installation_guide#aftercare">
              Watering & Aftercare
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/installation_guide#why">
              Why Choose NE Sod
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/installation_guide#timing">
              Timing & Scheduling
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/installation_guide#where">
              Where We Install
            </HashLink>
          </li>
        </ul>
      </div>

      <div className="notice-message">
        <p>
          Installing a new sod lawn is one of the fastest ways to transform a
          property. Unlike seed — months of patience and careful care — sod
          delivers an <b>instant mature lawn</b>, green, dense, and usable
          within weeks.
        </p>
        <p>
          But behind that instant transformation is a real process with real
          decisions. The one that matters most for most homeowners is the first:{" "}
          <b>do you install it yourself, or hire it out?</b> This guide answers
          that honestly, then gives you what you need to succeed either way.
        </p>
      </div>

      <div className="diy">
        <p>The first decision</p>
        <h2>DIY vs. Hire a Pro</h2>
        <div id="diy_vs_pro">
          <p>
            Most homeowners landing here are trying to answer one question. The
            answer depends on four factors — being honest about each saves you
            from the most common mistake: starting a DIY project and either
            giving up halfway or finishing with a lawn that underperforms for
            years.
          </p>
          <div className="pros-cons-grid">
            <div className="diy-item">
              <h4 id="item-header">DIY</h4>
              <h4>DIY Makes Sense When…</h4>
              <ul>
                <li>The area is under ~1,200 sq ft</li>
                <li>You have prior heavy yard work experience</li>
                <li>
                  You own (or can rent) sod cutters, rototillers, lawn rollers
                </li>
                <li>You can dedicate a full weekend with the right weather</li>
                <li>You have help carrying and laying heavy pieces</li>
                <li>You can water 2–4 times daily for the first two weeks</li>
              </ul>
            </div>

            <div className="pro-item">
              <h4 id="item-header">Pro</h4>
              <h4>Hire It Out When…</h4>
              <ul>
                <li>The area is larger than ~1,200–2,000 sq ft</li>
                <li>You don't own the equipment</li>
                <li>A full weekend of hard labor isn't realistic</li>
                <li>You want it done correctly the first time</li>
                <li>
                  Your schedule doesn't allow an uninterrupted install window
                </li>
                <li>
                  You're already investing in sod and don't want install errors
                  to compromise the outcome
                </li>
              </ul>
            </div>
          </div>

          <div className="reality-check">
            <h5>The Honest Reality</h5>
            <p>
              A typical <b>5,000 sq ft DIY install</b> involves roughly{" "}
              <b>9–10 pallets</b> of sod, each weighing <b>750 to 2,000 lbs</b>.
              That's a physically demanding, multi-day project. Factor in
              equipment rental, topsoil, helpers, and the value of your own
              weekend — full-service installation often costs less than people
              assume, while delivering dramatically better results.
            </p>
          </div>
          <p>
            We're not pushing every homeowner toward full installation. Small
            projects, experienced DIYers, and homeowners who genuinely enjoy the
            work do great installations all the time. But if you're on the
            fence, get a quote before committing to a project that may end up
            costing more in time, back pain, and rework than the pro option
            would have.
          </p>
        </div>
      </div>

      <div className="service-levels">
        <p>Three levels of service</p>
        <h2>What CT Sod Delivers</h2>
        <div id="delivery">
          <p>
            Three service tiers, sized to fit any project across the Northeast.
          </p>
          <div className="delivery-list">
            <ul>
              <li>
                <div className="delivery-only">
                  <h4>Sod Delivery Only</h4>
                  <p>
                    Fresh, farm-cut sod delivered on pallets, ready for you to
                    install. Right for experienced DIYers, landscape contractors
                    buying wholesale, and homeowners who want the savings of
                    self-install and are prepared for the work.
                  </p>
                  <Link className="small-link" to="../pallet_delivery">
                    See sod pallet delivery logistics →
                  </Link>
                </div>
              </li>
              <li>
                <div className="deliv-site-prep">
                  <h4>Delivery + Site Preparation</h4>
                  <p>
                    We deliver the sod and prep your site — spraying and
                    removing existing grass, grading, bringing in fresh topsoil
                    if needed, leaving you with a ready-to-install surface. You
                    handle the laying. Our most practical middle-ground service.
                  </p>
                </div>
              </li>
              <li>
                <div className="installation">
                  <h4>Full-Service Installation</h4>
                  <p>
                    We handle everything: old lawn removal, grading, topsoil,
                    sod delivery, laying, rolling, and initial watering. You get
                    a finished lawn without touching a shovel. Most popular for
                    homeowners who want the result without the work — and the
                    option that delivers the best long-term outcomes.
                  </p>
                  <Link className="small-link" to="../sod_installation">
                    See full-service sod installation →
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="notice-popup">
            <p>
              Pricing varies based on project size, site conditions, and prep
              level. Most homeowners are surprised by how affordable full
              installation turns out to be once they factor in the true cost of
              DIY — pallet delivery, equipment rental, topsoil, helpers, and a
              weekend of their own time. Request a free quote for straight
              numbers on your project.
            </p>
          </div>
        </div>
      </div>

      <div className="what-happens">
        <p>What actually happens</p>
        <h2>The Complete Installation Process</h2>
        <div id="install_process">
          <p>
            Whether you install it yourself or watch us do it, here's exactly
            what happens from decision to finished lawn.
          </p>
          <div className="process-list">
            <ul id="process-list-items">
              <li>
                <h4>Site Assessment</h4>
                <p>
                  Measure square footage, evaluate existing lawn and soil,
                  identify shade vs. sun zones, check drainage, and confirm
                  access for delivery.
                </p>
              </li>
              <li>
                <h4>Old Lawn Removal</h4>
                <p>
                  Sod cutter or herbicide-and-rake approach. The new sod must
                  sit on bare, prepared soil — never on top of existing turf.
                </p>
              </li>
              <li>
                <h4>Grading & Topsoil</h4>
                <p>
                  Loosen the top 4–6 inches, add 2–3 inches of fresh topsoil for
                  renovations, grade to a slight slope away from buildings,
                  hand-rake debris-free.
                </p>
              </li>
              <li>
                <h4>Sod Selection & Delivery</h4>
                <p>
                  Pick the right variety (see{" "}
                  <HashLink smooth to="/installation_guide#sod_varieties">
                    Sod Varieties
                  </HashLink>
                  below). Schedule delivery for a day you're ready to install
                  immediately — sod sitting on a pallet through a summer weekend
                  is not the same sod it was on Friday.
                </p>
              </li>
              <li>
                <h4>Lay the Sod</h4>
                <p>
                  Start with a straight edge, stagger seams brickwork-style,
                  press joints tight without overlaps, cut to fit with a sharp
                  utility knife, then roll lightly with a water-filled lawn
                  roller for soil contact.
                </p>
              </li>
              <li>
                <h4>Water Immediately</h4>
                <p>
                  Within 30 minutes of installation, saturate so soil is moist
                  4–6 inches deep. Don't wait until the whole yard is laid —
                  water in sections as you go in warm weather.
                </p>
              </li>
            </ul>
          </div>

          <div className="pacing-grid">
            <div className="pacing-item">
              <h5>DIY Pace</h5>
              <p>
                A capable adult can lay one pallet (500–600 sq ft) in 1–2 hours.
                A 5,000 sq ft lawn = 10–20 hours of labor, usually a full day or
                weekend with a helper.
              </p>
            </div>
            <div className="pacing-item">
              <h5>Pro Pace</h5>
              <p>
                Our crews average considerably faster — team, equipment, and
                workflow are optimized for sod. A full-service install we'd
                schedule for a single day is often a two-day DIY project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="match-grass">
        <p>Match the grass to your site</p>
        <h2>Sod Varieties</h2>
        <div id="sod_varieties">
          <p>
            The Northeast is cool-season grass country. Three common variety
            families have meaningfully different strengths.
          </p>
          <div className="variety-grid">
            <div className="variety-item">
              <h5>Classic Carpet Lawn</h5>
              <h4>Kentucky Bluegrass</h4>
              <p>
                Dense, beautiful, fine-blade classic Northeast lawn. Requires
                full sun and regular watering.
              </p>
            </div>
            <div className="variety-item">
              <h5>Drought-Tough</h5>
              <h4>Tall Fescue Blends</h4>
              <p>
                Deeper-rooting and more drought-tolerant. Handles some shade and
                inconsistent watering better than KBG.
              </p>
            </div>
            <div className="variety-item">
              <h5>Best of Both</h5>
              <h4>90/10 Fescue/KBG</h4>
              <p>
                Tall fescue's deep roots with a small percentage of bluegrass
                for self-repair via rhizomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="watering">
        <p>The single most important factor</p>
        <h2>Watering & Aftercare</h2>
        <div id="aftercare">
          <p>
            Water is the one variable that decides whether new sod survives.
            Within 30 minutes of installation, saturate so soil is moist 4–6
            inches deep.
          </p>
          <ul className="scheduling-list">
            <li>
              <h4>Weeks 1–3</h4>
              <p>
                Daily watering, morning and late afternoon. Keep the sod and top
                inch of soil consistently moist — letting it dry out once kills
                establishment.
              </p>
            </li>
            <li>
              <h4>Weeks 4–5</h4>
              <p>
                Transition to every other day, going deeper each time to
                encourage roots to chase moisture downward.
              </p>
            </li>
            <li>
              <h4>Week 6+</h4>
              <p>
                Deep watering 2–3 times per week, delivering 1–1.5 inches total
                per week. This progressive reduction is what trains roots to
                grow deep.
              </p>
            </li>
          </ul>
          <div className="watering-notice">
            <p>
              Shallow, frequent watering forever creates shallow-rooted lawns
              that struggle in drought. The progressive reduction above is
              non-negotiable.
            </p>
          </div>

          <div className="post-install-grid">
            <div className="post-item">
              <h4>✂</h4>
              <h5>Mowing</h5>
              <p>
                Wait until grass reaches 3–4 inches, typically 2–3 weeks after
                install once the tug test passes. Mow at the highest setting;
                never remove more than one-third of the blade.
              </p>
            </div>
            <div className="post-item">
              <h4>🌱</h4>
              <h5>Fertilizing</h5>
              <p>
                Wait 30 days before first application. Sod arrives
                pre-fertilized — high-nitrogen too early creates weak, shallow
                roots.
              </p>
            </div>
            <div className="post-item">
              <h4>👟</h4>
              <h5>Traffic</h5>
              <p>
                Minimize foot traffic for 3–4 weeks. Light walking is fine;
                sustained use should wait until the lawn is fully anchored.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="we-bring">
        <p>What we bring</p>
        <h2>Why Homeowners Choose NE Sod</h2>
        <div id="why">
          <ul className="why-list">
            <li>
              <h5>Farm-fresh sod, cut to order</h5>
              <p>
                We don't sit on inventory. Your sod is cut fresh for your
                delivery window and installed the same day when possible — the
                way sod is supposed to be handled.
              </p>
            </li>
            <li>
              <h5>Experienced crews who do this every day</h5>
              <p>
                Sod installation is deceptively difficult. The technique, the
                pace, the watering timing, the soil contact — small errors
                compound into major problems weeks later. Our crews install
                hundreds of lawns per season.
              </p>
            </li>
            <li>
              <h5>Full-service coverage across Connecticut</h5>
              <p>
                Through all counties in Connecticut. If you're in the state, we
                deliver and install
              </p>
            </li>
            <li>
              <h5>Honest guidance, not just sales</h5>
              <p>
                We'll tell you when DIY makes more sense. We'll recommend the
                variety that fits your property, not the one with the highest
                margin. The goal is a lawn that performs for years — satisfied
                customers become referrals.
              </p>
            </li>
            <li>
              <h5>The truth about your soil</h5>
              <p>
                A beautiful new lawn on biologically depleted soil underperforms
                for decades. We explain what we see, what prep makes sense, and
                what to expect — no sugarcoating. See soil biology and new sod.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="when">
        <p>When to install in the Northeast</p>
        <h2>Timing & Scheduling</h2>
        <div id="when">
          <div className="peak-time">
            <div className="peak-item">
              <h4>Spring Peak (April – May)</h4>
              <p>
                Cool soil, frequent rainfall, strong rooting before summer heat.
                One of the two equal-peak install windows.
              </p>
            </div>
            <div className="peak-item">
              <h4>Fall Peak (September – October)</h4>
              <p>
                Warm soil, cool air, excellent root growth before winter. The
                other equal-peak window — lawn is well-established by the
                following spring.
              </p>
            </div>
          </div>
          <div className="okay-time">
            <div className="okay-item">
              <h4>June & November — Okay</h4>
              <p>
                Solid shoulder months around the peaks. Cool enough to root well
                without the watering load of high summer.
              </p>
            </div>
            <div className="okay-item">
              <h4>Summer (July & August) — Diligent Watering</h4>
              <p>
                Possible but requires significantly more water management. Best
                for buyers committed to the watering schedule.
              </p>
            </div>
          </div>
          <div className="bad-time">
            <h4>December – February — Dormant Install</h4>
            <p>
              Sod can still go down as long as the ground isn't frozen, but the
              grass is fully dormant — it won't green up or root meaningfully
              until spring soil temperatures return. The lawn finishes
              establishing in spring.
            </p>
          </div>

          <div className="availability-notice">
            <p>
              <b>Spring and fall calendars fill fast.</b> Reach out before peak
              season locks up — most orders ship within <b>2–7 days</b>, but the
              prime install dates go first.
            </p>
          </div>
        </div>
      </div>

      <div className="service-hubs">
        <p>Service area hubs</p>
        <h2>Where We Install</h2>
        <div id="where">
          <p>
            Full-service sod installation across 8 Northeast states. Jump to
            your state hub for crew coverage, lead times, and county-level
            service areas.
          </p>

          <CountyButtons />
        </div>
      </div>
    </>
  );
}
