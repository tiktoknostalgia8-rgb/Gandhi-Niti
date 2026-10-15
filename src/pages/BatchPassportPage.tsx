import React, { useState } from 'react';
import { SaptangaTag } from '../components/SaptangaTag';
import { ShieldCheck, QrCode, FileText, CheckCircle2, AlertCircle, Info, ExternalLink } from 'lucide-react';

export const BatchPassportPage: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState('MITTI-KNJ-2026-04');

  const batchDetails = {
    batchId: "MITTI-KNJ-2026-04",
    productName: "Mitti Attar (The Baked Rain Clay)",
    distillerName: "Ustad Ramzan Ali [SAMPLE Distiller, 4th Generation]",
    distillationDate: "12th February 2026 [SAMPLE Date]",
    harvestLocation: "Gangetic Alluvial Clay Bed #3, Kannauj Distillers' Quarter",
    degIdentifier: "Deg No. 12 (Tinned Heavy Copper Alembic, 400 kg Capacity)",
    distillationHours: 42,
    baseOilBatch: "Mysore Santalum album Heartwood Reserve #SAN-2025-08",
    batchSize: "48 Litres Total Production [SAMPLE]",
    bottledQuantity: "4,800 Roll-On Flacons (10 ml)",
    chromatographySummary: {
      depSolvents: "0.00% (Zero Synthetic Phthalates Detected)",
      mineralOilParaffin: "0.00% (Zero Mineral Adulterants)",
      totalNaturalVolatiles: "100% Pure Botanical & Clay Hydro-Distillate",
      laboratoryStatus: "Passed Sovereign Guild Standards"
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24 text-[#2E1B0F]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#5A3A22]/20 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-bold">
              Pillar IV: Durga (The Fortress)
            </span>
            <span className="text-[#8A5A36]">·</span>
            <span className="text-xs font-mono text-[#8A5A36]">Cryptographic Authenticity Registry</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1B0F]">
            The Batch Passport System
          </h1>
          <p className="text-sm text-[#5A3A22] max-w-xl mt-1 leading-relaxed">
            Every flacon of GandhaNiti ittar carries a unique batch serial and wax seal. This is an immutable transparency record, not artificial intelligence.
          </p>
        </div>

        <div className="shrink-0">
          <SaptangaTag element="durga" size="md" />
        </div>
      </div>

      {/* Mandatory Sample Data Notice */}
      <div className="p-4 bg-[#E4D2A8]/40 border-l-3 border-[#B8902B] rounded-r-[2px] text-xs text-[#5A3A22] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-[#8A5A36] shrink-0" />
          <span>
            <strong className="text-[#2E1B0F]">Sample Data Notice:</strong> The batch metrics and master distiller entries below are illustrative sample records formatted according to our operational transparency protocol.
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#6B1E1E] bg-[#6B1E1E]/10 px-2 py-0.5 rounded-[2px] border border-[#6B1E1E]/30 shrink-0">
          Sample Record
        </span>
      </div>

      {/* Main Passport Certificate Layout */}
      <div className="parchment-card p-6 sm:p-10 border-2 border-[#B8902B] space-y-8 relative overflow-hidden">
        {/* Top Gold Seal Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#5A3A22]/20 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A5A36]">
              Verified Guild Lineage Certificate
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E1B0F]">
              Batch #{batchDetails.batchId}
            </h2>
            <p className="font-serif italic text-xs text-[#5A3A22]">
              {batchDetails.productName}
            </p>
          </div>

          {/* Interactive QR Code (SVG) */}
          <div className="flex items-center gap-4 bg-[#F1E6CC] border border-[#5A3A22]/30 p-3 rounded-[2px]">
            <svg viewBox="0 0 100 100" className="w-20 h-20 text-[#2E1B0F]" fill="currentColor">
              {/* Decorative Authentic QR matrix representation */}
              <rect x="0" y="0" width="30" height="30" fill="none" stroke="#2E1B0F" strokeWidth="6" />
              <rect x="8" y="8" width="14" height="14" />
              <rect x="70" y="0" width="30" height="30" fill="none" stroke="#2E1B0F" strokeWidth="6" />
              <rect x="78" y="8" width="14" height="14" />
              <rect x="0" y="70" width="30" height="30" fill="none" stroke="#2E1B0F" strokeWidth="6" />
              <rect x="8" y="78" width="14" height="14" />
              
              {/* Inner data blocks */}
              <rect x="40" y="10" width="10" height="10" />
              <rect x="40" y="30" width="8" height="8" />
              <rect x="25" y="42" width="12" height="6" />
              <rect x="45" y="45" width="14" height="14" />
              <rect x="65" y="40" width="10" height="10" />
              <rect x="80" y="50" width="10" height="10" />
              <rect x="35" y="65" width="8" height="12" />
              <rect x="50" y="75" width="15" height="15" />
              <rect x="75" y="75" width="15" height="10" />
              <rect x="15" y="45" width="6" height="15" />
            </svg>
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase text-[#8A5A36] block">Scan On Flacon</span>
              <span className="text-xs font-bold font-serif text-[#2E1B0F] block">Live Verified</span>
              <span className="text-[10px] font-mono text-[#3B6E47]">Tamper-Evident</span>
            </div>
          </div>
        </div>

        {/* 1. Craft & Distillation Lineage */}
        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#2E1B0F] flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#B8902B]" />
            <span>1. Bhatthi Alembic Provenance</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#E4D2A8]/20 p-4 rounded-[2px] border border-[#5A3A22]/15">
            <div>
              <span className="font-mono text-[#8A5A36] text-[10px] uppercase block">Master Distiller</span>
              <span className="font-bold text-[#2E1B0F]">{batchDetails.distillerName}</span>
            </div>
            <div>
              <span className="font-mono text-[#8A5A36] text-[10px] uppercase block">Distillation Date</span>
              <span className="font-bold text-[#2E1B0F]">{batchDetails.distillationDate}</span>
            </div>
            <div>
              <span className="font-mono text-[#8A5A36] text-[10px] uppercase block">Distillation Apparatus</span>
              <span className="font-bold text-[#2E1B0F]">{batchDetails.degIdentifier}</span>
            </div>
            <div>
              <span className="font-mono text-[#8A5A36] text-[10px] uppercase block">Continuous Distillation</span>
              <span className="font-bold text-[#2E1B0F]">{batchDetails.distillationHours} Consecutive Hours</span>
            </div>
            <div>
              <span className="font-mono text-[#8A5A36] text-[10px] uppercase block">Botanical Source</span>
              <span className="font-bold text-[#2E1B0F]">{batchDetails.harvestLocation}</span>
            </div>
            <div>
              <span className="font-mono text-[#8A5A36] text-[10px] uppercase block">Receiver Base Sandalwood</span>
              <span className="font-bold text-[#2E1B0F]">{batchDetails.baseOilBatch}</span>
            </div>
          </div>
        </div>

        {/* 2. Laboratory Gas Chromatography (GC-MS) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-[#2E1B0F] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#3B6E47]" />
              <span>2. Analytical Chromatography Audit (Danda Pillar VI)</span>
            </h3>
            <span className="text-xs font-mono text-[#3B6E47] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Passed
            </span>
          </div>

          <div className="border border-[#5A3A22]/20 divide-y divide-[#5A3A22]/15 text-xs font-mono">
            <div className="p-2.5 flex justify-between bg-[#F1E6CC]">
              <span>Diethyl Phthalate (DEP Solvent)</span>
              <span className="font-bold text-[#3B6E47]">{batchDetails.chromatographySummary.depSolvents}</span>
            </div>
            <div className="p-2.5 flex justify-between bg-[#E4D2A8]/20">
              <span>Mineral Oil & Paraffin Adulterants</span>
              <span className="font-bold text-[#3B6E47]">{batchDetails.chromatographySummary.mineralOilParaffin}</span>
            </div>
            <div className="p-2.5 flex justify-between bg-[#F1E6CC]">
              <span>Natural Volatile Constituents</span>
              <span className="font-bold text-[#2E1B0F]">{batchDetails.chromatographySummary.totalNaturalVolatiles}</span>
            </div>
            <div className="p-2.5 flex justify-between bg-[#E4D2A8]/20">
              <span>Batch Total Volume</span>
              <span className="font-bold text-[#2E1B0F]">{batchDetails.batchSize}</span>
            </div>
          </div>
        </div>

        {/* Batch Selection for Exploration */}
        <div className="pt-4 border-t border-[#5A3A22]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="text-[#5A3A22] font-semibold">
            Inspect other active registry flacons:
          </span>
          <div className="flex gap-2">
            {['MITTI-KNJ-2026-04', 'GULAB-KNJ-2026-02', 'CHAND-KNJ-2025-11', 'KHUS-KNJ-2026-03'].map((code) => (
              <button
                key={code}
                onClick={() => setSelectedBatch(code)}
                className={`px-2.5 py-1 text-[11px] font-mono rounded-[2px] border ${
                  selectedBatch === code
                    ? 'bg-[#2E1B0F] text-[#F1E6CC] border-[#2E1B0F]'
                    : 'bg-[#F1E6CC] text-[#5A3A22] border-[#5A3A22]/30 hover:border-[#B8902B]'
                }`}
              >
                {code.split('-')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
