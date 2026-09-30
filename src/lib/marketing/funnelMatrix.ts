/**
 * Heykudu University B2B Funnel Matrix (Enterprise 8-Variant Testing Engine)
 * Defines the Landing Pages, CTAs, Deliverables, Scripts,
 * and 80+ Google Responsive Search Ad variations across target roles.
 * Covers both Medical/Health Sciences and University-Wide/Non-Medical applications.
 */

export interface FunnelVariant {
  slug: string;
  category: "medical" | "university_wide" | "student_led";
  badge: string;
  title: string;
  targetPersona: string;
  targetRole: string;
  heroHeadline: string;
  heroSubhead: string;
  proofStats: Array<{
    value: string;
    label: string;
    subtext: string;
  }>;
  painPoints: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  solutionFeatures: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  primaryCta: {
    label: string;
    actionType: "schedule_briefing" | "deploy_pilot" | "interactive_demo" | "curriculum_audit";
    helperText: string;
  };
  deliverable: {
    title: string;
    format: string;
    description: string;
    filename: string;
  };
  closingScript: {
    title: string;
    targetRole: string;
    discoveryQuestions: string[];
    pilotMemorandumTerms: string[];
  };
  googleAdHeadlines: string[];
  googleAdDescriptions: string[];
}

export const FUNNEL_MATRIX: Record<string, FunnelVariant> = {
  // ============================================================================
  // MEDICAL / HEALTH SCIENCES FACULTY SOLUTIONS
  // ============================================================================

  accreditation: {
    slug: "accreditation",
    category: "medical",
    badge: "HPCSA Audit Shield & Institutional Governance",
    title: "Accreditation & Institutional Governance Shield",
    targetPersona: "The Deanery, Deputy Deans of Education & Quality Assurance Committees",
    targetRole: "Executive Dean / Faculty Leadership",
    heroHeadline: "Protect Your Medical Faculty in the Next HPCSA Clinical Audit",
    heroSubhead:
      "Paper logbooks and manual registers leave health sciences faculties vulnerable to ghost attendance scandals and unverified hours. Heykudu delivers tamper-proof, geofenced bedside presence and 1-click audit-ready portfolios.",
    proofStats: [
      {
        value: "100%",
        label: "Audit Verification",
        subtext: "Tamper-proof presence logging across teaching hospitals"
      },
      {
        value: "0",
        label: "Ghost Sign-Ins",
        subtext: "Cryptographic GPS geofencing & NFC ward verification"
      },
      {
        value: "1-Click",
        label: "HPCSA Portfolios",
        subtext: "Complete student rotation transcripts generated instantly"
      }
    ],
    painPoints: [
      {
        title: "Ghost Attendance & Institutional Liability",
        description:
          "Manual attendance registers enable proxy sign-ins, exposing the deanery to severe regulatory sanctions and student training hour disputes.",
        icon: "shield-alert"
      },
      {
        title: "Panic Before Accreditation Reviews",
        description:
          "When the HPCSA or internal quality review audits clinical training, assembling physical student logbooks takes weeks of administrative triage.",
        icon: "clock"
      },
      {
        title: "Lost Procedure Cards & Late Disputes",
        description:
          "Final-year medical students losing physical procedure cards right before OSCE exams creates unresolvable accreditation bottlenecks.",
        icon: "file-question"
      }
    ],
    solutionFeatures: [
      {
        title: "Multi-Hospital Geofenced Radar",
        description:
          "Ensures medical students and interns are physically inside ward perimeters (e.g. Chris Hani Baragwanath, Charlotte Maxeke) before sign-in unlocks.",
        icon: "map-pin"
      },
      {
        title: "Immutable Digital Logbook Records",
        description:
          "Every procedure, bedside observation, and consultant signature is timestamped, cryptographically anchored, and protected against backdating.",
        icon: "check-circle"
      },
      {
        title: "Real-Time Faculty Oversight Dashboard",
        description:
          "Deaneries monitor clinical exposure, rotation quotas, and hospital attendance in real time across all academic training platforms.",
        icon: "bar-chart"
      }
    ],
    primaryCta: {
      label: "Schedule a 15-Minute Deanery Executive Briefing",
      actionType: "schedule_briefing",
      helperText: "Confidential institutional consultation • Includes 2026 HPCSA Audit Readiness Checklist"
    },
    deliverable: {
      title: "The 2026 HPCSA Clinical Training Compliance & Audit Kit",
      format: "PDF Checklist + Regulatory Audit Template",
      description:
        "The complete institutional framework for transitioning medical faculties from vulnerable paper registers to legally defensible, tamper-proof clinical training records.",
      filename: "Heykudu_2026_HPCSA_Compliance_Kit.pdf"
    },
    closingScript: {
      title: "Executive Dean Discovery & Briefing Script",
      targetRole: "Executive Dean / Deputy Dean of Education",
      discoveryQuestions: [
        "When the HPCSA conducts its next clinical training review, how long would it take your team to produce verified bedside attendance for your 4th, 5th, and 6th-year cohorts across all teaching hospitals?",
        "How are you currently handling disputes when a student claims they completed their clinical quota but the department has no physical paper record on file?",
        "If we could demonstrate 100% compliance within a single department pilot in 14 days without IT disruption, would that warrant an institutional briefing?"
      ],
      pilotMemorandumTerms: [
        "Zero software license fee during initial 6-week departmental pilot",
        "Includes faculty onboarding and hospital GPS geofencing configuration",
        "Executive compliance readout delivered to the Deanery at pilot conclusion"
      ]
    },
    googleAdHeadlines: [
      "HPCSA Audit Shield",
      "Medical Faculty Compliance",
      "Eliminate Ghost Attendance",
      "Digital Clinical Logbooks",
      "Medical Student Tracking",
      "Protect Faculty Accreditation",
      "Tamper-Proof Bedside Logs",
      "Zero Lost Procedure Cards",
      "South African Health Sciences",
      "Live Deanery Dashboard"
    ],
    googleAdDescriptions: [
      "Protect your health sciences faculty with tamper-proof clinical training records. Meets HPCSA standards.",
      "Replace vulnerable paper registers with geofenced hospital check-in and 1-click audit portfolios.",
      "Eliminate ghost sign-ins and lost cards across Charlotte Maxeke, Bara, and regional hospitals.",
      "Download the 2026 HPCSA Clinical Training Compliance & Audit Kit for medical school leadership."
    ]
  },

  departmental: {
    slug: "departmental",
    category: "medical",
    badge: "Departmental Rescue & Turnkey Lecturer Setup",
    title: "Clinical Departmental Turnkey Pilot (HODs & Course Convenors)",
    targetPersona: "Academic Heads of Department, Clinical Lecturers, Course Convenors, and Rotation Coordinators",
    targetRole: "Head of Department (HOD) / Clinical Lecturer / Course Convenor",
    heroHeadline: "Rescue Your Clinical Rotation from Paperwork Chaos",
    heroSubhead:
      "Tired of chasing 150 lost paper sign-off cards, grading on weekends, and dealing with end-of-block attendance disputes? Launch a zero-friction, 6-week digital rotation pilot with Heykudu.",
    proofStats: [
      {
        value: "14 Days",
        label: "Department Deployment",
        subtext: "Rapid onboarding without complex university IT integration"
      },
      {
        value: "0 Hrs",
        label: "Lost Card Grading",
        subtext: "Automated real-time procedure count and student quota progress"
      },
      {
        value: "100%",
        label: "Bedside Compliance",
        subtext: "Verified in Wits GEMP 2 Paediatrics rotation"
      }
    ],
    painPoints: [
      {
        title: "The End-of-Rotation Grading Stampede",
        description:
          "Lecturers and HODs spend entire weekends manually tallying physical cardboard sign-off sheets, illegible handwriting, and missing consultant signatures.",
        icon: "user-x"
      },
      {
        title: "Lost Cards Stalling Student Exams",
        description:
          "Cardboard cards get soaked in antiseptic, torn in scrub pockets, or lost, creating high-friction disputes right before block exam eligibility cutoff.",
        icon: "file-text"
      },
      {
        title: "Zero Mid-Block Quota Visibility",
        description:
          "Course convenors cannot see which students are falling behind on mandatory clinical conditions or procedures until the rotation is already finished.",
        icon: "alert-triangle"
      }
    ],
    solutionFeatures: [
      {
        title: "Turnkey Departmental Setup (15 Mins)",
        description:
          "Lecturers upload rotation conditions, required procedures, and student rosters in 15 minutes. No complex centralized IT setup required.",
        icon: "zap"
      },
      {
        title: "Mid-Rotation Early Warning Radar",
        description:
          "Convenors see live progress bars and RAG status. If a student is on Week 3 with only 1 neonatal lumbar puncture, you spot the deficit immediately.",
        icon: "activity"
      },
      {
        title: "1-Click Rotation Gradebook Export",
        description:
          "At the end of the 6-week block, click one button to generate a fully verified, sorted spreadsheet of all procedure quotas and bedside ratings.",
        icon: "check-circle"
      }
    ],
    primaryCta: {
      label: "Deploy a 6-Week Turnkey Departmental Pilot",
      actionType: "deploy_pilot",
      helperText: "Zero budget required for approved academic departments • 14-day setup guarantee"
    },
    deliverable: {
      title: "The 6-Week Turnkey Departmental Pilot Blueprint & Setup Guide",
      format: "PDF Step-by-Step Implementation Guide + Departmental Memo Template",
      description:
        "The complete departmental roadmap used by Wits Paediatrics to transition 150 students from paper logbooks to digital bedside cards in 14 days.",
      filename: "Heykudu_Departmental_Pilot_Blueprint.pdf"
    },
    closingScript: {
      title: "Academic HOD & Lecturer Turnkey Pilot Closing Script",
      targetRole: "Academic Head of Department / Clinical Lecturer & Course Convenor",
      discoveryQuestions: [
        "How many hours do your lecturers and tutors spend at the end of each block tallying paper procedure cards and chasing missing signatures?",
        "When students rotate through multiple hospitals or clinics, how quickly can you identify a student who isn't seeing enough required clinical conditions?",
        "If we handle 100% of the digital card configuration for your upcoming rotation block, would you run a 6-week pilot to see if it eliminates your paperwork burden?"
      ],
      pilotMemorandumTerms: [
        "1-Page Departmental Permission Memorandum (HOD authorization)",
        "Rotation conditions and procedure thresholds configured by Heykudu team",
        "Weekly progress digest sent directly to Course Convenor and HOD",
        "Student orientation session conducted in 15 minutes before block start"
      ]
    },
    googleAdHeadlines: [
      "Clinical Rotation Software",
      "Ditch Paper Logbooks",
      "Medical Student Sign-Offs",
      "Turnkey Department Pilot",
      "HOD Medical Education Tool",
      "Lecturer Rotation Setup",
      "Track Bedside Procedures",
      "Zero Lost Clinical Cards",
      "Automatic Rotation Grading",
      "Paediatrics & Surgery Logs"
    ],
    googleAdDescriptions: [
      "End the paper card nightmare in your clinical department. Launch a turnkey digital pilot in 14 days.",
      "Track medical student procedure quotas and clinical attendance with zero IT friction. Used at Wits.",
      "Lecturers and course convenors: set up your rotation in 15 minutes and end weekend grading.",
      "Download the 6-Week Departmental Pilot Blueprint & 1-Page HOD Permission Memo template."
    ]
  },

  "bedside-wba": {
    slug: "bedside-wba",
    category: "medical",
    badge: "Bedside Speed Engine & Mini-CEX Workflows",
    title: "Bedside Workplace-Based Assessments (Mini-CEX, DOPS, CBD)",
    targetPersona: "Clinical Consultants, Ward Supervisors, Registrars & Teaching Hospital Tutors",
    targetRole: "Consultant Physician / Clinical Supervisor",
    heroHeadline: "Complete Bedside Mini-CEX Assessments in Under 45 Seconds",
    heroSubhead:
      "Clinical ward rounds are overburdened with acute patient care. Heykudu empowers consultants to sign off procedure quotas, provide voice feedback, and evaluate entrustability in seconds—without logging into desktop portals.",
    proofStats: [
      {
        value: "45 sec",
        label: "Bedside Sign-Off",
        subtext: "Fast rubric evaluation with one-tap consultant PIN or QR scan"
      },
      {
        value: "100%",
        label: "Offline Operability",
        subtext: "Works in basement wards and Faraday-cage ICUs with zero Wi-Fi"
      },
      {
        value: "3x",
        label: "Feedback Frequency",
        subtext: "More formative workplace-based assessments captured per student"
      }
    ],
    painPoints: [
      {
        title: "Consultants Drowning in Clinical Rounds",
        description:
          "Doctors are managing critically ill patients. They do not have time to sit at a hospital desktop to fill out 20-question web evaluation forms.",
        icon: "user-minus"
      },
      {
        title: "Lost Cards & Illegible Signatures",
        description:
          "Scrawled doctor signatures on physical paper cards are unverified, illegible, and easily forged by desperate students.",
        icon: "edit-3"
      },
      {
        title: "Hospital Dead-Zones & Zero Wi-Fi",
        description:
          "Traditional web portals fail completely in hospital basement wards, radiology suites, and rural clinics without reliable Internet.",
        icon: "wifi-off"
      }
    ],
    solutionFeatures: [
      {
        title: "One-Tap Consultant Sign-Off",
        description:
          "Students present their phone. The consultant enters their 4-digit PIN or scans a QR code to verify the procedure instantly.",
        icon: "check-square"
      },
      {
        title: "Voice-to-Text Clinical Feedback",
        description:
          "Consultants dictate actionable, 10-second formative feedback at the bedside. Heykudu transcribes and formats it automatically.",
        icon: "mic"
      },
      {
        title: "Guaranteed Offline Operation",
        description:
          "Engineered with local-first offline storage. Every assessment is cached securely on the student device and syncs when back online.",
        icon: "smartphone"
      }
    ],
    primaryCta: {
      label: "Experience the 45-Second Bedside WBA Interactive Demo",
      actionType: "interactive_demo",
      helperText: "Test the mobile consultant assessment interface directly in your browser"
    },
    deliverable: {
      title: "The Clinical Educator's Guide to 45-Second Bedside Workplace-Based Assessments",
      format: "PDF Quick-Start Guide + Mini-CEX Rubric Bank",
      description:
        "High-yield rubrics for Mini-CEX, DOPS, and Case-Based Discussions designed for fast-paced public hospital rounds.",
      filename: "Heykudu_Bedside_Assessment_Guide.pdf"
    },
    closingScript: {
      title: "Clinical Consultant & Director of Clinical Training Script",
      targetRole: "Clinical Director / Lead Consultant Tutor",
      discoveryQuestions: [
        "How often do your consultants skip doing formative Mini-CEX assessments simply because the university's web portal is too slow or paper forms get lost?",
        "Do your ward tutors experience poor cellular signal in your hospital wards?",
        "If your doctors could sign off a procedure in 45 seconds using their phone with zero desktop login required, would your department capture more clinical feedback?"
      ],
      pilotMemorandumTerms: [
        "Fast-track ward consultant onboarding (3-minute video guide)",
        "Customizable rubric bank (Mini-CEX, DOPS, Entrustment scales)",
        "Zero desktop logins required for teaching doctors"
      ]
    },
    googleAdHeadlines: [
      "Bedside Mini-CEX App",
      "Fast Clinical Sign-Offs",
      "Doctor Workplace Ratings",
      "Mobile DOPS Assessments",
      "Offline Hospital Logbook",
      "Voice Clinical Feedback",
      "Ward Round Efficiency",
      "Zero Desktop Portal Hassle",
      "45-Second Sign-Off Tool",
      "Medical Tutor App"
    ],
    googleAdDescriptions: [
      "Consultants complete Mini-CEX & DOPS assessments in under 45 seconds right at the bedside.",
      "Works 100% offline in hospital wards and ICUs. No desktop logins or clunky web forms required.",
      "Capture rich voice feedback and verify student clinical procedures instantly with a 4-digit PIN.",
      "Download the Clinical Educator's Guide to Fast Bedside Workplace-Based Assessments."
    ]
  },

  "epa-transition": {
    slug: "epa-transition",
    category: "medical",
    badge: "Next-Gen EPA Transition & Legacy Replacement",
    title: "Entrustable Professional Activities (EPA) Modernization",
    targetPersona: "Curriculum Committee Chairs, Directors of Medical Education & EdTech Innovators",
    targetRole: "Curriculum Committee Chair / Director of Medical Education",
    heroHeadline: "Modernize from Legacy Portals to Real-Time Entrustable Professional Activities",
    heroSubhead:
      "Still running medical rotations on desktop software built in 2008? Upgrade to a native, offline-first mobile platform with embedded Socratic AI mentoring and automated EPA milestone analytics.",
    proofStats: [
      {
        value: "12 EPAs",
        label: "Mapped Out of the Box",
        subtext: "Aligned with international and South African health curriculum frameworks"
      },
      {
        value: "4.9 / 5",
        label: "Student Usability",
        subtext: "Native iOS & Android mobile UX designed for Gen Z medical cohorts"
      },
      {
        value: "90%",
        label: "Cost Savings",
        subtext: "Compared to complex multi-year enterprise legacy portal contracts"
      }
    ],
    painPoints: [
      {
        title: "Antiquated 2000s-Era Portals",
        description:
          "Medical schools pay exorbitant annual fees for legacy web portals that are clunky, require desktop laptops, and lack offline capabilities.",
        icon: "monitor-x"
      },
      {
        title: "Disconnected Competency Curricula",
        description:
          "Faculties write modern EPA learning outcomes on paper, but have no mobile software capable of capturing progressive supervision levels.",
        icon: "book-open"
      },
      {
        title: "Superficial Ticking the Box",
        description:
          "Students rush through paper logs at the end of the year without meaningful pedagogical debriefs or clinical reflection.",
        icon: "trending-down"
      }
    ],
    solutionFeatures: [
      {
        title: "Dynamic EPA Entrustability Scales",
        description:
          "Capture supervisor entrustment levels (from direct observation to independent practice) with visual longitudinal growth curves.",
        icon: "trending-up"
      },
      {
        title: "Embedded Socratic AI Clinical Mentor",
        description:
          "When students log an acute clinical case, Heykudu's embedded clinical AI debriefs them with Socratic reasoning questions.",
        icon: "cpu"
      },
      {
        title: "Seamless SIS & LMS Integration",
        description:
          "Integrates with university student information systems and exports clean, formatted competency transcripts for graduation boards.",
        icon: "layers"
      }
    ],
    primaryCta: {
      label: "Request an Institutional Curriculum Audit",
      actionType: "curriculum_audit",
      helperText: "Comprehensive EPA curriculum alignment review • Includes 2026 Medical Curriculum Blueprint"
    },
    deliverable: {
      title: "The Entrustable Professional Activities (EPA) Transition Roadmap",
      format: "Curriculum Matrix + EPA Implementation Guide",
      description:
        "The definitive practical roadmap for medical school curriculum committees modernizing from paper attendance to competency-based entrustment scales.",
      filename: "Heykudu_EPA_Curriculum_Transition_Roadmap.pdf"
    },
    closingScript: {
      title: "Curriculum Committee Pitch & Demonstration",
      targetRole: "Curriculum Committee Chair / Director of Medical Education",
      discoveryQuestions: [
        "Where is your faculty currently on the roadmap toward Entrustable Professional Activities (EPAs) and competency-based medical education?",
        "How are your supervisors currently recording entrustment decisions at the bedside?",
        "Would your committee benefit from an interactive demonstration showing how EPAs and milestone curves are tracked in real time?"
      ],
      pilotMemorandumTerms: [
        "Custom mapping of your faculty's exact 12 core EPAs",
        "Includes faculty development workshop for clinical educators",
        "Longitudinal cohort progress analytics presented to curriculum board"
      ]
    },
    googleAdHeadlines: [
      "Modern Alternative to One45",
      "Entrustable Activities (EPAs)",
      "Ditch Clunky Legacy Portals",
      "Built for 2026 Medical Schools",
      "Offline-First Mobile Native",
      "Embedded Socratic AI Mentor",
      "From Paper to Next-Gen EPAs",
      "Seamless University Migration",
      "Fast 14-Day Department Setup",
      "Modern Health Sciences SaaS"
    ],
    googleAdDescriptions: [
      "Legacy medical portals are slow, desktop-bound, and hated by students. Switch to native mobile simplicity.",
      "Transition your curriculum smoothly to Entrustable Professional Activities (EPAs) with automated progress bars.",
      "Integrates with your university LMS while providing students an offline-first Socratic AI case debrief.",
      "Designed specifically for African and Commonwealth medical curricula. Explore our interactive sandbox."
    ]
  },

  // ============================================================================
  // UNIVERSITY-WIDE & NON-MEDICAL CAMPUS SOLUTIONS
  // ============================================================================

  "paperless-attendance": {
    slug: "paperless-attendance",
    category: "university_wide",
    badge: "University-Wide Paperless Attendance & Digital Sheets",
    title: "Paperless Student Attendance & Anti-Proxy Digital Sheets",
    targetPersona: "Deans, Department Heads, Course Convenors & Lecturers (All Faculties: Law, Engineering, Commerce, Science, Humanities)",
    targetRole: "University Course Convenor / Lead Lecturer",
    heroHeadline: "Replace Paper Sign-In Sheets with Foolproof Digital Attendance",
    heroSubhead:
      "Stop wasting 15 minutes passing around paper clipboards that students sign for absent friends. Heykudu gives lecturers instant, anti-cheat digital attendance sheets with automated requirement tracking across any class size.",
    proofStats: [
      {
        value: "0 sec",
        label: "Class Time Wasted",
        subtext: "Instant roll call in 400-seat lecture halls or 15-student labs"
      },
      {
        value: "100%",
        label: "Buddy Signing Eliminated",
        subtext: "Cryptographic QR cycling, device fingerprinting & GPS lock"
      },
      {
        value: "15 min",
        label: "Self-Serve Setup",
        subtext: "Lecturers set up courses with custom attendance quotas in minutes"
      }
    ],
    painPoints: [
      {
        title: "The Paper Clipboard Bottleneck",
        description:
          "Passing around paper registers disrupts lectures, takes 20 minutes to circulate 300 seats, and frequently gets lost or coffee-stained.",
        icon: "file-text"
      },
      {
        title: "Rampant Proxy & Buddy Signing",
        description:
          "Students routinely sign the paper sheet for 3 or 4 absent friends sitting in the campus cafeteria or dormitory, corrupting university attendance data.",
        icon: "user-x"
      },
      {
        title: "Manual Excel Grading Weekends",
        description:
          "At the end of semester, lecturers spend whole weekends manually transcribing thousands of paper signatures into Excel to verify exam DP eligibility.",
        icon: "clock"
      }
    ],
    solutionFeatures: [
      {
        title: "Dynamic Anti-Cheat QR & NFC Sheets",
        description:
          "Display a cycling dynamic QR code or tap NFC cards. Codes rotate every 5 seconds to prevent students from texting screenshots to absent friends.",
        icon: "smartphone"
      },
      {
        title: "Automated Course Requirement Quotas",
        description:
          "Define mandatory attendance rules (e.g. 'Must attend 8 of 10 lectures and 4 practicals'). The engine tracks each student's threshold automatically.",
        icon: "check-circle"
      },
      {
        title: "1-Click LMS & Spreadsheet Sync",
        description:
          "Instantly export verified attendance rosters into Moodle, Canvas, Blackboard, or Excel with one click. Zero manual data entry.",
        icon: "layers"
      }
    ],
    primaryCta: {
      label: "Try the Digital Attendance Sheet Sandbox",
      actionType: "interactive_demo",
      helperText: "Instant access • Works for lectures from 10 to 1,000 students • No credit card required"
    },
    deliverable: {
      title: "The Complete Paperless University Attendance Playbook",
      format: "PDF Architecture Guide + Course Attendance Quota Calculator",
      description:
        "The practical blueprint for course convenors to eliminate paper registers, stop proxy sign-ins, and automate semester attendance rules.",
      filename: "Heykudu_Paperless_University_Attendance_Playbook.pdf"
    },
    closingScript: {
      title: "Course Convenor Paperless Attendance Discovery Script",
      targetRole: "Course Convenor / Academic Program Director",
      discoveryQuestions: [
        "How much class time do your lecturers lose passing around paper sign-in clipboards in your large lectures or practical labs?",
        "How big of an issue is buddy signing and proxy attendance in your department's mandatory attendance courses?",
        "If your lecturers could project a dynamic QR code that takes attendance for 300 students in 20 seconds with zero proxy sign-ins, would you test it in one course?"
      ],
      pilotMemorandumTerms: [
        "Instant course setup without university central IT intervention",
        "Supports hybrid: large lecture halls, small tutorials, and remote field sites",
        "Exports directly to Moodle, Canvas, or CSV spreadsheets"
      ]
    },
    googleAdHeadlines: [
      "Paperless Student Attendance",
      "Stop Proxy Attendance Fraud",
      "Digital Attendance Sheets",
      "Instant Lecture Roll Call",
      "No More Paper Sign-In Sheets",
      "Track University Attendance",
      "Large Classroom Attendance",
      "Anti-Cheat QR Check-In",
      "Automated DP Quota Tracker",
      "15-Minute Course Rollout"
    ],
    googleAdDescriptions: [
      "Eliminate clipboard registers and proxy signing. Switch to instant, tamper-proof mobile attendance.",
      "Designed for 500-seat lecture halls and small tutorials alike. Zero wasted class time.",
      "Set mandatory course attendance rules. Real-time RAG progress alerts for at-risk students.",
      "Integrates with Moodle, Canvas, and Blackboard. Try our free 14-day departmental sandbox."
    ]
  },

  "student-rag-analytics": {
    slug: "student-rag-analytics",
    category: "university_wide",
    badge: "Early-Warning RAG Status & Student Progress Engine",
    title: "Student Progress Bars & Early-Warning RAG Analytics",
    targetPersona: "Academic Advisors, Teaching & Learning Deans, Course Convenors & Multi-Lecturer Teams",
    targetRole: "Director of Teaching & Learning / Course Convenor",
    heroHeadline: "Spot At-Risk Students Weeks Before Exam DP Refusal",
    heroSubhead:
      "Empower students with visual live progress bars while giving lecturers an automated Red-Amber-Green (RAG) dashboard to intervene before students fail mandatory course attendance requirements.",
    proofStats: [
      {
        value: "Week 3",
        label: "Earliest Deficit Alert",
        subtext: "Detect attendance drop-offs early enough for meaningful academic intervention"
      },
      {
        value: "40%",
        label: "Fewer DP Appeals",
        subtext: "100% transparent student records eliminate end-of-term attendance disputes"
      },
      {
        value: "Multi-Team",
        label: "Lecturer Coordination",
        subtext: "Unifies attendance across multiple lecturers, guest speakers & lab tutors"
      }
    ],
    painPoints: [
      {
        title: "The End-of-Term DP Ambush",
        description:
          "Students only find out they've failed minimum attendance requirements (DP refusal) right before final exams, triggering anger and endless appeals.",
        icon: "alert-triangle"
      },
      {
        title: "Multi-Lecturer Blind Spots",
        description:
          "When a course is taught by 4 different lecturers and 6 tutors, attendance data sits in separate silos, leaving everyone in the dark on overall student health.",
        icon: "user-minus"
      },
      {
        title: "Zero Student Self-Accountability",
        description:
          "Students have no idea how many classes they've missed because the university's paper records aren't accessible until the term concludes.",
        icon: "file-question"
      }
    ],
    solutionFeatures: [
      {
        title: "Student Mobile Progress Bars",
        description:
          "Students see their exact progress on their phone: '8/10 Lectures Complete • 80% • On Track for Exam Admittance'.",
        icon: "trending-up"
      },
      {
        title: "Automated Faculty RAG Radar",
        description:
          "Lecturers filter cohorts with 1 click: Green (On Track), Amber (Warning Zone), and Red (At Risk of DP Refusal). Intervene proactively.",
        icon: "activity"
      },
      {
        title: "Multi-Lecturer & Multi-Outcome Unification",
        description:
          "Seamlessly combine attendance across main lectures, guest masterclasses, tutorial seminars, and lab practicals in one unified course roster.",
        icon: "layers"
      }
    ],
    primaryCta: {
      label: "Request a Student Retention & RAG Demo",
      actionType: "schedule_briefing",
      helperText: "See how early RAG indicators reduce student drop-out and streamline course management"
    },
    deliverable: {
      title: "The University DP & Student Retention Analytics Framework",
      format: "PDF Whitepaper + RAG Student Intervention SOP",
      description:
        "How top universities use real-time attendance analytics and visual progress indicators to improve student retention and resolve exam appeals.",
      filename: "Heykudu_Student_RAG_Analytics_Framework.pdf"
    },
    closingScript: {
      title: "Academic Retention & Teaching Dean Discovery Script",
      targetRole: "Dean of Teaching & Learning / Academic Advisor",
      discoveryQuestions: [
        "How many administrative hours does your faculty spend every semester adjudicating student attendance appeals and DP refusals?",
        "When 3 or 4 different lecturers teach modules in the same course, how do you currently aggregate attendance into a single student record?",
        "If students could monitor their own live progress bars and your team had an early RAG dashboard, how would that impact your course completion rates?"
      ],
      pilotMemorandumTerms: [
        "Automated RAG thresholds tailored to your university's exact DP rules",
        "Includes multi-lecturer permission roles and guest tutor accounts",
        "Comprehensive student retention report at end of semester"
      ]
    },
    googleAdHeadlines: [
      "Student RAG Progress Bars",
      "Prevent DP Refusal Appeals",
      "Early Warning Student Alerts",
      "Track Course Requirements",
      "Multi-Lecturer Attendance",
      "Spot At-Risk Students Early",
      "Real-Time Attendance Engine",
      "Automated Exam Eligibility",
      "Student Retention Analytics",
      "Transparent Student Quotas"
    ],
    googleAdDescriptions: [
      "Give students visual progress bars and give convenors early RAG alerts before exam time.",
      "Stop end-of-semester attendance disputes. Fully transparent, audit-ready student logs.",
      "Coordinate multi-lecturer courses seamlessly. All lecture, lab, and tutorial data in one place.",
      "Free up 20+ hours of administrative audit work per course. Explore Heykudu's live demo."
    ]
  },

  "distributed-sites": {
    slug: "distributed-sites",
    category: "university_wide",
    badge: "Multi-Campus & Distributed Learning Site Verifier",
    title: "Distributed Learning Sites, Satellite Campuses & Fieldwork",
    targetPersona: "Work-Integrated Learning (WIL) Coordinators, Deans of Engineering, Education, Science, Law & Health",
    targetRole: "Director of Distributed Learning / WIL Coordinator",
    heroHeadline: "Know Exactly Who Shows Up at Distributed Satellite Sites",
    heroSubhead:
      "When students are scattered across 25 remote clinics, rural schools, regional campuses, or industrial engineering sites, paper logs fail completely. Heykudu guarantees verifiable, geofenced proof of presence everywhere.",
    proofStats: [
      {
        value: "25+ Sites",
        label: "Unified in One Console",
        subtext: "Real-time visibility across regional campuses and rural fieldwork"
      },
      {
        value: "Sub-Meter",
        label: "Geofenced Perimeters",
        subtext: "Attendance unlocks only inside approved campus or site GPS bounds"
      },
      {
        value: "100%",
        label: "Offline Syncing",
        subtext: "Logs check-ins in areas with zero cellular signal and syncs when reconnected"
      }
    ],
    painPoints: [
      {
        title: "Ghost Satellite & Field Attendance",
        description:
          "Students placed at satellite sites or rural practicals claim to be on site while remaining at home, creating severe accreditation exposure.",
        icon: "map-pin"
      },
      {
        title: "The Busy Remote Mentor Dilemma",
        description:
          "On-site supervisors and workplace mentors are too busy with daily operations to fill out paper evaluation sheets and attendance slips.",
        icon: "user-minus"
      },
      {
        title: "Zero Central Faculty Visibility",
        description:
          "Main campus coordinators have no way of knowing whether students or tutors are actually attending remote sessions until weeks later.",
        icon: "alert-triangle"
      }
    ],
    solutionFeatures: [
      {
        title: "Multi-Site GPS Geofence Radar",
        description:
          "Establish circular or polygon geofences around satellite campuses, remote clinics, schools, and engineering plants with sub-meter accuracy.",
        icon: "map-pin"
      },
      {
        title: "Resilient Offline Check-In",
        description:
          "Designed for rural practicals with poor connectivity. The application cryptographically signs presence offline and syncs upon reconnection.",
        icon: "wifi-off"
      },
      {
        title: "Remote Mentor 10-Second Validation",
        description:
          "Site supervisors confirm student presence and practical performance in seconds from their own smartphone with no desktop setup required.",
        icon: "check-circle"
      }
    ],
    primaryCta: {
      label: "Map Your Distributed Sites in a Sandbox",
      actionType: "deploy_pilot",
      helperText: "Configure up to 10 satellite sites in 15 minutes • Free trial for university faculties"
    },
    deliverable: {
      title: "Distributed Campus & Remote Site Accountability Blueprint",
      format: "PDF Architecture Guide + Satellite Geofencing Setup Template",
      description:
        "The complete institutional framework for monitoring student attendance and practical hours across multi-campus networks and remote training platforms.",
      filename: "Heykudu_Distributed_Site_Accountability_Blueprint.pdf"
    },
    closingScript: {
      title: "Distributed Learning & WIL Coordinator Script",
      targetRole: "Director of Work-Integrated Learning (WIL) / Satellite Dean",
      discoveryQuestions: [
        "How do you currently verify that students placed at remote satellite facilities or rural sites are physically attending their required hours?",
        "What happens when students in remote areas have no cellular signal or Wi-Fi?",
        "If you could view a live radar map showing verified presence across all your external placement sites simultaneously, would that streamline your compliance?"
      ],
      pilotMemorandumTerms: [
        "Geofencing setup for all external satellite campuses and clinics included",
        "Full offline validation support for remote and rural areas",
        "Executive site compliance dashboard provided to faculty board"
      ]
    },
    googleAdHeadlines: [
      "Distributed Site Attendance",
      "Multi-Campus Student Tracking",
      "Satellite Site Geofencing",
      "Remote Clinic Attendance",
      "Work-Integrated Learning WIL",
      "Verify Student Field Presence",
      "Rural Practical Logbooks",
      "Decentralized Training Sync",
      "Offline Attendance Tracking",
      "Multi-Site Faculty Console"
    ],
    googleAdDescriptions: [
      "Monitor student presence across remote clinics, field sites, and satellite campuses in real time.",
      "Geofenced GPS check-in ensures students are physically on site. Works 100% offline.",
      "Perfect for Work-Integrated Learning (WIL), medical rotations, and engineering fieldwork.",
      "Eliminate phantom attendance across distributed teaching networks. Book a 15-min briefing."
    ]
  },

  "academic-apis": {
    slug: "academic-apis",
    category: "university_wide",
    badge: "Modern Developer APIs & Model Context Protocol (MCP) Interop",
    title: "Programmable University APIs & MCP Agent Integration",
    targetPersona: "University CIOs, Academic IT Directors, EdTech Developers & Tech-Forward Lecturers",
    targetRole: "Head of Academic Technology / Lead Course Developer",
    heroHeadline: "The Programmable University Attendance Engine with Open APIs & MCP",
    heroSubhead:
      "Connect real-time student attendance and progress directly to your LMS, custom department portals, and autonomous AI agents via modern REST APIs, webhooks, and Model Context Protocol (MCP).",
    proofStats: [
      {
        value: "REST + MCP",
        label: "Native Interoperability",
        subtext: "Connect AI agents (Gemini, Claude) and campus LMS systems effortlessly"
      },
      {
        value: "1-Click",
        label: "LMS Webhook Streaming",
        subtext: "Real-time sync to Moodle, Canvas, Blackboard, or custom SIS databases"
      },
      {
        value: "<100ms",
        label: "Real-Time Event Processing",
        subtext: "Instant check-in notifications and live cohort progress webhooks"
      }
    ],
    painPoints: [
      {
        title: "Walled Garden EdTech Lock-In",
        description:
          "Legacy university software traps your attendance and student records in closed proprietary databases with zero API access.",
        icon: "monitor-x"
      },
      {
        title: "Manual Double-Entry Between Systems",
        description:
          "Lecturers and IT admins are forced to manually export CSVs and copy-paste records between attendance tools and the main campus LMS.",
        icon: "edit-3"
      },
      {
        title: "Incompatible with Modern AI Agents",
        description:
          "Legacy platforms cannot interface with modern AI assistants or Model Context Protocol (MCP) servers to deliver intelligent insights.",
        icon: "cpu"
      }
    ],
    solutionFeatures: [
      {
        title: "Open REST API & Webhooks",
        description:
          "Query attendance rosters, stream check-in events, and programmatically configure courses and thresholds with type-safe APIs.",
        icon: "layers"
      },
      {
        title: "Native Model Context Protocol (MCP)",
        description:
          "Equip your faculty's AI agents with tools to query attendance trends, generate RAG reports, and identify at-risk cohorts via MCP.",
        icon: "cpu"
      },
      {
        title: "Plug-and-Play LMS Connectors",
        description:
          "Pre-built webhooks and endpoints for Moodle, Canvas, and Blackboard ensure gradebooks update the second a student checks in.",
        icon: "check-circle"
      }
    ],
    primaryCta: {
      label: "Access Developer API Docs & MCP Server Sandbox",
      actionType: "interactive_demo",
      helperText: "Full API documentation • MCP server configuration guide • Postman collection included"
    },
    deliverable: {
      title: "The University EdTech API & MCP Integration Architecture Guide",
      format: "Technical Whitepaper + OpenAPI Schema + MCP Server Setup Guide",
      description:
        "The developer and architectural specification for integrating Heykudu's attendance engine into campus LMS, SIS, and AI agent ecosystems.",
      filename: "Heykudu_API_and_MCP_Architecture_Guide.pdf"
    },
    closingScript: {
      title: "University CIO & Academic Tech Lead Script",
      targetRole: "University CIO / Director of Academic IT",
      discoveryQuestions: [
        "How difficult is it currently for your team to extract real-time attendance and student progress data out of your legacy campus tools?",
        "Is your institution exploring Model Context Protocol (MCP) or AI agent integration for academic advising and student tracking?",
        "If you could offer your lecturers an open API and MCP-enabled attendance engine that syncs cleanly with your existing LMS, would that save IT resources?"
      ],
      pilotMemorandumTerms: [
        "Dedicated developer sandbox API keys provided instantly",
        "Assistance with Moodle/Canvas webhook configuration",
        "Pre-built MCP server configuration for Antigravity, Claude, and Gemini"
      ]
    },
    googleAdHeadlines: [
      "Attendance APIs for Universities",
      "MCP Server for EdTech",
      "Sync Attendance to Moodle",
      "Programmable Student Tracking",
      "Canvas Attendance Webhooks",
      "Open APIs for Lecturers",
      "AI Agent Ready Attendance",
      "Developer-First EdTech SaaS",
      "Automate Attendance Sheets",
      "Modern Academic APIs"
    ],
    googleAdDescriptions: [
      "Programmable attendance infrastructure for universities. REST APIs, Webhooks, and MCP ready.",
      "Stream live attendance and RAG status directly into Moodle, Canvas, or custom faculty portals.",
      "Empower your faculty and AI agents with real-time academic compliance data. Read the API docs.",
      "Build custom departmental attendance workflows in minutes. Get developer sandbox access."
    ]
  },

  // ============================================================================
  // STUDENT-LED BOTTOM-UP VIRAL & REFERRAL SOLUTIONS
  // ============================================================================

  students: {
    slug: "students",
    category: "student_led",
    badge: "Student-Led Viral Motion & Class Referral",
    title: "Student Attendance & Logbook Protection",
    targetPersona:
      "Medical Students, Clinical Interns, Engineering, Law, Science & Humanities Undergraduates, Class Representatives",
    targetRole: "Student / Class Representative",
    heroHeadline: "Tired of Paper Sign-In Sheets and Lost Clinical Cards?",
    heroSubhead:
      "Track your personal attendance progress bar, safeguard procedure quotas, and invite your lecturer or course convenor to activate a free digital register for your class in 60 seconds.",
    proofStats: [
      {
        value: "100%",
        label: "DP Status Protection",
        subtext: "Never arrive at exams wondering if your register was lost"
      },
      {
        value: "0 Sec",
        label: "Class Time Lost",
        subtext: "Dynamic QR scan takes 2 seconds on your own phone"
      },
      {
        value: "100%",
        label: "Card Loss Immunity",
        subtext: "Encrypted bedside records permanently stored in cloud"
      },
      {
        value: "Free",
        label: "For Students & Classes",
        subtext: "100% free pilot tier for your entire course or rotation"
      }
    ],
    painPoints: [
      {
        title: "Lost Cardboard Cards",
        description:
          "You spend 6 weeks logging ward procedures or attending 40 lectures, only for a supervisor to misplace the register or your cardboard card to get damaged.",
        icon: "file-question"
      },
      {
        title: "Fraud & Group Penalties",
        description:
          "Absent classmates get others to proxy-sign, prompting lecturers to reject entire sign-in sheets or enforce punitive surprise re-tests for everyone.",
        icon: "shield-alert"
      },
      {
        title: "The DP Exam Ambush",
        description:
          "Finding out in Week 14 that an administrative clerk failed to tally your attendance into the system, barring you from writing your final exams.",
        icon: "alert-triangle"
      },
      {
        title: "Awkward Supervisor Chasing",
        description:
          "Standing outside doctors' tea rooms or professors' offices begging for retroactive signatures on crinkled paper sheets before rotation deadlines.",
        icon: "clock"
      }
    ],
    solutionFeatures: [
      {
        title: "Personal RAG Progress Bar",
        description:
          "See your exact attendance percentage and procedure quota progression in real time. Know exactly where you stand for DP at any second.",
        icon: "trending-up"
      },
      {
        title: "Dynamic Anti-Cheat QR Scanning",
        description:
          "Scan your lecturer's screen or tap your tutor's phone in 2 seconds. Completely tamper-proof, verified presence with zero paper hassle.",
        icon: "qr-code"
      },
      {
        title: "1-Click Lecturer Referral",
        description:
          "Send an anonymous or nominated recommendation to your course convenor or lecturer to activate a 100% free digital sheet for your course.",
        icon: "share-2"
      },
      {
        title: "Permanent Digital Archive",
        description:
          "Your verified clinical skills and lecture attendance are backed up forever. Export a certified PDF portfolio whenever requested.",
        icon: "award"
      }
    ],
    primaryCta: {
      label: "Nominate Your Course & Send Free Setup to Lecturer",
      actionType: "deploy_pilot",
      helperText: "Takes 30 seconds • We notify your lecturer with a 1-click free activation link • 100% free for students"
    },
    deliverable: {
      title: "The Student DP Protection & Attendance Survival Kit",
      format: "PDF Checklist + 1-Click WhatsApp & Email Lecturer Petition Template",
      description:
        "The official toolkit for medical and university students: how to protect your clinical hours, calculate minimum exam attendance, and petition your lecturer to switch to digital sheets.",
      filename: "Heykudu_Student_Attendance_Survival_Kit.pdf"
    },
    closingScript: {
      title: "Student-to-Lecturer / Class Rep Referral Script",
      targetRole: "Class Representative / Student Group",
      discoveryQuestions: [
        "How many students in our class have experienced lost attendance sheets or disputed clinical hours this year?",
        "Would our class prefer scanning a dynamic 2-second QR code rather than passing around a paper clipboard during lectures?",
        "If Heykudu offers a completely free digital attendance sheet with zero IT setup for the lecturer, can our class rep share it with our course convenor?"
      ],
      pilotMemorandumTerms: [
        "1-Click WhatsApp text template ready to send to lecturer or class group",
        "Pre-drafted professional email to Course Convenor requesting paperless attendance",
        "Guaranteed 100% free trial for class of any size"
      ]
    },
    googleAdHeadlines: [
      "Lost Medical Logbook Card?",
      "Digital Student Attendance",
      "Track Your Clinical Quotas",
      "Never Lose Your DP Again",
      "Stop Passing Paper Registers",
      "Student Attendance App",
      "Track Attendance for Class",
      "No More Paper Clipboards",
      "1-Tap Attendance Check-In",
      "Free For Your Entire Class"
    ],
    googleAdDescriptions: [
      "Tired of paper registers getting lost? Track attendance & quotas on your phone. 100% free.",
      "Protect your DP exam qualification. Real-time attendance progress bars for students.",
      "No more lost procedure cards. Send a free paperless setup to your lecturer in 60 seconds.",
      "Digital student attendance and clinical logbooks. Free for your class. Get the toolkit."
    ]
  }
};
