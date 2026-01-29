// src/lib/jobData.ts

export interface JobDetail {
  slug: string;
  title: string;
  postDate: string;
  shortInfo: string;
  boardName: string;
  linkName: string;
  currentYear:string;
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
    linkName: "ssc.org",
    postDate: "20th January 2025",
    currentYear:"2026",

    shortInfo:
      "Staff Selection Commission (SSC) has released the Combined Graduate Level CGL Exam 2025 notification. Candidates interested in this recruitment can apply online.",
    boardName: "Staff Selection Commission (SSC)",
    importantDates: [
      
      { label: "Notification Date", value: "20/01/2025" },
      { label: "Application Start", value: "20/01/2025" },
      { label: "Last Date for Apply", value: "15/02/2025" },
      { label: "Fee Payment Last Date", value: "June 2025" },
      { label: "Correction Date", value: "15/02/2025" },
      { label: "Admit Card Date", value: "June 2025" },
      { label: "Exam Date", value: "20/01/2025" },
      { label: "Result Date", value: "15/02/2025" },
      
    ],
    applicationFee: [
      { label: "General / OBC / EWS", value: "₹100/-" },
      { label: "SC / ST / PH", value: "₹0/-" },
      { label: "All Category Female", value: "₹0/-" },
    ],
    ageLimit: "18-30 Years (Post Wise) as on 01/01/2025",
    vacancyDetails: [
      {
        postName: "CGL 2025 Various Posts",
        total: "17727",
        eligibility: "Bachelor Degree in Any Stream",
      },
    ],
    links: [
      { label: "Apply Online", url: "https://ssc.gov.in" },
      { label: "Download Notification", url: "#" },
      { label: "Official Website", url: "https://ssc.gov.in" },
    ],
  },


  {
    slug: "delhi-police-constable-recruitment",
    title: "Delhi Police Constable (Executive) Recruitment 2025",
    linkName: "delhi.org",
    postDate: "22nd January 2025",
    currentYear:"2026",

    shortInfo:
      "clri.org Council of Scientific & Industrial Research – Central Leather Research Institute (CSIR-CLRI) CSIR CLRI MTS, JSA & Stenographer Recruitment 2026, Eligibility, Fee, Last Date, Apply Online, Authority has released the New Notification for the recruitment of CSIR CSIO Multi-Tasking Staff, Junior Secretariat Assistant & Stenographer New Vacancy 2026 for 13 Posts, CSIR CLRI MTS, JSA & Stenographer Online Registration Form 2026 has started from 23 January 2026 to 02 March 2026 through the official website of the Authority. The candidates who are interested in CSIR CLRI MTS, JSA & Stenographer Bharti 2026, kindly read the full notification related to CSIR CLRI MTS, JSA & Stenographer Jobs 2026. Check Eligibility, Application Fee, Age Limit, Salary, Selection Process, and all other information. All the details related to the CSIR CLRI MTS, JSA & Stenographer Online Registration Application Form 2026 Link are given below.",
    boardName:"Delhi Police (DP)",
    importantDates: [
      { label: "Notification Date", value: "20 June 2025" },
      { label: "Application Start", value: "20 June 2025" },
      { label: "Last Date for Apply", value: "20 June 2025" },
      { label: "Fee Payment Last Date", value: "20 June 2025" },
      { label: "Correction Date", value: "20 June 2025" },
      { label: "Admit Card Date", value: "June 2025" },
      { label: "Exam Date", value: "20 June 2025" },
      { label: "Result Date", value: "20 June 2025" },
    ],
    applicationFee: [
      { label: "General / OBC / EWS", value: "₹100/-" },
      { label: "SC / ST", value: "₹0/-" },
    ],
    ageLimit: "18-25 Years as on 01/07/2025",
    vacancyDetails: [
      {
        postName: "Constable (Executive)",
        total: "6433",
        eligibility: "10+2 Intermediate Exam Passed",
      },
    ],
    links: [
      { label: "Apply Online", url: "#" },
      { label: "Download Notification", url: "#" },
    ],
  },
];
