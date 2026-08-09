"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Users,
  Video,
  Camera,
  Flame,
  Minus,
  Plus,
  Gift,
  Calendar,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Zap,
  BookOpen,
  ChevronDown,
  Info,
  Check
} from "lucide-react";

// Types
type BaseExperienceType = "solo" | "vip";
type EventScaleType = "intimate" | "medium" | "large" | "mega";

export default function InteractiveEventConfigurator() {
  // --- STATE ---
  const [baseExperience, setBaseExperience] = useState<BaseExperienceType>("vip");
  const [eventScale, setEventScale] = useState<EventScaleType>("medium");
  const [mascotsCount, setMascotsCount] = useState<number>(1);
  const [videographers, setVideographers] = useState<number>(1);
  const [photographers, setPhotographers] = useState<number>(1);
  const [droneCoverage, setDroneCoverage] = useState<boolean>(true);
  const [hardbookAlbum, setHardbookAlbum] = useState<boolean>(false);
  const [city, setCity] = useState<string>("Faisalabad");
  const [eventDate, setEventDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });

  // --- CONFIG CONSTANTS & RATES ---
  const MKT_RATES = {
    soloBase: 30000,
    vipBase: 65000,
    extraMascot: 22000,
    videographer: 35000,
    photographer: 28000,
    drone: 18000,
    cinematicEdit: 20000,
    rawBackup: 5000,
    hardbook: 20000,
  };

  const DIRECT_RATES = {
    soloBase: 25000,
    vipBase: 50000,
    extraMascot: 18000,
    videographer: 28000,
    photographer: 22000,
    drone: 12000,
    cinematicEdit: 0, // FREE GIFT
    rawBackup: 0, // FREE
    hardbook: 15000,
  };

  // Explicitly Typed Handler for Experience Selection
  const handleSelectExperience = (type: BaseExperienceType) => {
    setBaseExperience(type);
    if (type === "solo") {
      setMascotsCount(1);
      setVideographers(0);
      setPhotographers(0);
      setDroneCoverage(false);
      setHardbookAlbum(false);
    } else {
      setMascotsCount(1);
      setVideographers(1);
      setPhotographers(1);
      setDroneCoverage(true);
    }
  };

  // Explicitly Typed Handler for Scale Selection
  const handleSelectScale = (scaleKey: EventScaleType) => {
    setEventScale(scaleKey);
    if (baseExperience === "solo") return;

    switch (scaleKey) {
      case "intimate":
        setMascotsCount(1);
        setVideographers(1);
        setPhotographers(0);
        setDroneCoverage(false);
        break;
      case "medium":
        setMascotsCount(1);
        setVideographers(1);
        setPhotographers(1);
        setDroneCoverage(true);
        break;
      case "large":
        setMascotsCount(1);
        setVideographers(2);
        setPhotographers(1);
        setDroneCoverage(true);
        break;
      case "mega":
        setMascotsCount(2);
        setVideographers(2);
        setPhotographers(1);
        setDroneCoverage(true);
        break;
      default:
        break;
    }
  };

  // --- DYNAMIC CALCULATIONS ---
  const pricing = useMemo(() => {
    if (baseExperience === "solo") {
      const extraMascots = Math.max(0, mascotsCount - 1);
      const direct = DIRECT_RATES.soloBase + extraMascots * DIRECT_RATES.extraMascot;
      const market = MKT_RATES.soloBase + extraMascots * MKT_RATES.extraMascot;
      return {
        direct,
        market,
        savings: Math.max(0, market - direct)
      };
    }

    // VIP Package Dynamic Calc
    const extraMascots = Math.max(0, mascotsCount - 1);
    const directExtraMascotCost = extraMascots * DIRECT_RATES.extraMascot;
    const mktExtraMascotCost = extraMascots * MKT_RATES.extraMascot;

    const directVideo = videographers * DIRECT_RATES.videographer;
    const mktVideo = videographers * MKT_RATES.videographer;

    const directPhoto = photographers * DIRECT_RATES.photographer;
    const mktPhoto = photographers * MKT_RATES.photographer;

    const directDrone = droneCoverage ? DIRECT_RATES.drone : 0;
    const mktDrone = droneCoverage ? MKT_RATES.drone : 0;

    const directAlbum = hardbookAlbum ? DIRECT_RATES.hardbook : 0;
    const mktAlbum = hardbookAlbum ? MKT_RATES.hardbook : 0;

    const totalDirect =
      DIRECT_RATES.vipBase +
      directExtraMascotCost +
      directVideo +
      directPhoto +
      directDrone +
      directAlbum;

    const totalMarket =
      MKT_RATES.vipBase +
      mktExtraMascotCost +
      mktVideo +
      mktPhoto +
      mktDrone +
      mktAlbum +
      MKT_RATES.cinematicEdit +
      MKT_RATES.rawBackup;

    return {
      direct: totalDirect,
      market: totalMarket,
      savings: Math.max(0, totalMarket - totalDirect)
    };
  }, [baseExperience, mascotsCount, videographers, photographers, droneCoverage, hardbookAlbum]);

  // --- WHATSAPP URL GENERATOR ---
  const whatsappUrl = useMemo(() => {
    const phone = "923000000000"; // Replace with actual business WhatsApp number
    const message = `Assalam-o-Alaikum ThePKEvents team! I want to check date availability for a custom event package:

📅 *Event Date:* ${eventDate || "Not Specified"}
📍 *City:* ${city}
👥 *Guest Scale:* ${
      eventScale === "intimate"
        ? "Intimate (<30 Guests)"
        : eventScale === "medium"
        ? "Medium (30-80 Guests)"
        : eventScale === "large"
        ? "Large (80-150 Guests)"
        : "Mega Event / Wedding (150+ Guests)"
    }
🦍 *Mascots Count:* ${mascotsCount} Gorilla(s)
🎥 *Media Crew:* ${videographers} Video, ${photographers} Photo, Drone: ${droneCoverage ? "Yes" : "No"}
🎁 *Deliverables:* Full Event Edited Film (FREE Gift), Raw Data Backup, Album: ${hardbookAlbum ? "Yes (+PKR 15,000)" : "No"}

💰 *Calculated Estimate:* PKR ${pricing.direct.toLocaleString()} (Estimated Savings: PKR ${pricing.savings.toLocaleString()}+)

Please confirm availability and advance deposit details for this date!`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }, [eventDate, city, eventScale, mascotsCount, videographers, photographers, droneCoverage, hardbookAlbum, pricing]);

  return (
    <section className="w-full bg-[#090D16] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full space-y-10">
        {/* SECTION HEADER */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Live Custom Event Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Configure Your Ultimate <span className="text-emerald-400">Event Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
            Select your entrance vibe, scale your crew with direct partner rates, and unlock instant bundled savings with zero middleman markups.
          </p>
        </div>

        {/* MAIN CONFIGURATOR GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 8-COL: STEPPER FORM CONTROLS */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* STEP 1: BASE EXPERIENCE SELECTION */}
            <div className="bg-[#0D131F] border border-slate-800/80 rounded-2xl p-5 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs sm:text-sm border border-emerald-500/30">
                  1
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">Select Base Experience</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* SOLO CARD */}
                <div
                  onClick={() => handleSelectExperience("solo")}
                  className={`relative cursor-pointer rounded-xl p-5 border-2 transition-all duration-300 flex flex-col justify-between space-y-4 ${
                    baseExperience === "solo"
                      ? "bg-slate-900/90 border-emerald-500 ring-1 ring-emerald-500/50"
                      : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-base text-white">Solo Gorilla Entrance</h4>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          baseExperience === "solo"
                            ? "border-emerald-500 bg-emerald-500 text-slate-950"
                            : "border-slate-600"
                        }`}
                      >
                        {baseExperience === "solo" && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                    <div className="text-2xl font-black text-white">
                      PKR 25,000
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        Wild Card Grand Entrance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        30-45 Mins High-Energy Performance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        Stage Dance, Beat Sync & Crowd Hype
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        Selfie & Cake-Cutting Hype
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-slate-800/60 text-[11px] text-slate-400 italic">
                    Strict fixed margin solo offer.
                  </div>
                </div>

                {/* VIP COMBO CARD */}
                <div
                  onClick={() => handleSelectExperience("vip")}
                  className={`relative cursor-pointer rounded-xl p-5 border-2 transition-all duration-300 flex flex-col justify-between space-y-4 ${
                    baseExperience === "vip"
                      ? "bg-gradient-to-b from-slate-900 to-slate-900/90 border-emerald-500 ring-1 ring-emerald-500/50"
                      : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
                  }`}
                >
                  <div className="absolute -top-3 right-4 px-3 py-0.5 bg-amber-500 text-slate-950 font-black text-[10px] tracking-wider uppercase rounded-full shadow-lg flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-slate-950" /> Most Popular
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-base text-white">VIP Mascot + Media Combo</h4>
                        <p className="text-xs text-emerald-400 font-medium">Mascot + Full Media Crew Setup</p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          baseExperience === "vip"
                            ? "border-emerald-500 bg-emerald-500 text-slate-950"
                            : "border-slate-600"
                        }`}
                      >
                        {baseExperience === "vip" && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs space-y-1">
                      <div className="font-bold flex items-center gap-1.5">
                        <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>🎬 Full Event Cinematic Video Editing</span>
                      </div>
                      <div className="font-black text-amber-400 text-[11px] uppercase tracking-wide">
                        🎁 100% FREE GIFT (Worth PKR 20,000)
                      </div>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        Full High-Res Raw Data Backup (Drive/USB)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        Flexible Media Crew Customization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        Priority Date Allocation & Direct Savings
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2: SMART EVENT SCALE SUGGESTER */}
            <div className="bg-[#0D131F] border border-slate-800/80 rounded-2xl p-5 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs sm:text-sm border border-emerald-500/30">
                  2
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">Event Scale & Capacity</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: "intimate" as EventScaleType, label: "Intimate", desc: "<30 Guests" },
                  { id: "medium" as EventScaleType, label: "Medium", desc: "30–80 Guests" },
                  { id: "large" as EventScaleType, label: "Large", desc: "80–150 Guests" },
                  { id: "mega" as EventScaleType, label: "Mega / Wedding", desc: "150+ Guests" },
                ].map((scale) => (
                  <button
                    key={scale.id}
                    type="button"
                    onClick={() => handleSelectScale(scale.id)}
                    className={`min-h-[48px] p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-center ${
                      eventScale === scale.id
                        ? "bg-emerald-500/15 border-emerald-500 text-white"
                        : "bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <span className="font-bold text-xs sm:text-sm">{scale.label}</span>
                    <span className="text-[11px] text-slate-400">{scale.desc}</span>
                  </button>
                ))}
              </div>

              {/* SMART AI TIP BOX */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={eventScale}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3"
                >
                  <Zap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300">
                    <span className="font-semibold text-emerald-400">Smart Scale Recommendation: </span>
                    {eventScale === "intimate" && "Ideal for intimate birthdays! 1 Gorilla + 1 Media Crew works best."}
                    {eventScale === "medium" && "1 Gorilla + 1 Videographer + 1 Photographer recommended."}
                    {eventScale === "large" && "1 Gorilla + Full Media Crew + Drone Aerial Coverage recommended."}
                    {eventScale === "mega" && "🔥 2 Gorillas Fleet + 3-Person Media Crew + Drone Aerial Shot recommended for maximum stage impact!"}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* STEP 3: GRANULAR CREW ADD-ONS & PRICING CUSTOMIZER */}
            <div className="bg-[#0D131F] border border-slate-800/80 rounded-2xl p-5 sm:p-7 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs sm:text-sm border border-emerald-500/30">
                  3
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">Granular Crew & Deliverables</h3>
              </div>

              <div className="space-y-4 divide-y divide-slate-800/60">
                {/* 1. Mascot Counter */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-sm text-white flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      Mascots Fleet Units
                    </div>
                    <p className="text-xs text-slate-400">
                      PKR 18,000 per extra mascot unit
                    </p>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <button
                      type="button"
                      onClick={() => setMascotsCount((prev) => Math.max(1, prev - 1))}
                      disabled={mascotsCount <= 1}
                      className="min-h-[48px] min-w-[48px] rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-extrabold text-base w-6 text-center text-white">{mascotsCount}</span>
                    <button
                      type="button"
                      onClick={() => setMascotsCount((prev) => prev + 1)}
                      className="min-h-[48px] min-w-[48px] rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* 2. Videographers Counter */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-sm text-white flex items-center gap-2">
                      <Video className="w-4 h-4 text-emerald-400" />
                      Videographer (Cinema 4K Cameraman)
                    </div>
                    <div className="text-xs space-x-1.5 mt-0.5">
                      <span className="text-slate-500 line-through">Market Rate: PKR 35,000</span>
                      <span className="text-emerald-400 font-medium">Direct: PKR 28,000</span>
                      <span className="text-amber-400 text-[11px] font-semibold">(Save PKR 7,000+)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <button
                      type="button"
                      onClick={() => setVideographers((prev) => Math.max(0, prev - 1))}
                      disabled={baseExperience === "solo" || videographers <= 0}
                      className="min-h-[48px] min-w-[48px] rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-extrabold text-base w-6 text-center text-white">{videographers}</span>
                    <button
                      type="button"
                      onClick={() => setVideographers((prev) => prev + 1)}
                      disabled={baseExperience === "solo"}
                      className="min-h-[48px] min-w-[48px] rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* 3. Photographers Counter */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-sm text-white flex items-center gap-2">
                      <Camera className="w-4 h-4 text-emerald-400" />
                      Photographer (DSLR High-Res)
                    </div>
                    <div className="text-xs space-x-1.5 mt-0.5">
                      <span className="text-slate-500 line-through">Market Rate: PKR 28,000</span>
                      <span className="text-emerald-400 font-medium">Direct: PKR 22,000</span>
                      <span className="text-amber-400 text-[11px] font-semibold">(Save PKR 6,000+)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <button
                      type="button"
                      onClick={() => setPhotographers((prev) => Math.max(0, prev - 1))}
                      disabled={baseExperience === "solo" || photographers <= 0}
                      className="min-h-[48px] min-w-[48px] rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-extrabold text-base w-6 text-center text-white">{photographers}</span>
                    <button
                      type="button"
                      onClick={() => setPhotographers((prev) => prev + 1)}
                      disabled={baseExperience === "solo"}
                      className="min-h-[48px] min-w-[48px] rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* 4. Drone Coverage Toggle Switch */}
                <div className="pt-4 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-sm text-white">Drone Aerial Coverage</div>
                    <div className="text-xs space-x-1.5 mt-0.5">
                      <span className="text-slate-500 line-through">Market Rate: PKR 18,000</span>
                      <span className="text-emerald-400 font-medium">Direct: PKR 12,000</span>
                      <span className="text-amber-400 text-[11px] font-semibold">(Save PKR 6,000+)</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDroneCoverage((prev) => !prev)}
                    disabled={baseExperience === "solo"}
                    className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed ${
                      droneCoverage ? "bg-emerald-500" : "bg-slate-800"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                        droneCoverage ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* 5. Deliverables & Free Gifts */}
                <div className="pt-4 space-y-3">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Included Deliverables & Add-ons
                  </div>

                  {/* Cinematic Video Edit Gift */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-amber-500/30">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs space-y-0.5">
                      <div className="font-bold text-slate-200 flex flex-wrap items-center gap-1.5">
                        <span>🎬 Full Event Cinematic Edited Film</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-extrabold text-[10px]">
                          🎁 FREE GIFT - Worth PKR 20,000
                        </span>
                      </div>
                      <p className="text-slate-400">Included free in VIP Media setup packages.</p>
                    </div>
                  </div>

                  {/* Raw Data Backup */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs space-y-0.5">
                      <div className="font-bold text-slate-200">
                        📁 Complete High-Res Raw Data Backup
                      </div>
                      <p className="text-slate-400">Instantly shared via Drive / High-Speed USB.</p>
                    </div>
                  </div>

                  {/* Hardbook Photo Album Checkbox */}
                  <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={hardbookAlbum}
                      onChange={(e) => setHardbookAlbum(e.target.checked)}
                      disabled={baseExperience === "solo"}
                      className="mt-0.5 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500/20 w-4 h-4 disabled:opacity-40"
                    />
                    <div className="text-xs space-y-0.5">
                      <div className="font-bold text-slate-200 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-emerald-400" />
                        Physical Printed Hardbook Photo Album (+ PKR 15,000)
                      </div>
                      <div className="text-slate-400 space-x-1.5">
                        <span className="line-through">Market Rate: PKR 20,000</span>
                        <span className="text-emerald-400">Direct Rate: PKR 15,000</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* STEP 4: CITY & DATE SELECTION */}
            <div className="bg-[#0D131F] border border-slate-800/80 rounded-2xl p-5 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs sm:text-sm border border-emerald-500/30">
                  4
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">Event Date & Location</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* City Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    Select Event City
                  </label>
                  <div className="relative">
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full min-h-[48px] bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 appearance-none pr-10 cursor-pointer"
                    >
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
                      <option value="Multan">Multan</option>
                      <option value="Sheikhupura">Sheikhupura</option>
                      <option value="Gujranwala">Gujranwala</option>
                      <option value="Other">Other Location</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Date Picker */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    Select Event Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full min-h-[48px] bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT 4-COL: LIVE SUMMARY STICKY PANEL (DESKTOP) */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-6">
            <div className="bg-[#0D131F] border border-slate-800/80 rounded-2xl p-6 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500" />

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Live Cost Summary</h3>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                  Direct Savings Engine
                </span>
              </div>

              {/* SAVINGS BADGE */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1 text-center">
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wide flex items-center justify-center gap-1">
                  <Gift className="w-3.5 h-3.5" /> Total Estimated Savings
                </div>
                <div className="text-xl font-black text-amber-300">
                  PKR {pricing.savings.toLocaleString()}+ INCLUDED
                </div>
              </div>

              {/* ITEMIZED SUMMARY BREAKDOWN */}
              <div className="space-y-3 text-xs border-y border-slate-800/80 py-4 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Base Experience:</span>
                  <span className="font-semibold text-white">
                    {baseExperience === "solo" ? "Solo Gorilla" : "VIP Mascot + Media"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Scale Presets:</span>
                  <span className="font-semibold text-white capitalize">{eventScale}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Mascots Count:</span>
                  <span className="font-semibold text-white">{mascotsCount} Gorilla(s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Media Crew:</span>
                  <span className="font-semibold text-white">
                    {videographers} V / {photographers} P
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Drone Coverage:</span>
                  <span className="font-semibold text-white">{droneCoverage ? "Yes" : "No"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Hardbook Photo Album:</span>
                  <span className="font-semibold text-white">{hardbookAlbum ? "Yes" : "No"}</span>
                </div>
              </div>

              {/* TOTAL PRICE DISPLAY */}
              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-400 uppercase font-bold">Standard Market Value:</span>
                  <span className="text-sm text-slate-500 line-through">
                    PKR {pricing.market.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-white">Direct Package Total:</span>
                  <span className="text-3xl font-black text-emerald-400">
                    PKR {pricing.direct.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* WHATSAPP DIRECT ACTION BUTTON */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[52px] px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm tracking-wide transition-all duration-200 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950 stroke-none" />
                <span>BOOK VIA WHATSAPP NOW</span>
              </a>

              {/* GUARANTEE / TRUST TAGS */}
              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Date Guarantee
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-emerald-400" />
                  Zero Hidden Fees
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE STICKY BOTTOM DRAWER (Floating CTA Bar) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0D131F]/95 backdrop-blur-md border-t border-slate-800 p-4 shadow-2xl">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] font-bold text-amber-400 uppercase tracking-tight">
              Save PKR {pricing.savings.toLocaleString()}+
            </div>
            <div className="text-xl font-black text-emerald-400 leading-none">
              PKR {pricing.direct.toLocaleString()}
            </div>
            <div className="text-[10px] text-slate-400 line-through">
              Market: PKR {pricing.market.toLocaleString()}
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs tracking-wide transition-colors flex items-center gap-2 shrink-0 shadow-lg shadow-emerald-500/20"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950 stroke-none" />
            <span>BOOK WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export { InteractiveEventConfigurator as ServicePackages };