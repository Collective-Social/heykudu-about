"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeRole, setActiveRole] = useState(0);
  const [activeEpa, setActiveEpa] = useState(0);

  const epaList = [
    {
      id: "EPA 1",
      title: "Direct Observation",
      badge: "Clinical Encounter",
      level: "Level 4: Entrustable",
      score: "94%",
      dataPoints: [30, 48, 65, 82, 94],
      labels: ["Jan", "Feb", "Mar", "Apr", "May"]
    },
    {
      id: "EPA 2",
      title: "Case-based Discussion",
      badge: "Case formulation",
      level: "Level 3: Guided Practice",
      score: "78%",
      dataPoints: [20, 38, 52, 68, 78],
      labels: ["Jan", "Feb", "Mar", "Apr", "May"]
    },
    {
      id: "EPA 3",
      title: "Procedural Skills",
      badge: "DOPS Validation",
      level: "Level 4: Entrustable",
      score: "91%",
      dataPoints: [40, 55, 70, 85, 91],
      labels: ["Jan", "Feb", "Mar", "Apr", "May"]
    }
  ];

  const { scrollY } = useScroll();
  
  // Staggered Scroll-driven reveal transformations for awards-winning UX
  // Card 1: EPA Progress (reveals first as you scroll, 30px to 150px)
  const opacityCard1 = useTransform(scrollY, [30, 150], [0, 1]);
  const yCard1 = useTransform(scrollY, [30, 150], [60, 0]);
  const scaleCard1 = useTransform(scrollY, [0, 450], [1.0, 1.15]);

  // Card 2: WBA Competence (reveals second, 100px to 220px)
  const opacityCard2 = useTransform(scrollY, [90, 210], [0, 1]);
  const yCard2 = useTransform(scrollY, [90, 210], [70, 0]);
  const scaleCard2 = useTransform(scrollY, [0, 450], [1.0, 1.12]);

  // Card 3: Rotation Status (reveals third, 170px to 290px)
  const opacityCard3 = useTransform(scrollY, [150, 270], [0, 1]);
  const yCard3 = useTransform(scrollY, [150, 270], [80, 0]);
  const scaleCard3 = useTransform(scrollY, [0, 450], [1.0, 1.15]);

  // Card 4: Clinical Skills (reveals fourth, 230px to 350px)
  const opacityCard4 = useTransform(scrollY, [210, 330], [0, 1]);
  const yCard4 = useTransform(scrollY, [210, 330], [90, 0]);
  const scaleCard4 = useTransform(scrollY, [0, 450], [1.0, 1.10]);

  const roles = [
    {
      id: "student",
      name: "Student / Resident",
      icon: "school",
      tagline: "Your entire clinical training catalog, beautifully streamlined.",
      details: "Ditch the paper sign-off cards. Track your clinical attendance, ward rotations, and Workplace Based Assessments (Mini-CEX, DOPS, MSF) securely from any mobile browser, keeping detailed analytics on your progress.",
      cta: "Get Started Now",
      target: "https://heykudu.com",
      isExternal: true,
      features: ["Real-time EPA milestone logs", "Instant device-to-device QR scanning", "Personalized skill gap charts"]
    },
    {
      id: "clinician",
      name: "Clinical Tutor / Supervisor",
      icon: "medical_services",
      tagline: "Evaluate on the ward in under 10 seconds.",
      details: "No more tracking down paperwork or logging into heavy school systems. Simply scan the student's screen with your device camera to securely open, evaluate, and submit assessment ratings instantly on your smartphone.",
      cta: "Learn Scan Verification",
      target: "/features/geo-fence",
      isExternal: false,
      features: ["Zero administrative log-in needed", "Privacy-preserving GPS confirmation", "Instant EPA progression approval"]
    },
    {
      id: "coordinator",
      name: "Program Coordinator",
      icon: "grid_view",
      tagline: "Total curriculum insight. Standardized workflows.",
      details: "Gain immediate oversight over active cohorts, attendance rates, and assessment matrices. Map trainee achievements to global competency standards and coordinate clinical assignments seamlessly.",
      cta: "Explore Tracking Metrics",
      target: "/features/epa-tracking",
      isExternal: false,
      features: ["Automated rotation assignment charts", "Unified skills compliance matrices", "One-click CSV/PDF reports export"]
    },
    {
      id: "dean",
      name: "Institutional Leader / Dean",
      icon: "verified_user",
      tagline: "Clinical standardizations at scale.",
      details: "Deploy heykudu across your medical university, residency network, or hospital group. Benefit from secure end-to-end encryption, automatic LMS sync integrations, and fully audit-ready compliance trails.",
      cta: "Request Institutional Demo",
      target: "/contact",
      isExternal: false,
      features: ["Full Canvas & Moodle integrations", "Enterprise HIPAA & GDPR isolation", "Flexible global grading parameters"]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[92vh] flex items-center bg-surface overflow-hidden py-28 border-b border-outline-variant/10">
          
          {/* Google Health Style: Full-bleed background image with premium overlay mask */}
          <div className="absolute inset-0 w-full h-full select-none pointer-events-none transition-all duration-1000 z-0">
            <img 
              className="w-full h-full object-cover object-center lg:object-right opacity-[0.80] transition-all duration-1000" 
              src="/images/clean-team.png" 
              alt="heykudu clinical rotation collaborative team background"
            />
            {/* Custom high-end vignette overlay: strong solid cover on the left for text readability, fading to transparent on the right, and smoothly merging to surface color on top and bottom */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/50 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/10 z-10"></div>
          </div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full relative z-20 grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6 lg:col-span-7 max-w-2xl text-left"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 text-primary font-semibold text-xs uppercase tracking-wider"
              >
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Standardizing Clinical Excellence
              </motion.div>
 
              <motion.h1 
                variants={fadeInUp}
                className="font-extrabold text-5xl md:text-6xl lg:text-7xl text-on-surface leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                Clinical tracking,<br />simplified.
              </motion.h1>
 
              <motion.p 
                variants={fadeInUp}
                className="font-medium text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed"
              >
                The modern tracking platform for rotations, attendance, and clinical assessment milestones. Built for medical students, tutors, and global university programs.
              </motion.p>
 
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://heykudu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-center hover:opacity-95 transition-all text-sm shadow-md"
                >
                  Use App Free
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-surface-container-low border border-outline-variant/30 text-on-surface rounded-full font-bold text-center hover:bg-surface-container-high transition-all text-sm"
                >
                  Request Demo
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Interactive HUD Column */}
            <div className="relative lg:col-span-5 h-[360px] md:h-[450px] lg:h-[500px] w-full overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center lg:block">
                
                {/* Floating Card 1: EPA Progress */}
                <motion.div 
                  style={{ opacity: opacityCard1, y: yCard1, scale: scaleCard1 }}
                  className="absolute top-16 left-4 md:left-12 lg:-left-4 z-20"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-surface-container-lowest/95 backdrop-blur border border-outline-variant/30 p-4 rounded-2xl shadow-xl w-52 text-[11px] space-y-2"
                  >
                    <div className="flex justify-between items-center text-primary font-bold border-b border-outline-variant/10 pb-1.5">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">trending_up</span>
                        EPA PROGRESS
                      </span>
                      <span className="font-extrabold">85%</span>
                    </div>
                    <div className="w-full bg-outline-variant/20 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <div className="text-[9px] text-on-surface-variant font-medium">Core milestones achieved</div>
                  </motion.div>
                </motion.div>

                {/* Floating Card 2: WBA Competence */}
                <motion.div 
                  style={{ opacity: opacityCard2, y: yCard2, scale: scaleCard2 }}
                  className="absolute top-40 right-4 md:right-12 lg:-right-8 z-20"
                >
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="bg-surface-container-lowest/95 backdrop-blur border border-outline-variant/30 p-4 rounded-2xl shadow-xl w-52 text-[11px] space-y-2"
                  >
                    <div className="flex justify-between items-center text-green-600 font-bold border-b border-outline-variant/10 pb-1.5">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">verified</span>
                        WBA COMPETENCE
                      </span>
                      <span className="font-extrabold">Lvl 4</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-green-500 animate-pulse">check_circle</span>
                      <span className="text-[10px] text-on-surface font-bold">Indirect Supervision</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Card 3: Rotation Status */}
                <motion.div 
                  style={{ opacity: opacityCard3, y: yCard3, scale: scaleCard3 }}
                  className="absolute bottom-12 left-8 md:left-24 lg:-left-16 z-20"
                >
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="bg-surface-container-lowest/95 backdrop-blur border border-outline-variant/30 p-4 rounded-2xl shadow-xl w-48 text-[11px] space-y-1.5"
                  >
                    <div className="text-on-surface-variant font-medium text-[9px] uppercase tracking-wider">ROTATION STATUS</div>
                    <div className="font-extrabold text-on-surface text-xs flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Active On Wards
                    </div>
                    <div className="text-[9px] text-on-surface-variant">General Surgery</div>
                  </motion.div>
                </motion.div>

                {/* Floating Card 4: Clinical Skills */}
                <motion.div 
                  style={{ opacity: opacityCard4, y: yCard4, scale: scaleCard4 }}
                  className="absolute bottom-2 right-8 md:right-24 lg:right-0 z-20"
                >
                  <motion.div
                    animate={{ y: [0, -9, 0] }}
                    transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                    className="bg-surface-container-lowest/95 backdrop-blur border border-outline-variant/30 p-4 rounded-2xl shadow-xl w-48 text-[11px] space-y-2"
                  >
                    <div className="flex justify-between items-center text-primary font-bold border-b border-outline-variant/10 pb-1">
                      <span className="text-[9px] uppercase">Clinical Skills</span>
                      <span>80%</span>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      <span className="px-1.5 py-0.5 rounded bg-primary/5 text-primary text-[8px] font-bold">Vitals</span>
                      <span className="px-1.5 py-0.5 rounded bg-primary/5 text-primary text-[8px] font-bold">Mini-CEX</span>
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            </div>

          </div>
        </section>

        {/* EPA Workflow Section */}
        <section className="py-32 bg-surface-container-lowest border-y border-outline-variant/10 overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-32 space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">
                Practical Guide
              </span>
              <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-on-surface tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                The Paperless EPA Workflow
              </h2>
              <p className="text-on-surface-variant font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Zero friction, absolute trust. See how medical programs transition completely off paper, completing secure bedside assessments in under 10 seconds.
              </p>
            </div>

            {/* Vertical Flow Steps */}
            <div className="space-y-40 lg:space-y-56 max-w-5xl mx-auto">

              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-black text-4xl text-primary/30">01</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">Initiation</span>
                  </div>
                  <h3 className="font-black text-2xl md:text-3xl text-on-surface leading-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Define the Clinical Encounter & Skill Context
                  </h3>
                  <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                    Ditch standard loose-leaf cards. Right at the bedside, the student opens heykudu on any mobile device and selects their current active rotation context—such as General Surgery or Pediatric Emergency.
                  </p>
                  <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                    They choose the target Entrustable Professional Activity (EPA) milestone directly from the university&apos;s pre-loaded curriculum catalog. The system prepares the parameters dynamically based on rotation stage and difficulty level.
                  </p>
                </div>
                
                <div className="lg:col-span-6 flex justify-center">
                  <div className="bg-surface-container-low border border-outline-variant/30 rounded-3xl p-8 shadow-xl max-w-sm w-full space-y-4 relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-center text-primary font-bold border-b border-outline-variant/10 pb-3 text-xs">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">stethoscope</span>
                        EPA CONTEXT
                      </span>
                      <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px]">Step 1 of 4</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Active Rotation</div>
                        <div className="text-sm font-bold text-on-surface flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                          General Surgery (Wards)
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Target Curriculum Activity</div>
                        <div className="text-xs font-semibold text-on-surface bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-3">
                          EPA 1: Provide clinical assessments and plan management for common post-operative conditions.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse"
              >
                <div className="lg:col-span-6 lg:order-2 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-black text-4xl text-primary/30">02</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">Evaluation</span>
                  </div>
                  <h3 className="font-black text-2xl md:text-3xl text-on-surface leading-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Observe & Grade Entrustment Levels
                  </h3>
                  <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                    The clinical supervisor observes the trainee&apos;s active clinical interaction. Once complete, the student passes their smartphone over to the tutor.
                  </p>
                  <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                    With a swift, clinical-grade interface, the supervisor rates the student&apos;s entrustment scaling from Level 1 (requires direct observation) to Level 4 (can execute under indirect supervision/independently). It takes only 3 taps.
                  </p>
                </div>
                
                <div className="lg:col-span-6 lg:order-1 flex justify-center">
                  <div className="bg-surface-container-low border border-outline-variant/30 rounded-3xl p-8 shadow-xl max-w-sm w-full space-y-4 relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute -left-4 -top-4 w-24 h-24 bg-green-500/5 rounded-full blur-2xl"></div>
                    <div className="flex justify-between items-center text-primary font-bold border-b border-outline-variant/10 pb-3 text-xs">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">tune</span>
                        EPA RATINGS
                      </span>
                      <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px]">Step 2 of 4</span>
                    </div>
                    <div className="space-y-3">
                      <div className="text-[10px] text-on-surface-variant font-bold uppercase">Entrustment Scale</div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between items-center p-2.5 rounded-xl border border-outline-variant/20 bg-surface-container-lowest text-on-surface-variant">
                          <span>Level 2: Direct Supervision</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant/50"></span>
                        </div>
                        <div className="flex justify-between items-center p-2.5 rounded-xl border border-primary/30 bg-primary/5 text-primary font-bold shadow-sm">
                          <span>Level 4: Indirect Supervision</span>
                          <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-black text-4xl text-primary/30">03</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">Feedback</span>
                  </div>
                  <h3 className="font-black text-2xl md:text-3xl text-on-surface leading-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Document Rapid, High-Value Actionable Comments
                  </h3>
                  <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                    Data shows that numbers alone don&apos;t train elite clinicians. High-trust medical education hinges on rapid, direct, qualitative feedback notes.
                  </p>
                  <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                    Supervisors type out brief, high-impact clinical focus notes outlining what the student did exceptionally well, and details on specific clinical safety behaviors or skills to target next.
                  </p>
                </div>
                
                <div className="lg:col-span-6 flex justify-center">
                  <div className="bg-surface-container-low border border-outline-variant/30 rounded-3xl p-8 shadow-xl max-w-sm w-full space-y-4 relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="flex justify-between items-center text-primary font-bold border-b border-outline-variant/10 pb-3 text-xs">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">rate_review</span>
                        CLINICAL FOCUS COMMENTS
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="text-[10px] text-on-surface-variant font-bold uppercase">Assessor Feedback</div>
                      <div className="space-y-2.5">
                        <div className="text-[10px] text-on-surface-variant">What went particularly well?</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-xl p-3 text-xs text-on-surface italic leading-relaxed">
                          &quot;Outstanding communication during pre-op consult. Clear patient explanation of surgical risks. Monitor post-op vitals more closely.&quot;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse"
              >
                <div className="lg:col-span-6 lg:order-2 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-black text-4xl text-primary/30">04</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Verification</span>
                  </div>
                  <h3 className="font-black text-2xl md:text-3xl text-on-surface leading-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Instantly Secure with Scan Verification
                  </h3>
                  <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                    The absolute crown jewel of the paperless experience. Once comments are added, the student&apos;s phone converts the session into a encrypted on-screen QR Code.
                  </p>
                  <p className="text-on-surface-variant font-medium text-base leading-relaxed">
                    The supervisor opens their smartphone camera and simply scans the student&apos;s on-screen QR. No heavy portals to load, no password reset loops. The scan instantly signs off, seals, and uploads the milestone securely to the university dashboard.
                  </p>
                </div>
                
                <div className="lg:col-span-6 lg:order-1 flex justify-center items-center py-8">
                  <div className="relative w-full max-w-[440px] h-[480px] flex items-center justify-center">
                    {/* Phone 1: Student App with QR Code */}
                    <div className="absolute left-6 top-8 w-[210px] h-[420px] bg-slate-950 rounded-[40px] p-2 border-[6px] border-slate-800 shadow-2xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition-transform duration-500 z-10 select-none">
                      {/* Notch / Speaker */}
                      <div className="absolute top-0 inset-x-0 h-4 flex justify-center items-center z-30">
                        <div className="w-16 h-3.5 bg-slate-950 rounded-b-xl"></div>
                      </div>
                      
                      {/* Student Screen Content */}
                      <div className="w-full h-full bg-[#7D00FF] rounded-[30px] p-3 pt-6 flex flex-col justify-between text-white text-[10px] relative overflow-hidden">
                        {/* Top bar */}
                        <div className="flex justify-between items-center pb-2">
                          <span className="font-extrabold text-[12px] tracking-tight">heykudu</span>
                          <span className="w-5 h-5 rounded-lg bg-white/10 flex items-center justify-center text-[10px]">←</span>
                        </div>

                        {/* Saved Status */}
                        <div className="flex flex-col items-center gap-1.5 my-1">
                          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-primary shadow-md">
                            <span className="material-symbols-outlined text-[15px] font-bold">check</span>
                          </div>
                          <span className="font-black text-[12px] tracking-tight text-center">Assessment Saved</span>
                        </div>

                        {/* Glassmorphic Verification Card */}
                        <div className="bg-white/15 backdrop-blur-md rounded-2xl p-2.5 border border-white/15 flex flex-col items-center gap-2 flex-grow justify-center">
                          <div className="flex items-center gap-1 font-bold text-[8px] tracking-wide opacity-95">
                            <span className="material-symbols-outlined text-[10px]">qr_code</span>
                            Verification Code
                          </div>
                          
                          <div className="bg-white/10 rounded-lg p-1.5 text-[6.5px] leading-snug text-center text-white/90">
                            To paperlessly verify this submission, kindly ask your clinician to scan this code.
                          </div>

                          {/* White QR Area */}
                          <div className="bg-white rounded-xl p-1.5 w-24 h-24 flex items-center justify-center shadow-lg relative">
                            {/* Detailed dynamic QR Code representation */}
                            <svg className="w-full h-full text-slate-900" viewBox="0 0 25 25" fill="currentColor">
                              {/* Anchors */}
                              {/* Top Left */}
                              <rect x="0" y="0" width="7" height="7" />
                              <rect x="1" y="1" width="5" height="5" fill="white" />
                              <rect x="2" y="2" width="3" height="3" />

                              {/* Top Right */}
                              <rect x="18" y="0" width="7" height="7" />
                              <rect x="19" y="1" width="5" height="5" fill="white" />
                              <rect x="20" y="2" width="3" height="3" />

                              {/* Bottom Left */}
                              <rect x="0" y="18" width="7" height="7" />
                              <rect x="1" y="19" width="5" height="5" fill="white" />
                              <rect x="2" y="20" width="3" height="3" />

                              {/* Bottom Right Mini Alignment */}
                              <rect x="16" y="16" width="5" height="5" />
                              <rect x="17" y="17" width="3" height="3" fill="white" />
                              <rect x="18" y="18" width="1" height="1" />

                              {/* High density pseudo-random QR modules */}
                              <rect x="0" y="8" width="1" height="1" />
                              <rect x="2" y="8" width="2" height="1" />
                              <rect x="5" y="8" width="1" height="1" />
                              <rect x="1" y="9" width="1" height="1" />
                              <rect x="3" y="9" width="1" height="1" />
                              <rect x="6" y="9" width="1" height="1" />
                              <rect x="0" y="10" width="2" height="1" />
                              <rect x="3" y="10" width="3" height="1" />
                              <rect x="2" y="11" width="1" height="1" />
                              <rect x="5" y="11" width="2" height="1" />
                              <rect x="0" y="12" width="1" height="1" />
                              <rect x="4" y="12" width="1" height="1" />
                              <rect x="6" y="12" width="1" height="1" />
                              <rect x="1" y="13" width="2" height="1" />
                              <rect x="4" y="13" width="2" height="1" />
                              <rect x="0" y="14" width="3" height="1" />
                              <rect x="5" y="14" width="1" height="1" />
                              <rect x="2" y="15" width="2" height="1" />
                              <rect x="6" y="15" width="1" height="1" />
                              <rect x="1" y="16" width="1" height="1" />
                              <rect x="4" y="16" width="1" height="1" />
                              <rect x="0" y="17" width="2" height="1" />
                              <rect x="3" y="17" width="3" height="1" />

                              <rect x="8" y="0" width="1" height="2" />
                              <rect x="10" y="1" width="2" height="1" />
                              <rect x="13" y="0" width="1" height="1" />
                              <rect x="15" y="1" width="1" height="2" />
                              <rect x="8" y="3" width="2" height="1" />
                              <rect x="11" y="2" width="1" height="1" />
                              <rect x="13" y="3" width="3" height="1" />
                              <rect x="9" y="5" width="1" height="1" />
                              <rect x="11" y="4" width="2" height="1" />
                              <rect x="14" y="5" width="1" height="2" />
                              <rect x="8" y="6" width="3" height="1" />
                              <rect x="12" y="6" width="1" height="1" />
                              <rect x="15" y="6" width="2" height="1" />

                              {/* Timing patterns */}
                              <rect x="8" y="8" width="1" height="1" />
                              <rect x="10" y="8" width="1" height="1" />
                              <rect x="12" y="8" width="1" height="1" />
                              <rect x="14" y="8" width="1" height="1" />
                              <rect x="16" y="8" width="1" height="1" />
                              <rect x="8" y="10" width="1" height="1" />
                              <rect x="8" y="12" width="1" height="1" />
                              <rect x="8" y="14" width="1" height="1" />
                              <rect x="8" y="16" width="1" height="1" />

                              <rect x="10" y="10" width="2" height="2" />
                              <rect x="13" y="9" width="3" height="1" />
                              <rect x="15" y="11" width="2" height="2" />
                              <rect x="10" y="13" width="4" height="1" />
                              <rect x="9" y="15" width="2" height="1" />
                              <rect x="12" y="15" width="3" height="2" />
                              <rect x="15" y="14" width="1" height="1" />

                              <rect x="18" y="8" width="3" height="1" />
                              <rect x="22" y="9" width="2" height="1" />
                              <rect x="19" y="10" width="1" height="2" />
                              <rect x="21" y="11" width="3" height="1" />
                              <rect x="18" y="13" width="2" height="2" />
                              <rect x="21" y="14" width="1" height="1" />
                              <rect x="23" y="13" width="2" height="1" />
                              <rect x="20" y="16" width="3" height="1" />
                              <rect x="18" y="15" width="1" height="1" />
                              <rect x="23" y="16" width="1" height="2" />

                              <rect x="8" y="18" width="2" height="1" />
                              <rect x="11" y="19" width="3" height="1" />
                              <rect x="9" y="21" width="1" height="2" />
                              <rect x="12" y="20" width="2" height="2" />
                              <rect x="8" y="23" width="4" height="1" />
                              <rect x="14" y="22" width="2" height="1" />
                              <rect x="13" y="18" width="1" height="2" />
                              <rect x="15" y="19" width="2" height="1" />

                              <rect x="22" y="18" width="1" height="2" />
                              <rect x="24" y="19" width="1" height="1" />
                              <rect x="22" y="21" width="3" height="1" />
                              <rect x="23" y="23" width="2" height="1" />
                            </svg>
                          </div>

                          <div className="text-[7.5px] font-bold opacity-80 mt-1 cursor-pointer">Dismiss Code</div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="grid grid-cols-2 gap-1.5 pt-2">
                          <div className="border border-white/30 rounded-lg py-1.5 font-bold text-center text-[7px]">Profile</div>
                          <div className="bg-white text-[#7D00FF] rounded-lg py-1.5 font-extrabold text-center text-[7px] shadow-sm">Add Another</div>
                        </div>
                      </div>
                    </div>

                    {/* Phone 2: Supervisor held camera scanner */}
                    <div className="absolute right-6 bottom-4 w-[210px] h-[420px] bg-slate-950 rounded-[40px] p-2 border-[6px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden rotate-[6deg] hover:rotate-0 transition-transform duration-500 z-20 select-none">
                      {/* Notch / Speaker */}
                      <div className="absolute top-0 inset-x-0 h-4 flex justify-center items-center z-30">
                        <div className="w-16 h-3.5 bg-slate-950 rounded-b-xl"></div>
                      </div>

                      {/* Supervisor Camera Content */}
                      <div className="w-full h-full bg-slate-900 rounded-[30px] p-3 pt-6 flex flex-col justify-between text-white text-[10px] relative overflow-hidden">
                        {/* Live Camera Viewfinder Overlay */}
                        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] z-0"></div>
                        
                        {/* Static visual representation of QR code in camera view */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 scale-125 z-0">
                          <svg className="w-32 h-32 text-white" viewBox="0 0 25 25" fill="currentColor">
                            {/* Anchors */}
                            {/* Top Left */}
                            <rect x="0" y="0" width="7" height="7" />
                            <rect x="1" y="1" width="5" height="5" fill="none" stroke="currentColor" strokeWidth="0" />
                            <rect x="2" y="2" width="3" height="3" />

                            {/* Top Right */}
                            <rect x="18" y="0" width="7" height="7" />
                            <rect x="19" y="1" width="5" height="5" fill="none" stroke="currentColor" strokeWidth="0" />
                            <rect x="20" y="2" width="3" height="3" />

                            {/* Bottom Left */}
                            <rect x="0" y="18" width="7" height="7" />
                            <rect x="1" y="19" width="5" height="5" fill="none" stroke="currentColor" strokeWidth="0" />
                            <rect x="2" y="20" width="3" height="3" />

                            {/* Bottom Right Mini Alignment */}
                            <rect x="16" y="16" width="5" height="5" />
                            <rect x="17" y="17" width="3" height="3" fill="none" stroke="currentColor" strokeWidth="0" />
                            <rect x="18" y="18" width="1" height="1" />

                            {/* High density pseudo-random QR modules */}
                            <rect x="0" y="8" width="1" height="1" />
                            <rect x="2" y="8" width="2" height="1" />
                            <rect x="5" y="8" width="1" height="1" />
                            <rect x="1" y="9" width="1" height="1" />
                            <rect x="3" y="9" width="1" height="1" />
                            <rect x="6" y="9" width="1" height="1" />
                            <rect x="0" y="10" width="2" height="1" />
                            <rect x="3" y="10" width="3" height="1" />
                            <rect x="2" y="11" width="1" height="1" />
                            <rect x="5" y="11" width="2" height="1" />
                            <rect x="0" y="12" width="1" height="1" />
                            <rect x="4" y="12" width="1" height="1" />
                            <rect x="6" y="12" width="1" height="1" />
                            <rect x="1" y="13" width="2" height="1" />
                            <rect x="4" y="13" width="2" height="1" />
                            <rect x="0" y="14" width="3" height="1" />
                            <rect x="5" y="14" width="1" height="1" />
                            <rect x="2" y="15" width="2" height="1" />
                            <rect x="6" y="15" width="1" height="1" />
                            <rect x="1" y="16" width="1" height="1" />
                            <rect x="4" y="16" width="1" height="1" />
                            <rect x="0" y="17" width="2" height="1" />
                            <rect x="3" y="17" width="3" height="1" />

                            <rect x="8" y="0" width="1" height="2" />
                            <rect x="10" y="1" width="2" height="1" />
                            <rect x="13" y="0" width="1" height="1" />
                            <rect x="15" y="1" width="1" height="2" />
                            <rect x="8" y="3" width="2" height="1" />
                            <rect x="11" y="2" width="1" height="1" />
                            <rect x="13" y="3" width="3" height="1" />
                            <rect x="9" y="5" width="1" height="1" />
                            <rect x="11" y="4" width="2" height="1" />
                            <rect x="14" y="5" width="1" height="2" />
                            <rect x="8" y="6" width="3" height="1" />
                            <rect x="12" y="6" width="1" height="1" />
                            <rect x="15" y="6" width="2" height="1" />

                            {/* Timing patterns */}
                            <rect x="8" y="8" width="1" height="1" />
                            <rect x="10" y="8" width="1" height="1" />
                            <rect x="12" y="8" width="1" height="1" />
                            <rect x="14" y="8" width="1" height="1" />
                            <rect x="16" y="8" width="1" height="1" />
                            <rect x="8" y="10" width="1" height="1" />
                            <rect x="8" y="12" width="1" height="1" />
                            <rect x="8" y="14" width="1" height="1" />
                            <rect x="8" y="16" width="1" height="1" />

                            <rect x="10" y="10" width="2" height="2" />
                            <rect x="13" y="9" width="3" height="1" />
                            <rect x="15" y="11" width="2" height="2" />
                            <rect x="10" y="13" width="4" height="1" />
                            <rect x="9" y="15" width="2" height="1" />
                            <rect x="12" y="15" width="3" height="2" />
                            <rect x="15" y="14" width="1" height="1" />

                            <rect x="18" y="8" width="3" height="1" />
                            <rect x="22" y="9" width="2" height="1" />
                            <rect x="19" y="10" width="1" height="2" />
                            <rect x="21" y="11" width="3" height="1" />
                            <rect x="18" y="13" width="2" height="2" />
                            <rect x="21" y="14" width="1" height="1" />
                            <rect x="23" y="13" width="2" height="1" />
                            <rect x="20" y="16" width="3" height="1" />
                            <rect x="18" y="15" width="1" height="1" />
                            <rect x="23" y="16" width="1" height="2" />

                            <rect x="8" y="18" width="2" height="1" />
                            <rect x="11" y="19" width="3" height="1" />
                            <rect x="9" y="21" width="1" height="2" />
                            <rect x="12" y="20" width="2" height="2" />
                            <rect x="8" y="23" width="4" height="1" />
                            <rect x="14" y="22" width="2" height="1" />
                            <rect x="13" y="18" width="1" height="2" />
                            <rect x="15" y="19" width="2" height="1" />

                            <rect x="22" y="18" width="1" height="2" />
                            <rect x="24" y="19" width="1" height="1" />
                            <rect x="22" y="21" width="3" height="1" />
                            <rect x="23" y="23" width="2" height="1" />
                          </svg>
                        </div>

                        {/* Top bar info */}
                        <div className="flex justify-between items-center pb-2 z-10">
                          <span className="font-extrabold text-[9px] tracking-tight bg-slate-900/60 backdrop-blur px-2 py-0.5 rounded-full border border-white/10">📷 Camera Mode</span>
                          <span className="w-4 h-4 rounded-full bg-slate-900/60 backdrop-blur flex items-center justify-center">⚡</span>
                        </div>

                        {/* Scanning Box / Reticle */}
                        <div className="relative w-32 h-32 mx-auto my-auto border-2 border-dashed border-white/20 rounded-2xl flex items-center justify-center z-10">
                          {/* Corner Brackets */}
                          <div className="absolute top-0 left-0 w-3 h-3 border-t-4 border-l-4 border-green-400 rounded-tl"></div>
                          <div className="absolute top-0 right-0 w-3 h-3 border-t-4 border-r-4 border-green-400 rounded-tr"></div>
                          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-4 border-l-4 border-green-400 rounded-bl"></div>
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-4 border-r-4 border-green-400 rounded-br"></div>
                          
                          {/* Laser Scanning Line */}
                          <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_10px_#4ade80] animate-[bounce_2s_infinite]"></div>
                        </div>

                        {/* Bottom prompt overlay */}
                        <div className="bg-slate-950/80 backdrop-blur-md rounded-2xl p-2.5 border border-white/10 z-10 text-center space-y-1 mt-auto">
                          <div className="text-[8px] font-black text-green-400 flex items-center justify-center gap-1 uppercase tracking-wider animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                            QR Code Detected
                          </div>
                          <div className="text-[7px] text-white/80">Securing & transmitting encrypted assessment details...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </section>
 
        {/* Stateful Persona/Role Selector Section */}
        <section className="py-24 bg-surface border-t border-outline-variant/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="px-3.5 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">
                Who are you?
              </span>
              <h2 className="font-bold text-3xl md:text-4xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Select your profile to begin.
              </h2>
              <p className="text-on-surface-variant font-medium text-sm">
                Explore custom-tailored feature sets and integration guidelines built for your training environment.
              </p>
            </div>
 
            {/* Selector Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {roles.map((role, idx) => (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(idx)}
                  className={`p-6 rounded-2xl border transition-all flex flex-col items-center gap-3 text-center group ${
                    activeRole === idx
                      ? "bg-primary border-primary text-on-primary shadow-md scale-102"
                      : "bg-surface-container-low border-outline-variant/15 text-on-surface hover:border-primary/30"
                  }`}
                >
                  <div className={`w-10 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 ${
                    activeRole === idx ? "bg-on-primary/10" : "bg-primary/5 text-primary"
                  }`}>
                    <span className="material-symbols-outlined text-[24px]">
                      {role.icon}
                    </span>
                  </div>
                  <span className="font-bold text-sm tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    {role.name}
                  </span>
                </button>
              ))}
            </div>
 
            {/* Dynamic Content Panel */}
            <div className="bg-surface-container-low rounded-3xl border border-outline-variant/20 p-8 md:p-12 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Left Column: Descriptions */}
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-primary font-bold text-xs tracking-wider uppercase">
                      Tailored Flow for {roles[activeRole].name}
                    </span>
                    <h3 className="font-bold text-2xl md:text-3xl text-on-surface leading-snug" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                      {roles[activeRole].tagline}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-sm">
                      {roles[activeRole].details}
                    </p>
                    <div className="pt-2">
                      {roles[activeRole].isExternal ? (
                        <a
                          href={roles[activeRole].target}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-full font-bold shadow-sm hover:opacity-95 transition-all text-xs group"
                        >
                          {roles[activeRole].cta}
                          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                        </a>
                      ) : (
                        <Link
                          href={roles[activeRole].target}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-full font-bold shadow-sm hover:opacity-95 transition-all text-xs group"
                        >
                          {roles[activeRole].cta}
                          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                        </Link>
                      )}
                    </div>
                  </div>
 
                  {/* Right Column: Checkbox Features */}
                  <div className="lg:col-span-5 bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/15">
                    <h4 className="font-bold text-on-surface mb-5 text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                      Included capabilities
                    </h4>
                    <ul className="space-y-3.5">
                      {roles[activeRole].features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-green-500 text-[18px] mt-0.5">check_circle</span>
                          <span className="text-on-surface-variant font-medium text-xs leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
 
          </div>
        </section>

        {/* Values Bento Grid */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-bold text-headline-lg-mobile md:text-headline-lg mb-6 text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                Master every clinical milestone.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Designed by clinicians, for clinicians. Kudu automates the heavy lifting of administrative tracking so you can focus on excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: Attendance */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface rounded-[32px] p-8 md:p-10 border border-outline-variant/30 flex flex-col justify-between group hover:shadow-lg hover-lift"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[32px]">event_available</span>
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Precision Attendance
                  </h3>
                  <p className="text-on-surface-variant text-body-md">
                    Geo-verified tracking for rotations, lectures, and lab sessions. No more manual logs or lost signatures.
                  </p>
                </div>
              </motion.div>

              {/* Card 2: WBAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 bg-primary-container text-on-primary-container rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="flex-1 space-y-4">
                  <h3 className="font-bold text-2xl md:text-3xl" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Workplace Based Assessments
                  </h3>
                  <p className="text-body-lg opacity-90">
                    Real-time feedback loops that connect students and mentors. Capture insights at the point of care with mobile-first WBA forms.
                  </p>
                  <ul className="space-y-3 font-semibold text-sm">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">check_circle</span> Mini-CEX Integration</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">check_circle</span> DOPS Tracking</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">check_circle</span> Multi-Source Feedback</li>
                  </ul>
                </div>
                <div className="flex-1 w-full flex justify-center">
                  <img 
                    className="w-full max-w-[300px] h-64 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAuEr9GinXmxlVVRL5D0P8KhCHgTMrr4wpbU1VD4MPnKoxI0iuZOb4bOI4Ran9S8zWhhtXcjNHsKRTIqgTcWeSZ4A1SsMlSD_nqn_vUOJPKtJID3Glqxm6gdPke4tGDWu-tvoz_pHNnXM9mAXvTb_tgHj4ALdmsZZneuSNhiGCv2vL-KpE45fyMXqHPBkQ4QpoKIEc6Ia_nhDKlAr1mXpD4M341ZJp20nAzBhDT7AzCXXfQ8fqPPuIFw"
                    alt="Assessment Interface"
                  />
                </div>
              </motion.div>

              {/* Card 3: EPA Tracking */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 bg-surface-container-high rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row-reverse gap-8 items-center hover:shadow-xl transition-all"
              >
                <div className="flex-1 space-y-4">
                  <h3 className="font-bold text-2xl md:text-3xl text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    EPA Proficiency Pathways
                  </h3>
                  <p className="text-on-surface-variant text-body-md">
                    Visualize Entrustable Professional Activities (EPAs) through interactive growth charts. Monitor competency development across entire cohorts.
                  </p>
                  <Link href="/features/geo-fence" className="inline-flex items-center gap-2 text-primary font-bold group">
                    Learn about EPA Analytics
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </Link>
                </div>
                <div className="flex-1 w-full bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/30 shadow-inner flex flex-col gap-6 relative overflow-hidden group">
                  {/* Subtle background glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  {/* Header info */}
                  <div className="flex justify-between items-center pb-2 border-b border-outline-variant/15">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">Real-time Growth Tracker</span>
                      </div>
                      <h4 className="font-bold text-sm text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Clinical Competency</h4>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 px-3 py-1.5 rounded-xl flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">trending_up</span>
                      <span className="text-xs font-extrabold text-primary">EPA Analytics</span>
                    </div>
                  </div>

                  {/* EPA Interactive Tabs */}
                  <div className="flex gap-2">
                    {epaList.map((epa, idx) => (
                      <button
                        key={epa.id}
                        onClick={() => setActiveEpa(idx)}
                        className={`flex-1 py-2 px-3 rounded-xl border font-bold text-xs transition-all ${
                          activeEpa === idx
                            ? "bg-primary border-primary text-on-primary shadow-sm"
                            : "bg-surface border-outline-variant/15 text-on-surface-variant hover:border-primary/20 hover:text-on-surface"
                        }`}
                      >
                        {epa.id}
                      </button>
                    ))}
                  </div>

                  {/* Visualization Area */}
                  <div className="h-44 bg-surface rounded-2xl border border-outline-variant/15 p-4 flex flex-col justify-between relative group/chart">
                    {/* SVG Line Chart */}
                    <div className="absolute inset-0 p-4 pt-8 pb-10">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Grid lines */}
                        <line x1="0" y1="25" x2="100" y2="25" stroke="var(--md-sys-color-outline-variant)" strokeOpacity="0.1" strokeDasharray="3" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="var(--md-sys-color-outline-variant)" strokeOpacity="0.1" strokeDasharray="3" />
                        <line x1="0" y1="75" x2="100" y2="75" stroke="var(--md-sys-color-outline-variant)" strokeOpacity="0.1" strokeDasharray="3" />
                        
                        {/* Shaded Area under Curve */}
                        <motion.path
                          key={`area-${activeEpa}`}
                          initial={{ d: "M 0 100 L 0 100 L 25 100 L 50 100 L 75 100 L 100 100 Z" }}
                          animate={{ 
                            d: `M 0 100 L 0 ${100 - epaList[activeEpa].dataPoints[0]} L 25 ${100 - epaList[activeEpa].dataPoints[1]} L 50 ${100 - epaList[activeEpa].dataPoints[2]} L 75 ${100 - epaList[activeEpa].dataPoints[3]} L 100 ${100 - epaList[activeEpa].dataPoints[4]} L 100 100 Z` 
                          }}
                          transition={{ type: "spring", stiffness: 60, damping: 15 }}
                          fill="url(#gradient-primary)"
                          opacity="0.15"
                        />

                        {/* Main Trend Line */}
                        <motion.path
                          key={`line-${activeEpa}`}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          d={`M 0 ${100 - epaList[activeEpa].dataPoints[0]} L 25 ${100 - epaList[activeEpa].dataPoints[1]} L 50 ${100 - epaList[activeEpa].dataPoints[2]} L 75 ${100 - epaList[activeEpa].dataPoints[3]} L 100 ${100 - epaList[activeEpa].dataPoints[4]}`}
                          fill="none"
                          stroke="var(--md-sys-color-primary, #6750A4)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        {/* Definitions */}
                        <defs>
                          <linearGradient id="gradient-primary" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--md-sys-color-primary, #6750A4)" />
                            <stop offset="100%" stopColor="var(--md-sys-color-primary, #6750A4)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Chart Tooltips/Dots overlay */}
                    <div className="absolute inset-x-4 inset-y-4 pt-4 pb-6 flex justify-between items-end">
                      {epaList[activeEpa].dataPoints.map((val, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 group/dot relative" style={{ height: '100%', justifyContent: 'flex-end' }}>
                          {/* Hover Tooltip */}
                          <div className="absolute bottom-full mb-1 opacity-0 group-hover/dot:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-[10px] font-bold px-2 py-0.5 rounded shadow-sm whitespace-nowrap pointer-events-none z-10">
                            {val}%
                          </div>
                          {/* Pulsing Dot */}
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface shadow-sm relative z-10 group-hover/dot:scale-125 transition-transform"
                            style={{ bottom: `${val - 12}%` }}
                          />
                          <span className="text-[9px] font-extrabold text-on-surface-variant absolute bottom-[-16px]">{epaList[activeEpa].labels[i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary / Progress details */}
                  <div className="space-y-3.5 bg-surface p-4 rounded-2xl border border-outline-variant/15">
                    <div className="flex justify-between items-center">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{epaList[activeEpa].badge}</span>
                        <h5 className="font-bold text-xs text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>{epaList[activeEpa].title}</h5>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-extrabold text-primary">{epaList[activeEpa].score}</div>
                        <span className="text-[10px] font-bold text-green-500 flex items-center gap-0.5 justify-end">
                          <span className="material-symbols-outlined text-[10px]">check_circle</span>
                          {epaList[activeEpa].level.split(":")[0]}
                        </span>
                      </div>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <motion.div 
                        key={activeEpa}
                        initial={{ width: 0 }}
                        animate={{ width: `${epaList[activeEpa].dataPoints[4]}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Institution Focus */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface rounded-[32px] p-8 md:p-10 border border-outline-variant/30 flex flex-col justify-between group hover:shadow-lg hover-lift"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-tertiary-fixed flex items-center justify-center mb-8 shadow-sm">
                    <span className="material-symbols-outlined text-tertiary text-[32px]">analytics</span>
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                    Institutional Oversight
                  </h3>
                  <p className="text-on-surface-variant text-body-md">
                    Admin dashboards that offer bird&apos;s-eye views of program compliance and student performance trends.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Clinical Brain Section */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
                <div className="relative bg-surface-container-lowest p-12 rounded-[40px] shadow-2xl border border-outline-variant/20 flex flex-col justify-center items-center min-h-[340px] overflow-hidden">
                  {/* Concentric glowing pulse circles */}
                  <div className="absolute w-72 h-72 rounded-full border border-primary/10 animate-ping duration-[4000ms]"></div>
                  <div className="absolute w-56 h-56 rounded-full border border-primary/20 animate-pulse"></div>
                  <div className="absolute w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
                  
                  {/* Animated Psychology Brain Icon */}
                  <div className="relative z-10 flex items-center justify-center bg-surface-container-low p-8 rounded-full border border-primary/20 shadow-lg">
                    <span className="material-symbols-outlined text-primary text-[80px] animate-pulse">psychology</span>
                  </div>

                  {/* Floating AI Status Indicator */}
                  <div className="absolute bottom-8 bg-green-500/10 border border-green-500/20 text-green-600 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wide flex items-center gap-1.5 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    ACTIVE VOICE ENGINE READY
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 order-1 lg:order-2"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[18px]">psychology</span>
                  New: AI Clinical Brain
                </div>
                <h2 className="font-bold text-headline-lg-mobile md:text-headline-lg text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Expert Feedback at the <span className="text-primary">Speed of Voice.</span>
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Record patient context and proposed treatments to receive instant, expert feedback based on the latest clinical guidelines. Bridge the 116-year gap between paper logbooks and GenAI.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">mic</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-on-surface text-lg">Voice Record</h4>
                      <p className="text-on-surface-variant text-body-md">Speak your clinical case naturally.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">fact_check</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-on-surface text-lg">Guideline Verification</h4>
                      <p className="text-on-surface-variant text-body-md">Cross-check against the latest medical standards.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-on-surface text-lg">Live Feedback</h4>
                      <p className="text-on-surface-variant text-body-md">Instant senior consultant-level insights.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-bold text-headline-lg-mobile md:text-headline-lg mb-12 text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Seamlessly integrated into clinical workflow.
                </h2>
                <div className="space-y-12">
                  <div className="flex gap-6 relative">
                    <div className="absolute left-6 top-16 bottom-0 w-[2px] bg-outline-variant/30"></div>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-lg z-10">1</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                        Connect Your Institution
                      </h4>
                      <p className="text-on-surface-variant text-body-md">Onboard students and faculty in minutes with our native SIS integrations. Kudu syncs with your existing medical curriculum automatically.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 relative">
                    <div className="absolute left-6 top-16 bottom-0 w-[2px] bg-outline-variant/30"></div>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-fixed-dim text-primary flex items-center justify-center font-bold text-lg z-10">2</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                        Live Tracking &amp; WBAs
                      </h4>
                      <p className="text-on-surface-variant text-body-md">Capture assessments at the bedside. Faculty use QR codes or direct digital prompts to certify student performance instantly.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-fixed-dim text-primary flex items-center justify-center font-bold text-lg z-10">3</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                        Real-Time Insights
                      </h4>
                      <p className="text-on-surface-variant text-body-md">Dynamic dashboards visualize EPA mastery. Identify students needing support early and celebrate excellence as it happens.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="relative h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 rounded-[60px] transform rotate-3"></div>
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="relative w-full max-w-sm bg-white rounded-[48px] p-6 shadow-2xl border border-outline-variant/20 overflow-hidden"
                >
                  <div className="flex justify-between items-center mb-8">
                    <div className="h-1 bg-outline-variant w-12 rounded-full mx-auto absolute top-4 left-1/2 -translate-x-1/2"></div>
                    <span className="font-bold text-primary">Kudu Mobile</span>
                    <span className="material-symbols-outlined text-outline">battery_full</span>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-surface-container rounded-2xl p-4">
                      <div className="text-xs font-semibold text-on-surface-variant mb-2">Active Rotation</div>
                      <div className="font-bold text-xl text-on-surface">Cardiology Unit 4</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary-container/10 p-4 rounded-2xl border border-primary/20">
                        <div className="text-[12px] font-bold text-primary">Attendance</div>
                        <div className="text-xl font-bold">98%</div>
                      </div>
                      <div className="bg-tertiary-container/10 p-4 rounded-2xl border border-tertiary/20">
                        <div className="text-[12px] font-bold text-tertiary">EPAs Met</div>
                        <div className="text-xl font-bold">14/20</div>
                      </div>
                    </div>
                    <div className="h-44 rounded-2xl overflow-hidden shadow-inner">
                      <img 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs00xA86fEA8g-b3HJqf5oKgx7PSR8UNwNz2iw3CFKtU8iWnhQFxOuWdmhkgsLV0koat9EhxaeDc4NyxlsDPUevKyk-9lfoda1VzC3jVEI52S1Fq-Do-8BRsEodL1E9NCOYKGlZvD_wzXVZKWiYyejQV6v36yNgpk5nGzpuW1rZPtDJ8h0RSrXYtM4pMg8seXR2jKmKj5js4izPfkVd14tKuRq-impE1whfn557FC_ERwE7J66EBFQkQ" 
                        alt="Kudu App interface"
                      />
                    </div>
                    <a href="https://heykudu.com" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 bg-primary text-on-primary rounded-xl font-bold hover:shadow-lg transition-all scale-95 active:scale-90">
                      Log New Assessment
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-section-gap-mobile md:py-section-gap-desktop">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-inverse-surface rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="font-bold text-headline-lg-mobile md:text-headline-lg text-inverse-on-surface" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  Ready to transform your clinical education?
                </h2>
                <p className="font-body-lg text-body-lg text-inverse-on-surface opacity-80">
                  Join the world&apos;s leading medical institutions and streamline your tracking today. No setup fees, no legacy headaches.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="https://heykudu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-primary text-on-primary rounded-full font-semibold shadow-2xl hover:scale-105 active:scale-95 transition-all text-center"
                  >
                    Get Started for Free
                  </a>
                  <Link
                    href="/contact"
                    className="px-10 py-5 border border-outline text-inverse-on-surface rounded-full font-semibold hover:bg-white/10 transition-all text-center"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
