// src/lib/jobData.ts

export interface JobLink{
  label:string;
  url:string;
  url2?:string;
  url3?:string;
}

export interface VacancyPost{
  name:string;
  count:string;
}

export interface VacancyGroup{
  posts: VacancyPost[];
  eligibility:string;
}

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
  ageLimitDate:string;
  ageDetails: { label: string; value: string }[];
  ageRelaxationText:string;
  // vacancyDetails: { postName: string[]; total: string; eligibility: string }[];
  vacancyDetails: VacancyGroup[];
  totalPost:number;
  selectionProcess?: string[];
  links: JobLink[];


  
}

export const jobData: JobDetail[] = [
  {
    slug: "ssc-cgl-2025-recruitment",
    title: "SSC CGL 2025 Recruitment Online Form",
    linkName: "ssc.org",
    postDate: "20th January 2025",
    currentYear:"2026",
    totalPost:3000,

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
    ageLimitDate: "01-01-2026",
    ageDetails: [
      {label:"Minimum Age",value:"18 Years"},
      { label: "Maximum Age (UR/EWS-Male)", value: "25 Years" },
    { label: "Maximum Age (UR/EWS-Female)", value: "28 Years" },
    { label: "Maximum Age (OBC/SC/ST-Male)", value: "30 Years" },
    { label: "Maximum Age (OBC/SC/ST-Female)", value: "33 Years" },
    ],
    ageRelaxationText:"Age relaxation is applicable as per government rules. For detailed information, please refer to the official notification.",
    vacancyDetails: [
      {
        // Group 1: These 3 posts share the same eligibility
        posts: [
          { name: "CGL Various Posts", count: "17000" },
          { name: "Master", count: "500" },
          { name: "Assistant", count: "227" }
        ],
        eligibility: "Bachelor Degree in Any Stream from Recognized University."
      },
      {
        // Group 2: This post is separate with different eligibility
        posts: [
          { name: "Statistical Investigator", count: "100" }
        ],
        eligibility: "Bachelor Degree with Mathematics/Statistics as a subject."
      }
    ],
    selectionProcess: [
      "Tier-I: Computer Based Examination",
      "Tier-II: Computer Based Examination",
      "Data Entry Speed Test (DEST)",
      "Document Verification (DV)"
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
    totalPost:34934,
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
    ageLimitDate: "01-01-2026",
    ageDetails: [
      {label:"Minimum Age",value:" 18 Years"},
      { label: "Maximum Age", value: " 25 Years" },

    ],
    ageRelaxationText:"Age relaxation is applicable as per government rules. For detailed information, please refer to the official notification.",
    vacancyDetails: [
      {
        // Group 1: These 3 posts share the same eligibility
        posts: [
          { name: "CGL Various Posts", count: "1798800" },
          { name: "Master", count: "5700" },
          { name: "Assistant", count: "7627" }
        ],
        eligibility: "Bachelor Degree in Any Stream from Recognized University."
      },
      {
        // Group 1: These 3 posts share the same eligibility
        posts: [
          { name: "College Posts", count: "1798800" },

        ],
        eligibility: "Recognized University."
      },
      {
        // Group 2: This post is separate with different eligibility
        posts: [
          { name: "Statistical Investigator", count: "100" }
        ],
        eligibility: "Bachelor Degree with Mathematics/Statistics as a subject."
      }
    ],
    selectionProcess: [
      "Written Exam",
      "Physical Efficiency Test (PET)",
      "Physical Standards Test (PST)",
      "Document Verification",
      "Medical Examination"
    ],
    links: [
      { label: "Apply Online", url: "#" },
      { label: "Download Notification", url: "#" },
      { label: "Download Syllabus", url: "#" },
      { label: "Download Admit Card", url: "#" },
      { label: "Download Result", url: "#" },
      { label: "Download Answer Key", url: "#" },
      { label: "Download Previous Year Papers", url: "#" },
    ],
  },
];
