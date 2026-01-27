// src/lib/jobData.ts

export interface JobDetail {
  slug: string;
  title: string;
  postDate: string;
  shortInfo: string;
  boardName: string;
  importantDates: { label: string; value: string }[];
  applicationFee: { label: string; value: string }[];
  ageLimit: string;
  vacancyDetails: { postName: string; total: string; eligibility: string }[];
  links: { label: string; url: string }[];
}

export const jobData: JobDetail[] = [
  {
    slug: "ssc-cgl-2025-recruitment",
    title: "SSC CGL 2025 Recruitment Online Form",
    postDate: "20th January 2025",
    shortInfo: "Staff Selection Commission (SSC) has released the Combined Graduate Level CGL Exam 2025 notification. Candidates interested in this recruitment can apply online.",
    boardName: "Staff Selection Commission (SSC)",
    importantDates: [
      { label: "Application Start", value: "20/01/2025" },
      { label: "Last Date for Apply", value: "15/02/2025" },
      { label: "Exam Date Tier I", value: "June 2025" }
    ],
    applicationFee: [
      { label: "General / OBC / EWS", value: "₹100/-" },
      { label: "SC / ST / PH", value: "₹0/-" },
      { label: "All Category Female", value: "₹0/-" }
    ],
    ageLimit: "18-30 Years (Post Wise) as on 01/01/2025",
    vacancyDetails: [
      { postName: "CGL 2025 Various Posts", total: "17727", eligibility: "Bachelor Degree in Any Stream" }
    ],
    links: [
      { label: "Apply Online", url: "https://ssc.gov.in" },
      { label: "Download Notification", url: "#" },
      { label: "Official Website", url: "https://ssc.gov.in" }
    ]
  },
  {
    slug: "delhi-police-constable-recruitment",
    title: "Delhi Police Constable (Executive) Recruitment 2025",
    postDate: "22nd January 2025",
    shortInfo: "Delhi Police has announced recruitment for Constable Executive Male/Female. Interested candidates can read the full notification before applying.",
    boardName: "Delhi Police (DP)",
    importantDates: [
      { label: "Application Start", value: "25/01/2025" },
      { label: "Last Date for Apply", value: "05/03/2025" },
      { label: "PE & MT Exam Date", value: "To be notified" }
    ],
    applicationFee: [
      { label: "General / OBC / EWS", value: "₹100/-" },
      { label: "SC / ST", value: "₹0/-" }
    ],
    ageLimit: "18-25 Years as on 01/07/2025",
    vacancyDetails: [
      { postName: "Constable (Executive)", total: "6433", eligibility: "10+2 Intermediate Exam Passed" }
    ],
    links: [
      { label: "Apply Online", url: "#" },
      { label: "Download Notification", url: "#" }
    ]
  }
];