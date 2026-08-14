"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
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
  Zap,
  ChevronDown,
  Check,
  BookOpen,
  Award,
  ShieldCheck
} from "lucide-react";

type BaseExperienceType = "solo" | "vip" | null;
type EventScaleType = "intimate" | "medium" | "large" | "mega" | null;

export default function InteractiveEventConfigurator() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // --- STATE (INITIALIZED TO UNSELECTED / ZERO) ---
  const [baseExperience, setBaseExperience] = useState<BaseExperienceType>(null);
  const [eventScale, setEventScale] = useState<EventScaleType>(null);
  const [mascotsCount, setMascotsCount] = useState<number>(0);
  const [videographers, setVideographers] = useState<number>(0);
  const [photographers, setPhotographers] = useState<number>(0);
  const [droneCoverage, setDroneCoverage] = useState<boolean>(false);
  const [hardbookAlbum, setHardbookAlbum] = useState<boolean>(false);
  const [city, setCity] = useState<string>("Faisalabad");
  const [eventDate, setEventDate] = useState<string>("");

  // Mobile Sticky Bar Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // --- RATES ---
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
    cinematicEdit: 0,
    rawBackup: 0,
    hardbook: 15000,
  };

  const handleSelectExperience = (type: BaseExperienceType) => {
    setBaseExperience(type);
    if (type === "solo") {
      setMascotsCount(1);
      setVideographers(0);
      setPhotographers(0);
      setDroneCoverage(false);
      setHardbookAlbum(false);
    } else if (type === "vip") {
      setMascotsCount(1);
      setVideographers(1);
      setPhotographers(1);
      setDroneCoverage(true);
      if (!eventScale) setEventScale("medium");
    }
  };

  const handleSelectScale = (scaleKey: EventScaleType) => {
    setEventScale(scaleKey);
    if (baseExperience === "solo" || !baseExperience) return;

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
    }
  };

  // --- CALCULATIONS ---
  const pricing = useMemo(() => {
    if (!baseExperience) {
      return { direct: 0, market: 0, savings: 0 };
    }

    if (baseExperience === "solo") {
      const extraMascots = Math.max(0, mascotsCount - 1);
      const direct = DIRECT_RATES.soloBase + extraMascots * DIRECT_RATES.extraMascot;
      const market = MKT_RATES.soloBase + extraMascots * MKT_RATES.extraMascot;
      return { direct, market, savings: Math.max(0, market - direct) };
    }

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

  const whatsappUrl = useMemo(() => {
    const phone = "923000000000";
    const message = `Assalam-o-Alaikum ThePKEvents Team! I want to confirm date availability for my custom event booking:

📅 *Event Date:* ${eventDate || "Not Specified"}
📍 *City:* ${city}
👥 *Guest Scale:* ${
      eventScale === "intimate"
        ? "Intimate (<30 Guests)"
        : eventScale === "medium"
        ? "Medium (30-80 Guests)"
        : eventScale === "large"
        ? "Large (80-150 Guests)"
        : eventScale === "mega"
        ? "Mega Event / Wedding (150+ Guests)"
        : "Not Selected"
    }
🦍 *Mascots Fleet:* ${mascotsCount} Premium Gorilla(s)
🎥 *Media Setup:* ${videographers} Videographer(s), ${photographers} Photographer(s), Drone: ${droneCoverage ? "Yes (4K Aerial)" : "No"}
📖 *Hardbook Album:* ${hardbookAlbum ? "Yes (+PKR 15,000)" : "No"}
🎁 *Bonus Included:* Full Cinematic Edited Reel (100% FREE Gift)

💰 *Direct Total Estimate:* PKR ${pricing.direct.toLocaleString()} (Saved: PKR ${pricing.savings.toLocaleString()}+)

Please confirm date lock & deposit instructions!`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }, [eventDate, city, eventScale, mascotsCount, videographers, photographers, droneCoverage, hardbookAlbum, pricing]);

  return (
    <section 
      id="services"
      ref={sectionRef}
      className="w-full bg-[#060911] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased min-h-screen flex flex-col items-center justify-center relative scroll-mt-20 overflow-hidden"
    >
      {/* BACKGROUND DECORATIVE GLOW */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto w-full space-y-10 text-center">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-inner">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            Live Event Configurator & Instant Price Engine
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">Unforgettable Event</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed">
            Customize your mascot show, cinema-grade media crew, and deliverables in real time with 100% transparent pricing and direct savings guarantee.
          </p>
        </div>

        {/* CENTER ALIGNED FORM CONTAINERS */}
        <div className="space-y-8 text-left">
          
          {/* STEP 1: BASE EXPERIENCE SELECTION */}
          <div className="bg-[#0B101D] border border-slate-800/90 rounded-2xl p-5 sm:p-8 shadow-2xl space-y-6 relative">
            <div className="flex items-center justify-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm border border-emerald-500/40">
                1
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white text-center">Select Base Experience</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* SOLO CARD */}
              <div
                onClick={() => handleSelectExperience("solo")}
                className={`relative cursor-pointer rounded-xl p-5 sm:p-6 border-2 transition-all duration-300 flex flex-col justify-between space-y-4 ${
                  baseExperience === "solo"
                    ? "bg-slate-900/90 border-emerald-500 ring-2 ring-emerald-500/40 shadow-lg shadow-emerald-500/10"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-extrabold text-lg text-white">Solo Gorilla Entrance</h4>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        baseExperience === "solo"
                          ? "border-emerald-500 bg-emerald-500 text-slate-950"
                          : "border-slate-600"
                      }`}
                    >
                      {baseExperience === "solo" && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white">
                    PKR 25,000
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      Wild Card Grand Stage Entrance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      30–45 Mins High-Energy Beat Sync Show
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      Crowd Hype, Photos & Stage Interactivity
                    </li>
                  </ul>
                </div>
              </div>

              {/* VIP COMBO CARD */}
              <div
                onClick={() => handleSelectExperience("vip")}
                className={`relative cursor-pointer rounded-xl p-5 sm:p-6 border-2 transition-all duration-300 flex flex-col justify-between space-y-4 ${
                  baseExperience === "vip"
                    ? "bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border-emerald-500 ring-2 ring-emerald-500/40 shadow-lg shadow-emerald-500/10"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
                }`}
              >
                <div className="absolute -top-3.5 right-4 px-3.5 py-1 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-[11px] tracking-wider uppercase rounded-full shadow-md flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-slate-950" /> Most Popular
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-extrabold text-lg text-white">VIP Mascot + Media Combo</h4>
                      <p className="text-xs text-emerald-400 font-semibold">Full Event Coverage + Mascot Show</p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        baseExperience === "vip"
                          ? "border-emerald-500 bg-emerald-500 text-slate-950"
                          : "border-slate-600"
                      }`}
                    >
                      {baseExperience === "vip" && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-amber-300">
                      <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>🎬 Full Event Cinematic Video Editing</span>
                    </div>
                    <div className="font-black text-amber-400 text-[11px] uppercase tracking-wide">
                      🎁 100% FREE GIFT (Market Value: PKR 20,000)
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      Mascot Show + Cinema Crew & Drone Setup
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      Uncompressed Raw Photo/Video Backup Free
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2: SMART EVENT SCALE SUGGESTER */}
          <div className={`bg-[#0B101D] border border-slate-800/90 rounded-2xl p-5 sm:p-8 shadow-2xl space-y-5 transition-all duration-300 ${!baseExperience ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
            <div className="flex items-center justify-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm border border-emerald-500/40">
                2
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white text-center">Event Scale & Capacity</h3>
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
                  className={`min-h-[52px] p-3 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center ${
                    eventScale === scale.id
                      ? "bg-emerald-500/15 border-emerald-500 text-white ring-1 ring-emerald-500/30"
                      : "bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <span className="font-bold text-xs sm:text-sm">{scale.label}</span>
                  <span className="text-[11px] text-slate-400">{scale.desc}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {eventScale && (
                <motion.div
                  key={eventScale}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-center text-center gap-3"
                >
                  <Zap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300">
                    <span className="font-bold text-emerald-400">Smart Scale Recommendation: </span>
                    {eventScale === "intimate" && "Ideal for intimate birthdays! 1 Gorilla + 1 Media Crew works best."}
                    {eventScale === "medium" && "1 Gorilla + 1 Videographer + 1 Photographer recommended."}
                    {eventScale === "large" && "1 Gorilla + Full Media Crew + Drone Aerial Coverage recommended."}
                    {eventScale === "mega" && "🔥 2 Gorillas Fleet + 3-Person Media Crew + Drone Aerial Shot recommended for maximum stage impact!"}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* STEP 3: GRANULAR CREW & DELIVERABLES */}
          <div className={`bg-[#0B101D] border border-slate-800/90 rounded-2xl p-5 sm:p-8 shadow-2xl space-y-6 transition-all duration-300 ${!baseExperience ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
            <div className="flex items-center justify-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm border border-emerald-500/40">
                3
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white text-center">Customize Crew & Deliverables</h3>
            </div>

            <div className="space-y-4 divide-y divide-slate-800/70">
              {/* 1. Mascot Counter */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    Mascots Fleet Units
                  </div>
                  <p className="text-xs text-slate-400">PKR 18,000 per extra mascot unit</p>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setMascotsCount((prev) => Math.max(1, prev - 1))}
                    disabled={!baseExperience || mascotsCount <= 1}
                    className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-30 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-black text-base w-6 text-center text-white">{mascotsCount}</span>
                  <button
                    type="button"
                    onClick={() => setMascotsCount((prev) => prev + 1)}
                    disabled={!baseExperience}
                    className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-30 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 2. Videographers Counter */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <Video className="w-4 h-4 text-emerald-400" />
                    Videographer (Cinema 4K Cameraman)
                  </div>
                  <div className="text-xs space-x-2 mt-0.5">
                    <span className="text-slate-500 line-through">Market: PKR 35,000</span>
                    <span className="text-emerald-400 font-semibold">Direct: PKR 28,000</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setVideographers((prev) => Math.max(0, prev - 1))}
                    disabled={baseExperience === "solo" || videographers <= 0}
                    className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-30 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-black text-base w-6 text-center text-white">{videographers}</span>
                  <button
                    type="button"
                    onClick={() => setVideographers((prev) => prev + 1)}
                    disabled={baseExperience === "solo" || !baseExperience}
                    className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-30 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 3. Photographers Counter */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <Camera className="w-4 h-4 text-emerald-400" />
                    Photographer (DSLR High-Res)
                  </div>
                  <div className="text-xs space-x-2 mt-0.5">
                    <span className="text-slate-500 line-through">Market: PKR 28,000</span>
                    <span className="text-emerald-400 font-semibold">Direct: PKR 22,000</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setPhotographers((prev) => Math.max(0, prev - 1))}
                    disabled={baseExperience === "solo" || photographers <= 0}
                    className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-30 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-black text-base w-6 text-center text-white">{photographers}</span>
                  <button
                    type="button"
                    onClick={() => setPhotographers((prev) => prev + 1)}
                    disabled={baseExperience === "solo" || !baseExperience}
                    className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 disabled:opacity-30 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 4. Drone Coverage Toggle */}
              <div className="pt-4 flex items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-sm sm:text-base text-white">Drone Aerial 4K Coverage</div>
                  <div className="text-xs space-x-2 mt-0.5">
                    <span className="text-slate-500 line-through">Market: PKR 18,000</span>
                    <span className="text-emerald-400 font-semibold">Direct: PKR 12,000</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setDroneCoverage((prev) => !prev)}
                  disabled={baseExperience === "solo" || !baseExperience}
                  className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out disabled:opacity-30 ${
                    droneCoverage ? "bg-emerald-500" : "bg-slate-800"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out ${
                      droneCoverage ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* 5. Premium Hardbook Album Toggle */}
              <div className="pt-4 flex items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                    Premium Printed Hardbook Album
                  </div>
                  <div className="text-xs space-x-2 mt-0.5">
                    <span className="text-slate-500 line-through">Market: PKR 20,000</span>
                    <span className="text-emerald-400 font-semibold">Direct: PKR 15,000</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setHardbookAlbum((prev) => !prev)}
                  disabled={baseExperience === "solo" || !baseExperience}
                  className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out disabled:opacity-30 ${
                    hardbookAlbum ? "bg-emerald-500" : "bg-slate-800"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out ${
                      hardbookAlbum ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* STEP 4: CITY & DATE SELECTION */}
          <div className={`bg-[#0B101D] border border-slate-800/90 rounded-2xl p-5 sm:p-8 shadow-2xl space-y-5 transition-all duration-300 ${!baseExperience ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
            <div className="flex items-center justify-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm border border-emerald-500/40">
                4
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white text-center">Event Location & Booking Date</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Select Event City
                </label>
                <div className="relative">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full min-h-[50px] bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 appearance-none pr-10 cursor-pointer font-medium"
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

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  Select Event Date
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full min-h-[50px] bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 cursor-pointer font-medium"
                />
              </div>
            </div>
          </div>

          {/* LIVE COST SUMMARY PANEL */}
          <div className="bg-[#0B101D] border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden text-center max-w-2xl mx-auto">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500" />

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-white">Live Cost Breakdown</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30">
                Direct Pricing Guarantee
              </span>
            </div>

            {/* SAVINGS BADGE */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1 text-center">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center justify-center gap-1.5">
                <Gift className="w-4 h-4" /> Total Estimated Savings
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-300">
                PKR {pricing.savings.toLocaleString()}+
              </div>
            </div>

            {/* TOTAL PRICE DISPLAY */}
            <div className="space-y-3 py-2">
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-slate-400 font-medium">Standard Market Value:</span>
                <span className="text-slate-500 line-through font-bold">
                  PKR {pricing.market.toLocaleString()}
                </span>
              </div>
              <div className="flex items-baseline justify-between border-t border-slate-800 pt-3">
                <span className="text-base sm:text-lg font-extrabold text-white">Direct Package Total:</span>
                <span className="text-3xl sm:text-4xl font-black text-emerald-400">
                  PKR {pricing.direct.toLocaleString()}
                </span>
              </div>
            </div>

            {/* WHATSAPP CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full min-h-[54px] px-6 py-4 rounded-xl text-slate-950 font-black text-base tracking-wide transition-all duration-200 shadow-xl flex items-center justify-center gap-2 ${
                baseExperience
                  ? "bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-emerald-500/20"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed opacity-50 pointer-events-none"
              }`}
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              {baseExperience ? "Lock Date & Reserve Offer via WhatsApp" : "Please Select Base Experience First"}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
export { InteractiveEventConfigurator as ServicePackages };