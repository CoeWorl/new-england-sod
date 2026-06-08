import "./SodCalculator.css";
import { useState, useEffect } from "react";

type GrassVariety = "kentucky_bluegrass" | "tall_fescue" | "rtf";

interface TierRow {
  label: string;
  sqFt: number;
  ratePerSqFt: number;
  pallets: number;
  isFlatRate: boolean;
  flatPrice: number;
  totalCost: number;
}

export default function SodCalculator() {
  // Input States
  const [len, setLen] = useState("");
  const [wid, setWid] = useState("");
  const [customSqFt, setCustomSqFt] = useState("");
  const [inputMode, setInputMode] = useState<"dimensions" | "direct">(
    "dimensions",
  );
  const [variety, setVariety] = useState<GrassVariety>("kentucky_bluegrass");
  const [includeWaste, setIncludeWaste] = useState(true);

  // Calculation Result States
  const [rawSqFt, setRawSqFt] = useState(0);
  const [adjustedSqFt, setAdjustedSqFt] = useState(0);
  const [orderedSqft, setOrderedSqFt] = useState(0);

  // table tiers
  const [tiers, setTiers] = useState<TierRow[]>([]);
  const [selectedTierIndex, setSelectedTierIndex] = useState<number | null>(
    null,
  );

  // Cost Line Items
  const [materialCost, setMaterialCost] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [palletFee, setPalletFee] = useState(0);
  const [smallOrderFee, setSmallOrderFee] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // tier matrix setup
  const staticTiers = [
    {
      label: "500 sq. ft.",
      sqFt: 500,
      ratePerSqFt: 0.9,
      isFlatRate: true,
      flatPrice: 699,
    },
    {
      label: "600 sq. ft.",
      sqFt: 600,
      ratePerSqFt: 0.9,
      isFlatRate: true,
      flatPrice: 749,
    },
    {
      label: "600 - 1,100 sq. ft.",
      sqFt: 1000,
      ratePerSqFt: 0.9,
      isFlatRate: false,
      flatPrice: 0,
    },
    {
      label: "1,200 - 2,000 sq. ft.",
      sqFt: 1600,
      ratePerSqFt: 0.75,
      isFlatRate: false,
      flatPrice: 0,
    },
    {
      label: "2,100 - 3,900 sq. ft.",
      sqFt: 3000,
      ratePerSqFt: 0.7,
      isFlatRate: false,
      flatPrice: 0,
    },
    {
      label: "4000 sq. ft. or more",
      sqFt: 4500,
      ratePerSqFt: 0.6,
      isFlatRate: false,
      flatPrice: 0,
    },
  ];

  // Trigger recalculations when variables change
  useEffect(() => {
    // Calculate Raw Square Footage based on input
    let baseArea = 0;
    if (inputMode === "dimensions") {
      const l = parseFloat(len) || 0;
      const w = parseFloat(wid) || 0;
      baseArea = l * w;
    } else {
      baseArea = parseFloat(customSqFt) || 0;
    }
    setRawSqFt(baseArea);

    const withWaste = includeWaste ? baseArea * 1.05 : baseArea;
    setAdjustedSqFt(withWaste);

    // Round up to matching 100 sq ft increments (Minimum 500 sq ft)
    let finalOrderSize = 0;
    if (withWaste > 0) {
      finalOrderSize = Math.max(500, Math.ceil(withWaste / 100) * 100);
    }
    setOrderedSqFt(finalOrderSize);

    const deliveryConstant = 99.0;

    // Map & Calculate dynamic pricing for ALL tiers
    const calculatedTiers: TierRow[] = staticTiers.map((tier) => {
      let targetSqFt = tier.sqFt;
      let matchesCurrentInput = false;

      if (finalOrderSize > 0) {
        if (tier.label === "500 sq. ft." && finalOrderSize === 500)
          matchesCurrentInput = true;
        else if (tier.label === "600 sq. ft." && finalOrderSize === 600)
          matchesCurrentInput = true;
        else if (
          tier.label.includes("600 - 1,100") &&
          finalOrderSize > 600 &&
          finalOrderSize <= 1100
        )
          matchesCurrentInput = true;
        else if (
          tier.label.includes("1,200 - 2,000") &&
          finalOrderSize >= 1200 &&
          finalOrderSize <= 2000
        )
          matchesCurrentInput = true;
        else if (
          tier.label.includes("2,100 - 3,900") &&
          finalOrderSize >= 2100 &&
          finalOrderSize <= 3900
        )
          matchesCurrentInput = true;
        else if (tier.label.includes("4000") && finalOrderSize >= 4000)
          matchesCurrentInput = true;
      }

      if (matchesCurrentInput) {
        targetSqFt = finalOrderSize;
      }

      const pallets = targetSqFt <= 600 ? 1 : Math.ceil(targetSqFt / 500);
      let calculatedMatCost = 0;
      let currentRate = tier.ratePerSqFt;

      // Add Premium Grass Upcharges to rates
      if (variety === "tall_fescue") currentRate += 0.1;
      if (variety === "rtf") currentRate += 0.4;

      if (tier.isFlatRate && variety === "kentucky_bluegrass") {
        // Base premium flat deals map matching baseline
        calculatedMatCost = tier.flatPrice - 99 - pallets * 20 - 50;
      } else if (tier.isFlatRate && variety === "tall_fescue") {
        calculatedMatCost =
          tier.flatPrice + targetSqFt * 0.1 - 99 - pallets * 20 - 50;
      } else if (tier.isFlatRate && variety === "rtf") {
        calculatedMatCost =
          tier.flatPrice + targetSqFt * 0.4 - 99 - pallets * 20 - 50;
      } else {
        calculatedMatCost = targetSqFt * currentRate;
      }

      const palletFeeTotal = pallets * 20.0;
      const smallOrder = targetSqFt >= 500 && targetSqFt <= 900 ? 50.0 : 0.0;

      const tierTotal =
        calculatedMatCost + deliveryConstant + palletFeeTotal + smallOrder;

      return {
        label:
          tier.label === "500 sq. ft." || tier.label === "600 sq. ft."
            ? tier.label
            : `${targetSqFt.toLocaleString()} sq. ft.`,
        sqFt: targetSqFt,
        ratePerSqFt: currentRate,
        pallets: pallets,
        isFlatRate: tier.isFlatRate,
        flatPrice: tier.flatPrice,
        totalCost: tierTotal,
      };
    });

    setTiers(calculatedTiers);

    // 3. Set the live output breakdown box based on where active square footage lands
    let activeIndex: number | null = null;
    if (finalOrderSize > 0) {
      if (finalOrderSize === 500) activeIndex = 0;
      else if (finalOrderSize === 600) activeIndex = 1;
      else if (finalOrderSize > 600 && finalOrderSize <= 1100) activeIndex = 2;
      else if (finalOrderSize >= 1200 && finalOrderSize <= 2000)
        activeIndex = 3;
      else if (finalOrderSize >= 2100 && finalOrderSize <= 3900)
        activeIndex = 4;
      else if (finalOrderSize >= 4000) activeIndex = 5;
    }
    setSelectedTierIndex(activeIndex);

    if (activeIndex !== null) {
      const activeTier = calculatedTiers[activeIndex];
      const delivery = 99.0;
      const palletCharges = activeTier.pallets * 20.0;
      const smallOrder =
        activeTier.sqFt >= 500 && activeTier.sqFt <= 900 ? 50.0 : 0.0;

      setMaterialCost(
        activeTier.totalCost - (delivery + palletCharges + smallOrder),
      );
      setDeliveryFee(delivery);
      setPalletFee(palletCharges);
      setSmallOrderFee(smallOrder);
      setTotalPrice(activeTier.totalCost);
    } else {
      // Reset if no values are typed
      setMaterialCost(0);
      setDeliveryFee(0);
      setPalletFee(0);
      setSmallOrderFee(0);
      setTotalPrice(0);
    }
  }, [len, wid, customSqFt, inputMode, variety, includeWaste]);

  return (
    <div className="sod-calc-container">
      <div className="calc-card-header">
        <h2>Sod Volume Pricing Calculator</h2>
        <p>
          Adjust inputs to see accurate pricing changes real-time across all
          delivery scales.
        </p>
      </div>

      {/* Input controls layout block */}
      <div className="calc-inputs-panel">
        <div className="toggle-container">
          <button
            className={inputMode === "dimensions" ? "active-toggle" : ""}
            onClick={() => setInputMode("dimensions")}
          >
            Measure Dimensions
          </button>
          <button
            className={inputMode === "direct" ? "active-toggle" : ""}
            onClick={() => setInputMode("direct")}
          >
            Known Total Sq Ft
          </button>
        </div>

        <div className="inputs-form-row">
          {inputMode === "dimensions" ? (
            <>
              <div className="input-field">
                <label>Length (Ft)</label>
                <input
                  type="number"
                  value={len}
                  onChange={(e) => setLen(e.target.value)}
                  placeholder="e.g. 50"
                />
              </div>
              <div className="input-field">
                <label>Width (Ft)</label>
                <input
                  type="number"
                  value={wid}
                  onChange={(e) => setWid(e.target.value)}
                  placeholder="e.g. 30"
                />
              </div>
            </>
          ) : (
            <div className="input-field">
              <label>Total Square Footage Footprint</label>
              <input
                type="number"
                value={customSqFt}
                onChange={(e) => setCustomSqFt(e.target.value)}
                placeholder="e.g. 1500"
              />
            </div>
          )}

          <div className="input-field dynamic-select">
            <label>Grass Blend Variety</label>
            <select
              value={variety}
              onChange={(e) => setVariety(e.target.value as GrassVariety)}
            >
              <option value="kentucky_bluegrass">Kentucky Bluegrass Mix</option>
              <option value="tall_fescue">
                Turf-Type Tall Fescue (+$0.10/sf)
              </option>
              <option value="rtf">
                RTF — Rhizomatous Tall Fescue (+$0.40/sf)
              </option>
            </select>
          </div>
        </div>

        <div className="checkbox-field">
          <label>
            <input
              type="checkbox"
              checked={includeWaste}
              onChange={(e) => setIncludeWaste(e.target.checked)}
            />
            Include 5% additional safety margin layout waste (Current Target
            Footprint Area: <b>{Math.round(rawSqFt).toLocaleString()} sq ft</b>
            {includeWaste && (
              <>
                → With Waste:{" "}
                <b>{Math.round(adjustedSqFt).toLocaleString()} sq ft</b>
              </>
            )}
            )
          </label>
        </div>
      </div>

      {/* Dynamic Matrix & Live Breakdown Viewports split */}
      <div className="calc-layout-grid">
        {/* Left Side: Full Live Table Matrix View */}
        <div className="matrix-table-section">
          <h3>Full Dynamic Rate Breakdown</h3>
          <div className="matrix-headers">
            <span>Coverage</span>
            <span>Est. Pallets</span>
            <span className="text-right">Est. Cost (Delivered)</span>
          </div>
          <div className="matrix-rows">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`matrix-row-item ${selectedTierIndex === idx ? "active-calculated-row" : ""}`}
              >
                <span className="tier-lbl">{tier.label}</span>
                <span className="tier-plt">
                  {tier.pallets} {tier.pallets === 1 ? "pallet" : "pallets"}
                </span>
                <span className="tier-prc text-right">
                  ${tier.totalCost.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Invoice Statement Block */}
        <div className="calc-results-section">
          <div className="total-price-banner">
            <h3>${totalPrice > 0 ? totalPrice.toFixed(2) : "0.00"}</h3>
            <p>
              {orderedSqft > 0
                ? `Your Target (${orderedSqft.toLocaleString()} sq ft)`
                : "Enter Area to See Estimate"}
            </p>
          </div>

          <div className="breakdown-list">
            <div className="breakdown-row">
              <span>Pallets Allocated:</span>
              <strong>
                {selectedTierIndex !== null
                  ? tiers[selectedTierIndex].pallets
                  : 0}
              </strong>
            </div>
            <hr />
            <div className="breakdown-row sub-cost">
              <span>Sod Material Net Cost:</span>
              <span>${materialCost.toFixed(2)}</span>
            </div>
            <div className="breakdown-row sub-cost">
              <span>Delivery Fee:</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="breakdown-row sub-cost">
              <span>Pallet Charge ($20 per pallet):</span>
              <span>${palletFee.toFixed(2)}</span>
            </div>
            {smallOrderFee > 0 && (
              <div className="breakdown-row sub-cost alert-fee">
                <span>Small Order Fee (500 - 900 sq. ft.):</span>
                <span>${smallOrderFee.toFixed(2)}</span>
              </div>
            )}
          </div>
          <a href="tel:+18001234567" className="calc-call-cta">
            Call to Lock Delivery Date
          </a>
        </div>
      </div>
    </div>
  );
}
