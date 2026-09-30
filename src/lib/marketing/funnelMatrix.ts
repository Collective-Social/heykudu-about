/**
 * Heykudu University B2B Funnel Matrix (50-4-4-4-4 Testing Engine)
 * Defines the 4 Landing Pages, 4 CTAs, 4 Deliverables, 4 Scripts,
 * and 50 Google Responsive Search Ad variations across target roles.
 */

export interface FunnelVariant {
  slug: string;
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
  accreditation: {
    slug: "accreditation",
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
          "High-precision geofencing across regional teaching hospital complexes ensures physical presence before any shift is clocked.",
        icon: "map-pin"
      },
      {
        title: "Tamper-Proof Audit Trail",
        description:
          "Every bedside procedure, delivery, and clinical debrief is cryptographically signed and stored with timestamped supervisor verification.",
        icon: "check-circle"
      },
      {
        title: "Deanery Executive Dashboard",
        description:
          "Real-time faculty-wide visibility over clinical exposure quotas, absent students, and departmental accreditation readiness.",
        icon: "bar-chart"
      }
    ],
    primaryCta: {
      label: "Schedule a 15-Minute Deanery Briefing",
      actionType: "schedule_briefing",
      helperText: "Confidential institutional briefing with Duncan Luke • Includes HPCSA Compliance Checklist"
    },
    deliverable: {
      title: "The 2026 HPCSA Clinical Training Compliance & Audit Kit",
      format: "PDF Checklist + Regulatory Audit Template",
      description:
        "The complete institutional framework for transitioning medical faculties from vulnerable paper registers to legally defensible, tamper-proof clinical training records.",
      filename: "Heykudu_2026_HPCSA_Compliance_Kit.pdf"
    },
    closingScript: {
      title: "Executive Dean Discovery Briefing",
      targetRole: "Executive Dean / Deputy Dean of Education",
      discoveryQuestions: [
        "When the HPCSA or your internal quality review audits clinical training hours, how many days does it take to pull verified ward hours across your teaching hospital complex?",
        "What is the protocol when a senior student loses their physical sign-off card two weeks before final clinical OSCEs?",
        "If we can prove 100% verified bedside presence and zero lost logbooks in a single 6-week rotation block at no institutional risk, would you sponsor a pilot with your Paediatrics or Surgery department?"
      ],
      pilotMemorandumTerms: [
        "Zero institutional budget commitment for initial 6-week evaluation",
        "POPIA compliant, encrypted South African cloud data residency",
        "Full faculty board report and exportable CSV/PDF audit package provided upon completion"
      ]
    },
    googleAdHeadlines: [
      "HPCSA Clinical Audit Coming?",
      "Stop Losing Student Logbooks",
      "100% Verified Clinical Hours",
      "Paper Logbooks Fail Audits",
      "Cryptographic Ward Presence",
      "Wits GEMP 2 Case Study",
      "Audit-Ready Portfolios",
      "Eliminate Ghost Attendance",
      "Real-Time Clinical Governance",
      "Medical School Compliance App"
    ],
    googleAdDescriptions: [
      "Replace lost paper cards with tamper-proof geofenced bedside verification. Trusted by top SA universities.",
      "Eliminate ghost sign-ins and prepare for HPCSA reviews with 1-click verified accreditation portfolios.",
      "Discover how Wits University achieved 100% procedure quota compliance in clinical rotations.",
      "Geofenced NFC check-ins and offline-first mobile logging for medical faculties. Book a deanery briefing."
    ]
  },

  departmental: {
    slug: "departmental",
    badge: "Departmental & Course Convenor Rotation Rescue",
    title: "Paperless Clinical Rotations in 14 Days",
    targetPersona: "Academic HODs, Course Convenors, Clinical Lecturers & Block Coordinators",
    targetRole: "Head of Department / Clinical Lecturer / Course Convenor",
    heroHeadline: "Eliminate Paper Logbooks Across Your Clinical Rotations in 14 Days",
    heroSubhead:
      "For HODs, Course Convenors, and Clinical Lecturers drowning in lost cardboard cards and weekend grading marathons. Heykudu digitizes your exact rotation curriculum checklist into a real-time mobile app in 15 minutes.",
    proofStats: [
      {
        value: "0",
        label: "Lost Logbooks",
        subtext: "100% procedure retention across 6-week rotation blocks"
      },
      {
        value: "Week 2",
        label: "Deficiency Radar",
        subtext: "Identify students falling behind on quotas 4 weeks before exams"
      },
      {
        value: "80%",
        label: "Grading Time Saved",
        subtext: "Reclaim tutor weekends from manual paper card tallying"
      }
    ],
    painPoints: [
      {
        title: "The Weekend Grading Backlog",
        description:
          "Lecturers and consultants spending their Sundays deciphering illegible signatures and manually tallying procedure numbers in Excel.",
        icon: "file-text"
      },
      {
        title: "Late Quota Surprises at Exam Boards",
        description:
          "Only discovering a student missed 10 mandatory paediatric or surgical procedures when they submit their battered paper card the night before finals.",
        icon: "alert-triangle"
      },
      {
        title: "Frustrated Hospital Consultants",
        description:
          "Ward doctors hate stopping clinical rounds to fill out multi-page paper booklets, leading to retrospective and rubber-stamped sign-offs.",
        icon: "user-x"
      }
    ],
    solutionFeatures: [
      {
        title: "15-Minute Self-Serve Curriculum Setup",
        description:
          "Upload your existing rotation conditions and procedure checklist directly. Zero waiting for central university IT tickets.",
        icon: "zap"
      },
      {
        title: "Live Procedure Quota Dashboard",
        description:
          "Real-time heatmaps show exactly how many lumbar punctures, normal deliveries, or IV cannulations each student has logged.",
        icon: "activity"
      },
      {
        title: "1-Tap NFC Supervisor Verification",
        description:
          "Supervisors simply tap their phone to the student's badge to approve procedures in 20 seconds at the bedside.",
        icon: "smartphone"
      }
    ],
    primaryCta: {
      label: "Deploy a 6-Week Departmental Pilot",
      actionType: "deploy_pilot",
      helperText: "Setup takes 15 minutes • Includes Turnkey HOD Permission Memo & Free Student Sandbox"
    },
    deliverable: {
      title: "The Wits GEMP 2 Paediatrics Field Study & Convenor Setup Blueprint",
      format: "Field Study Case Retrospective + 14-Day Departmental Launch Guide",
      description:
        "The empirical field study of how Wits GEMP 2 eliminated paper logbooks across Charlotte Maxeke and Chris Hani Baragwanath, with a step-by-step setup guide for lecturers.",
      filename: "Heykudu_Wits_Paediatrics_Field_Study_Blueprint.pdf"
    },
    closingScript: {
      title: "Lecturer & HOD Departmental Pilot Agreement",
      targetRole: "Clinical Lecturer / Course Convenor / Academic HOD",
      discoveryQuestions: [
        "How many hours do you and your registrars spend at the end of each rotation block manually deciphering and grading paper cards?",
        "How early in the block can you spot a student who isn't getting enough clinical exposure on the wards?",
        "If we upload your exact rotation curriculum checklist into Heykudu today so you can test it on your phone, would you run this with your upcoming student cohort?"
      ],
      pilotMemorandumTerms: [
        "Turnkey 1-page HOD permission memo ready for immediate signature",
        "Zero disruption to existing hospital shifts or hospital IT systems",
        "Includes NFC badges and onboarding for 40 students and departmental tutors"
      ]
    },
    googleAdHeadlines: [
      "Paperless Clinical Rotations",
      "Zero Lost Cards in 6 Weeks",
      "For Course Convenors & HODs",
      "Digitize Rotation Logbooks",
      "Reclaim Your Weekends",
      "Real-Time Procedure Quotas",
      "Alert Deficient Students Early",
      "Cut Grading Time by 80%",
      "15-Min Rotation Setup",
      "Built for Clinical Lecturers"
    ],
    googleAdDescriptions: [
      "Give clinical lecturers and tutors their weekends back. 30-second digital bedside sign-offs on student mobile phones.",
      "Self-serve 15-minute curriculum setup. Turn your rotation paper checklist into a real-time mobile tracking app.",
      "Identify procedure deficiencies in Week 2 rather than failing students at final OSCE exams.",
      "Deploy a 6-week paperless rotation pilot in your clinical department with zero university IT delays."
    ]
  },

  "bedside-wba": {
    slug: "bedside-wba",
    badge: "Bedside Speed & Workplace-Based Assessments",
    title: "Bedside Mini-CEX & DOPS in Under 60 Seconds",
    targetPersona: "Clinical Consultants, Registrars, Tutors & Teaching Hospital Supervisors",
    targetRole: "Clinical Consultant / Senior Registrar / Ward Supervisor",
    heroHeadline: "Conduct Bedside Mini-CEX & DOPS in Under 60 Seconds Without Paperwork",
    heroSubhead:
      "Hospital consultants don't have time to fill out multi-page paper evaluation forms during ward rounds. Heykudu puts standardized Mini-CEX, DOPS, and Case-Based Discussions on mobile with 1-tap supervisor verification.",
    proofStats: [
      {
        value: "30s",
        label: "Bedside Sign-Off",
        subtext: "1-tap phone-to-phone or NFC badge verification"
      },
      {
        value: "0",
        label: "Login Headaches",
        subtext: "Supervisors verify with zero account friction"
      },
      {
        value: "100%",
        label: "Rubric Standardization",
        subtext: "Objective clinical scoring aligned with faculty guidelines"
      }
    ],
    painPoints: [
      {
        title: "Clinician Administrative Burnout",
        description:
          "Doctors on busy hospital wards want to teach clinical decision-making, not spend 15 minutes filling out paper assessment rubrics.",
        icon: "user-minus"
      },
      {
        title: "Retrospective Rubber-Stamping",
        description:
          "Paper logbooks get signed in bulk weeks after the patient encounter took place, destroying meaningful formative clinical feedback.",
        icon: "edit-3"
      },
      {
        title: "Subjective, Inconsistent Grading",
        description:
          "Different tutors grade with varying stringency when using paper forms, leading to student friction and disputed assessment marks.",
        icon: "sliders"
      }
    ],
    solutionFeatures: [
      {
        title: "1-Tap Mobile Mini-CEX & DOPS",
        description:
          "Pre-populated clinical rubrics allow consultants to evaluate history-taking, physical examination, and procedural skills in under a minute.",
        icon: "check-square"
      },
      {
        title: "Instant Formative Voice Feedback",
        description:
          "Consultants can dictate quick 15-second audio pearls at the bedside that are automatically transcribed into the student's clinical portfolio.",
        icon: "mic"
      },
      {
        title: "Offline-First Ward Sync",
        description:
          "Works perfectly in thick hospital basements, ICUs, and wards with zero cellular reception. Syncs automatically when connected.",
        icon: "wifi-off"
      }
    ],
    primaryCta: {
      label: "Test the 60-Second Bedside Demo",
      actionType: "interactive_demo",
      helperText: "Interactive mobile walkthrough • See 1-tap supervisor verification on your phone"
    },
    deliverable: {
      title: "The Clinician Time-Savings Whitepaper & Bedside WBA Protocol",
      format: "Whitepaper + Standardized Mini-CEX/DOPS Protocol",
      description:
        "How teaching hospital departments cut consultant administrative burden by 80% while dramatically improving bedside clinical teaching quality.",
      filename: "Heykudu_Clinician_WBA_Protocol_Whitepaper.pdf"
    },
    closingScript: {
      title: "Clinical Director Bedside Protocol Walkthrough",
      targetRole: "Clinical Director / Academic Consultant",
      discoveryQuestions: [
        "When your registrars and consultants supervise students at the bedside, how much time is spent filling out paper evaluation rubrics?",
        "How often are clinical cards signed weeks after the patient encounter because there was no time during ward rounds?",
        "Would your consultants prefer a 30-second mobile tap on the student's phone with standardized scoring rubrics?"
      ],
      pilotMemorandumTerms: [
        "Tested in real teaching hospital conditions (no WiFi required)",
        "Zero IT overhead for busy consultants",
        "Instant automated aggregation into faculty grading books"
      ]
    },
    googleAdHeadlines: [
      "30-Second Bedside Mini-CEX",
      "Mobile WBA Assessments",
      "DOPS & CBD on Mobile",
      "Stop Paperwork at Bedside",
      "1-Tap Supervisor Sign-Off",
      "No More Grading Backlogs",
      "Instant Clinical Debriefs",
      "Standardize Assessment Rubrics",
      "Clinician-First Mobile WBA",
      "Protect Clinical Teaching Time"
    ],
    googleAdDescriptions: [
      "Conduct Mini-CEX and DOPS in under 60 seconds directly at the bedside with standardized digital rubrics.",
      "Clinicians tap their phone to the student's badge to approve procedures. No usernames, no passwords.",
      "Streamline clinical assessments across teaching hospitals with zero consultant administrative drag.",
      "Real-time feedback loops between registrars, consultants, and undergraduate medical students."
    ]
  },

  "epa-transition": {
    slug: "epa-transition",
    badge: "Curriculum Modernization & EPAs",
    title: "Operationalizing Entrustable Professional Activities",
    targetPersona: "Curriculum Committee Chairs, Directors of Medical Education & Innovation",
    targetRole: "Director of Medical Education / Curriculum Committee Chair",
    heroHeadline: "Operationalize Entrustable Professional Activities (EPAs) Without Administrative Chaos",
    heroSubhead:
      "Modern medical curricula require transitioning from hours-based seat time to competency-based Entrustable Professional Activities. Heykudu tracks entrustment levels and provides curriculum-grounded Socratic reflection.",
    proofStats: [
      {
        value: "Level 1–5",
        label: "Entrustment Tracking",
        subtext: "Automated progression tracking from observation to indirect supervision"
      },
      {
        value: "Offline AI",
        label: "Socratic Mentor",
        subtext: "Curriculum-grounded clinical case debriefs without patient data exposure"
      },
      {
        value: "14 Days",
        label: "Curriculum Mapping",
        subtext: "Map your faculty's EPAs and milestone rubrics with zero coding"
      }
    ],
    painPoints: [
      {
        title: "EPA Implementation Friction",
        description:
          "Defining EPAs on paper is easy, but tracking whether 300 medical students reach Level 3 entrustment in clinical practice is a logistical nightmare.",
        icon: "trending-down"
      },
      {
        title: "Clunky Legacy LMS Portals",
        description:
          "Traditional university LMS systems like Moodle or Blackboard are desktop-bound and fail completely inside busy teaching hospitals.",
        icon: "monitor-x"
      },
      {
        title: "Superficial Case Reflection",
        description:
          "Students copy-paste generic text into reflection logs rather than engaging in critical clinical reasoning and diagnostic reflection.",
        icon: "book-open"
      }
    ],
    solutionFeatures: [
      {
        title: "Automated Entrustment Progression Curves",
        description:
          "Real-time analytics chart each student's journey from direct supervision to unsupervised practice across core clinical domains.",
        icon: "trending-up"
      },
      {
        title: "Embedded Socratic Clinical Mentor",
        description:
          "Interactive case debrief engine asks probing questions on patient management, differential diagnosis, and evidence-based medicine.",
        icon: "cpu"
      },
      {
        title: "Seamless Institutional Integration",
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
  }
};
