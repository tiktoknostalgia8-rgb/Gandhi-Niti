import React, { useState, useMemo } from 'react';
import { SaptangaTag } from '../components/SaptangaTag';
import { Coins, TrendingUp, Calculator, ShieldCheck, Scale, Info } from 'lucide-react';

export const BusinessModelPage: React.FC = () => {
  // Financial Sliders State (Defaults based on prompt)
  const [price, setPrice] = useState<number>(1200); // Selling price INR
  const [productCost, setProductCost] = useState<number>(300); // Raw ittar distillate + sandalwood
  const [packagingCost, setPackagingCost] = useState<number>(80); // Glass flacon + gold roll-on cap + box
  const [shippingCost, setShippingCost] = useState<number>(70); // Insured courier
  const [gatewayFeePct, setGatewayFeePct] = useState<number>(2.0); // 2%
  const [cac, setCac] = useState<number>(350); // Blended Customer Acquisition Cost
  const [repeatRatePct, setRepeatRatePct] = useState<number>(28); // 28% repeat within 12 months

  // Financial Calculations
  const calculations = useMemo(() => {
    const gatewayFee = (price * gatewayFeePct) / 100;
    const cogs = productCost + packagingCost; // Cost of Goods Sold
    const grossProfit = price - cogs;
    const grossMarginPct = (grossProfit / price) * 100;

    const variableCosts = cogs + shippingCost + gatewayFee;
    const contributionMargin = price - variableCosts;
    const contributionMarginPct = (contributionMargin / price) * 100;

    // First Order Profitability after direct CAC
    const profitPerFirstOrder = contributionMargin - cac;

    // Fixed overhead monthly estimate (guild workspace, GC-MS batch testing, web hosting)
    const estimatedFixedCostsMonthly = 75000;
    const breakEvenOrders = contributionMargin > 0 ? Math.ceil(estimatedFixedCostsMonthly / contributionMargin) : 0;

    // Customer Lifetime Value (LTV) calculation over 2-year horizon
    // Average orders per customer = 1 + (repeatRatePct / 100) * 1.8
    const avgLifetimeOrders = 1 + (repeatRatePct / 100) * 1.8;
    const ltvRevenue = price * avgLifetimeOrders;
    const ltvGrossContribution = contributionMargin * avgLifetimeOrders;
    const ltvNetProfit = ltvGrossContribution - cac;
    const ltvToCacRatio = cac > 0 ? (ltvGrossContribution / cac).toFixed(2) : "N/A";

    return {
      cogs,
      gatewayFee,
      grossProfit,
      grossMarginPct: grossMarginPct.toFixed(1),
      contributionMargin,
      contributionMarginPct: contributionMarginPct.toFixed(1),
      profitPerFirstOrder,
      breakEvenOrders,
      avgLifetimeOrders: avgLifetimeOrders.toFixed(2),
      ltvRevenue: Math.round(ltvRevenue),
      ltvGrossContribution: Math.round(ltvGrossContribution),
      ltvNetProfit: Math.round(ltvNetProfit),
      ltvToCacRatio
    };
  }, [price, productCost, packagingCost, shippingCost, gatewayFeePct, cac, repeatRatePct]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24 text-[#2E1B0F]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#5A3A22]/20 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-bold">
              Pillar V: The Treasury
            </span>
            <span className="text-[#8A5A36]">·</span>
            <span className="text-xs font-mono text-[#8A5A36]">Panyadhyaksha Commercial Transparency</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1B0F]">
            Kosha: Open Unit Economics
          </h1>
          <p className="text-sm text-[#5A3A22] max-w-2xl mt-1 leading-relaxed">
            In Book II of the Arthashastra, Kautilya treated the treasury (Kosha) as the wealth that keeps the state running. At GandhaNiti, Kosha is our finances: unit economics, margins, repeat purchases, working capital, and a fair share to distillers.
          </p>
        </div>

        <div className="shrink-0">
          <SaptangaTag element="kosha" size="md" />
        </div>
      </div>

      {/* Mandatory Illustrative Notice */}
      <div className="p-4 bg-[#E4D2A8]/40 border-l-3 border-[#B8902B] rounded-r-[2px] text-xs text-[#5A3A22] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-[#8A5A36] shrink-0" />
          <span>
            <strong className="text-[#2E1B0F]">Financial Disclaimer:</strong> Illustrative assumptions to be validated with distiller quotes and verified seasonal batch harvesting yields.
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#8A5A36] shrink-0 hidden sm:inline">
          Model: D2C Single Flacon Baseline
        </span>
      </div>

      {/* Interactive Unit Economics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (6 cols): Sliders & Assumptions */}
        <div className="lg:col-span-6 parchment-card p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#5A3A22]/20 pb-3">
            <h2 className="font-serif text-xl font-bold text-[#2E1B0F] flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#B8902B]" />
              <span>Direct Unit Assumptions</span>
            </h2>
            <button
              onClick={() => {
                setPrice(1200);
                setProductCost(300);
                setPackagingCost(80);
                setShippingCost(70);
                setGatewayFeePct(2.0);
                setCac(350);
                setRepeatRatePct(28);
              }}
              className="text-[11px] font-mono text-[#8A5A36] hover:text-[#2E1B0F] underline"
            >
              Reset to Benchmark
            </button>
          </div>

          <div className="space-y-5 text-xs">
            {/* Slider 1: Retail Price */}
            <div>
              <div className="flex justify-between font-mono mb-1.5">
                <span className="font-semibold text-[#2E1B0F]">Retail Selling Price (INR)</span>
                <span className="font-bold text-[#6B1E1E]">₹{price.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="799"
                max="2500"
                step="50"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-[#B8902B]"
              />
              <span className="text-[10px] text-[#8A5A36]">Benchmark average across 10 ml roll-on range.</span>
            </div>

            {/* Slider 2: Raw Botanical Cost */}
            <div>
              <div className="flex justify-between font-mono mb-1.5">
                <span className="font-semibold text-[#2E1B0F]">Raw Distillate & Base Cost (COGS)</span>
                <span className="font-bold text-[#2E1B0F]">₹{productCost.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="150"
                max="800"
                step="25"
                value={productCost}
                onChange={(e) => setProductCost(Number(e.target.value))}
                className="w-full accent-[#B8902B]"
              />
              <span className="text-[10px] text-[#8A5A36]">Paid directly to Kannauj copper deg cooperative bhatthis.</span>
            </div>

            {/* Slider 3: Packaging */}
            <div>
              <div className="flex justify-between font-mono mb-1.5">
                <span className="font-semibold text-[#2E1B0F]">Glass Flacon, Cap & Wax Box</span>
                <span className="font-bold text-[#2E1B0F]">₹{packagingCost.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="40"
                max="200"
                step="10"
                value={packagingCost}
                onChange={(e) => setPackagingCost(Number(e.target.value))}
                className="w-full accent-[#B8902B]"
              />
              <span className="text-[10px] text-[#8A5A36]">Heavy cut-glass cylinder, gold roll-on housing, parchment sleeve.</span>
            </div>

            {/* Slider 4: Shipping Cost */}
            <div>
              <div className="flex justify-between font-mono mb-1.5">
                <span className="font-semibold text-[#2E1B0F]">Insured Pan-India Courier</span>
                <span className="font-bold text-[#2E1B0F]">₹{shippingCost.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="50"
                max="120"
                step="5"
                value={shippingCost}
                onChange={(e) => setShippingCost(Number(e.target.value))}
                className="w-full accent-[#B8902B]"
              />
              <span className="text-[10px] text-[#8A5A36]">Direct dispatch from Kannauj craft hub.</span>
            </div>

            {/* Slider 5: CAC (Customer Acquisition Cost) */}
            <div>
              <div className="flex justify-between font-mono mb-1.5">
                <span className="font-semibold text-[#2E1B0F]">Blended Customer Acquisition Cost (CAC)</span>
                <span className="font-bold text-[#2E1B0F]">₹{cac.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="150"
                max="600"
                step="25"
                value={cac}
                onChange={(e) => setCac(Number(e.target.value))}
                className="w-full accent-[#B8902B]"
              />
              <span className="text-[10px] text-[#8A5A36]">Scent Quiz conversion, heritage storytelling content, and search.</span>
            </div>

            {/* Slider 6: Repeat Rate */}
            <div>
              <div className="flex justify-between font-mono mb-1.5">
                <span className="font-semibold text-[#2E1B0F]">12-Month Repeat Purchase Rate</span>
                <span className="font-bold text-[#3B6E47]">{repeatRatePct}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="2"
                value={repeatRatePct}
                onChange={(e) => setRepeatRatePct(Number(e.target.value))}
                className="w-full accent-[#B8902B]"
              />
              <span className="text-[10px] text-[#8A5A36]">Discovery Set purchasers returning for 10 ml bottles.</span>
            </div>
          </div>
        </div>

        {/* Right Column (6 cols): Live Financial Outputs & Visual Chart */}
        <div className="lg:col-span-6 space-y-6">
          {/* Top Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="parchment-card p-4">
              <span className="text-[10px] font-mono uppercase text-[#8A5A36] block">Gross Margin</span>
              <span className="font-serif text-2xl font-bold text-[#2E1B0F]">{calculations.grossMarginPct}%</span>
              <span className="text-[10px] text-[#8A5A36] block mt-0.5">₹{calculations.grossProfit} / unit</span>
            </div>

            <div className="parchment-card p-4">
              <span className="text-[10px] font-mono uppercase text-[#8A5A36] block">Contribution</span>
              <span className="font-serif text-2xl font-bold text-[#2E1B0F]">{calculations.contributionMarginPct}%</span>
              <span className="text-[10px] text-[#8A5A36] block mt-0.5">₹{calculations.contributionMargin} / unit</span>
            </div>

            <div className="parchment-card p-4">
              <span className="text-[10px] font-mono uppercase text-[#8A5A36] block">LTV / CAC Ratio</span>
              <span className="font-serif text-2xl font-bold text-[#3B6E47]">{calculations.ltvToCacRatio}x</span>
              <span className="text-[10px] text-[#8A5A36] block mt-0.5">2-Year Horizon</span>
            </div>
          </div>

          {/* Clean Financial Waterfall Chart (SVG/CSS) */}
          <div className="parchment-card p-6 space-y-4">
            <h3 className="font-serif text-base font-bold text-[#2E1B0F] border-b border-[#5A3A22]/20 pb-2 flex items-center justify-between">
              <span>Unit Economics Waterfall (Per ₹{price} Order)</span>
              <span className="text-xs font-mono text-[#8A5A36]">Breakdown</span>
            </h3>

            {/* Visual stacked bar */}
            <div className="space-y-3">
              <div className="w-full h-8 flex rounded-[2px] overflow-hidden border border-[#5A3A22]/40 text-[10px] font-mono font-bold text-[#F1E6CC]">
                <div
                  style={{ width: `${(productCost / price) * 100}%` }}
                  className="bg-[#8A5A36] flex items-center justify-center truncate px-1"
                  title={`Botanicals: ₹${productCost}`}
                >
                  Raw Distillate
                </div>
                <div
                  style={{ width: `${(packagingCost / price) * 100}%` }}
                  className="bg-[#BA6838] flex items-center justify-center truncate px-1"
                  title={`Packaging: ₹${packagingCost}`}
                >
                  Pack
                </div>
                <div
                  style={{ width: `${(shippingCost / price) * 100}%` }}
                  className="bg-[#5A3A22] flex items-center justify-center truncate px-1"
                  title={`Shipping: ₹${shippingCost}`}
                >
                  Ship
                </div>
                <div
                  style={{ width: `${(calculations.gatewayFee / price) * 100}%` }}
                  className="bg-[#2E1B0F] flex items-center justify-center truncate px-1"
                  title={`Gateway: ₹${calculations.gatewayFee.toFixed(0)}`}
                >
                  Fee
                </div>
                <div
                  style={{ width: `${Math.max(0, (calculations.contributionMargin / price) * 100)}%` }}
                  className="bg-[#B8902B] text-[#2E1B0F] flex items-center justify-center truncate px-1"
                  title={`Contribution: ₹${calculations.contributionMargin}`}
                >
                  Margin
                </div>
              </div>

              {/* Legend with exact amounts */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 text-[#5A3A22]">
                <div className="flex justify-between border-b border-[#5A3A22]/10 pb-1">
                  <span>1. Pure Distillate (Kannauj)</span>
                  <span className="font-bold text-[#2E1B0F]">₹{productCost}</span>
                </div>
                <div className="flex justify-between border-b border-[#5A3A22]/10 pb-1">
                  <span>2. Glass Flacon & Box</span>
                  <span className="font-bold text-[#2E1B0F]">₹{packagingCost}</span>
                </div>
                <div className="flex justify-between border-b border-[#5A3A22]/10 pb-1">
                  <span>3. Insured Courier</span>
                  <span className="font-bold text-[#2E1B0F]">₹{shippingCost}</span>
                </div>
                <div className="flex justify-between border-b border-[#5A3A22]/10 pb-1">
                  <span>4. Gateway Fee (2%)</span>
                  <span className="font-bold text-[#2E1B0F]">₹{calculations.gatewayFee.toFixed(0)}</span>
                </div>
              </div>
            </div>

            {/* Bottom Line Synthesis */}
            <div className="p-4 bg-[#E4D2A8]/30 rounded-[2px] border border-[#B8902B]/40 space-y-2 text-xs">
              <div className="flex justify-between font-mono">
                <span className="font-semibold text-[#2E1B0F]">Contribution Margin Per Order</span>
                <span className="font-bold text-[#2E1B0F]">₹{calculations.contributionMargin} ({calculations.contributionMarginPct}%)</span>
              </div>
              <div className="flex justify-between font-mono">
                <span>First-Order Profit (After ₹{cac} CAC)</span>
                <span className={`font-bold ${calculations.profitPerFirstOrder >= 0 ? 'text-[#3B6E47]' : 'text-[#6B1E1E]'}`}>
                  {calculations.profitPerFirstOrder >= 0 ? `+₹${calculations.profitPerFirstOrder}` : `-₹${Math.abs(calculations.profitPerFirstOrder)}`}
                </span>
              </div>
              <div className="flex justify-between font-mono pt-1 border-t border-[#5A3A22]/15">
                <span>Monthly Break-Even Volume</span>
                <span className="font-bold text-[#2E1B0F]">{calculations.breakEvenOrders} Flacons / month</span>
              </div>
              <div className="flex justify-between font-mono">
                <span>Projected 2-Year Customer LTV (Net Contribution)</span>
                <span className="font-bold text-[#3B6E47]">₹{calculations.ltvNetProfit.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Saptanga Philosophy Callout */}
      <div className="parchment-card p-6 bg-[#2E1B0F] text-[#F1E6CC] border border-[#B8902B] space-y-2">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-[#D9B44A]" />
          <h4 className="font-serif text-lg font-bold">The Kautilyan Commercial Covenant</h4>
        </div>
        <p className="text-xs text-[#E4D2A8]/80 leading-relaxed max-w-3xl">
          "The state shall ensure that the producer receives a fair return for his labor and skill, while the consumer is shielded from artificial price inflation and diluted wares." By keeping our distribution transparent and paying seasonal advances to distillers, we demonstrate that heritage preservation is financially viable.
        </p>
      </div>
    </div>
  );
};
