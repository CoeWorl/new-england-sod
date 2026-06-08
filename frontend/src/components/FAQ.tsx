import "./FAQ.css";
import { useState, useRef, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "How early should an order be placed?",
    answer:
      "Most orders ship within 2–7 days of placement. Peak windows (first two weeks of May, mid-September) can run a little longer — plan ahead when you can. Estate-scale projects: 2–3 weeks of notice allows for site visits and staggered delivery. Compressed timelines: dedicated trucking is available at higher cost.",
  },
  {
    question: "How much sod do I need?",
    answer:
      "Measure your install area in square feet (length × width). A standard pallet covers ~500 sq ft. Add ~5–10% for cuts and waste around curves, paths, and beds. Not sure? Send us the dimensions and we'll size it for you.",
  },
  {
    question: "How is sod priced?",
    answer:
      "Pricing is driven by three things: square footage, variety (Kentucky Bluegrass / KB Mix, Tall Fescue, or RTF), and delivery region. Small orders (1–3 pallets, under ~1,500 sq ft) are billed at flat-pallet rates; larger orders shift to a per-square-foot rate that drops as the order scales (700, 1,200, 2,100, 4,000+ sq ft tiers). Every order also includes a $99 delivery fee and a per-pallet handling charge — all shown pre-tax. Orders 500–900 sq ft include an additional $50 small-order fee to cover the cost of dispatching a truck for a small load. Installation and prep are quoted separately. Sales tax is calculated at checkout based on your delivery address. The easiest way to see the number is the sod calculator at the bottom of this page — pick a variety, enter your square footage, and it shows the full pre-tax delivered total in real time.",
  },
  {
    question: "What's the difference between the varieties?",
    answer:
      "Kentucky Bluegrass = fine-blade classic carpet look, needs irrigation. Tall Fescue = deep roots, drought-tough, best for full sun without sprinklers. Bluegrass-Fescue Blend = balanced for mixed sun/shade. RTF = premium tall fescue with self-repair, the most dog-resistant cool-season sod.",
  },
  {
    question: "Do you deliver to my area?",
    answer: "Yes across CT. Call with your ZIP and we'll confirm the rate.",
  },
  {
    question: "Can sod be delivered on a Saturday?",
    answer:
      "Possible but should be confirmed at order placement, not requested as a last-minute change. Most regions: Monday–Friday is standard.",
  },
  {
    question: "What if the truck can't access the driveway?",
    answer:
      "Driver's first option is a different placement spot the forklift can reach. If nothing works, sod gets dropped at the curb and the buyer is responsible for moving it. Measure access before ordering — 8 ft horizontal and ~10 ft vertical clearance is non-negotiable.",
  },
  {
    question: "Can sod sit on the pallet for a few days?",
    answer:
      "It should not. Sod is harvested fresh for each order — laying same-day is the standard. In cool weather out of direct sun it survives longer than in summer heat, but same-day is always the best outcome.",
  },
  {
    question: "How much water does new sod need?",
    answer:
      "Water within the first hour after install, then daily for the first two weeks (early morning is best). After that, scale back to every other day until roots establish. Letting it dry out once in the first two weeks can kill establishment.",
  },
  {
    question: "When can I walk or mow on new sod?",
    answer:
      "Stay off for the first 2 weeks while roots tack in. Light foot traffic is OK after that. First mow at ~3 weeks once the sod resists a gentle tug — set the mower high (3.5–4 in) and only cut the top third of the blade.",
  },
  {
    question: "Do you offer installation, or just delivery?",
    answer:
      "Both. Delivery-only is the most common order; full prep + install is available for projects where you want one crew to handle everything. Mid-size and larger projects in CT and surrounding regions are the typical install scope — call to discuss.",
  },
  {
    question: "When is payment due?",
    answer:
      "Payment is due at the time of order. Sod is cut fresh from the farm for each order, so the order is locked in and paid up front — that's what reserves your pallets on the harvest schedule and your spot on the delivery route. Call for current payment methods and any deposit specifics on larger jobs.",
  },
];

// Animated Body
interface AccordianBodyProps {
  open: boolean;
  children: React.ReactNode;
}

function AccordionBody({ open, children }: AccordianBodyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight);
  }, [open]);

  return (
    <div
      className={`faq-body${open ? " faq-body--open" : ""}`}
      style={{ maxHeight: open ? height : 0 }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

// Single FAQ row

interface FAQRowProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQRow({ item, isOpen, onToggle, index }: FAQRowProps) {
  const answerId = `faq-answer-${index}`;

  return (
    <li className="faq-item">
      <button
        className="faq-toggle"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span className="faq-question"> {item.question}</span>
        <span className="faq-icon" aria-hidden="true" />
      </button>

      <AccordionBody open={isOpen}>
        <div id={answerId} role="region" className="faq-answer">
          <p>{item.answer}</p>
        </div>
      </AccordionBody>
    </li>
  );
}

//Main Component

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = FAQ_DATA.filter((item) => item.question.toLowerCase());

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className="faq-section">
      <h2 className="sr-only">Frequently Asked Questions</h2>
      <header>
        <p className="faq-eyebrow">Support</p>
        <h2 className="faq-title">Frequently asked questions</h2>
        <p className="faq-subtitle">
          Quick answers to the most common questions. Can't find what you're
          looking for? Reach out and we'll help.
        </p>
      </header>

      <ul className="faq-list" role="list">
        {filtered.map((item, i) => (
          <FAQRow
            key={item.question}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </ul>
    </section>
  );
}
