// src/app/jobs/[slug]/page.tsx
import { jobData } from "@/lib/jobData";
import { PackagePlus } from "lucide-react";
import { notFound } from "next/navigation";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>; // 2. Params is now a Promise
}) {
  // 3. We must 'await' the params before using them
  const { slug } = await params;

  // 4. Now we search using the unwrapped slug
  const job = jobData.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto p-4 border bg-white mt-8 shadow-lg">
      <h1 className="items-center justify-center text-left">
        <span className="text-xl font-bold text-blue-800 uppercase">
          {job.title}
        </span>
        &nbsp;
        <span className="text-xl md:text-2xl font-bold text-blue-800 whitespace-nowrap">
          [{job.vacancyDetails[0]?.total} Post]
        </span>
        &nbsp;
        <span className="text-xl md:text-2xl font-bold text-blue-800 whitespace-nowrap uppercase">
          Apply Online
        </span>
      </h1>
      <div className=" text-[16px] font-semibold text-red-700 mt-2 pb-10">
        Published on: {job.postDate}
      </div>

      <div className="text-left mb-4 leading-relaxed">
        <p className="text-[#333] text-[15px] font-normal font-sans">
          <a
            href={
              job.links.find((l) => l.label.includes("Official"))?.url || "#"
            }
            className="text-blue-600 font-bold hover:text-red-600 no-underline hover:underline transition-all"
          >
            {job.linkName}
          </a>
          <span className="font-bold">{job.boardName}</span>has released the New
          Notification for the recruitment of
        </p>
      </div>

      <p className="leading-relaxed job-desc-normal mb-4">
        <a
          href={job.linkName}
          className="font-semibold text-blue-600 hover:underline"
          target="_blank"
        >
          {job.boardName}
        </a>{" "}
        {job.boardName} has released the notification for{" "}
        <span className="job-desc-highlight">{job.title}</span> Recruitment{" "}
        {job.currentYear} for{" "}
        <span className="job-desc-highlight">
          {job.vacancyDetails[0]?.total} Posts
        </span>
        . Online Registration has started from{" "}
        <span className=" job-desc-highlight">
          {job.importantDates[0]?.value} to {job.importantDates[1]?.value}
        </span>{" "}
        through the official website. Check Eligibility, Application Fee, Age
        Limit, Salary, Selection Process, and all other information. All the
        details related to the CSIR CLRI MTS, JSA & Stenographer Online
        Registration Application Form 2026 Link are given below.
      </p>

      <table className="w-full border-collapse border border-slate-300">
        <tbody>
          <tr className="text-green-600 font-bold text-center">
            <td className="p-2 border border-slate-300">Important Dates</td>
            <td className="p-2 border border-slate-300">Application Fee</td>
          </tr>
          <tr>
            <td className="pl-8 pr-4 py-2 border border-slate-300 align-top text-left">
              {job.importantDates.map((d, i) => (
                <p key={i}>
                  <span className="text-xl">•</span>{" "}
                  <span className="job-desc-normal">{d.label}:</span>{" "}
                  {/* <span className="job-desc-highlight">{d.value}</span> */}
                  <span
                    className={`
        ${d.label.includes("Last Date for Apply") ? "text-red-600 font-bold" : "job-desc-highlight"}
      `}
                  >
                    {d.value}
                  </span>
                </p>
              ))}
              <p>
                <span className="text-xl">•</span>{" "}
                <span className="job-desc-normal">
                  Candidates are advised to verify the details on the Official
                  Website of the &nbsp;
                  <span className="job-desc-highlight">{job.boardName}.</span>
                </span>
              </p>
            </td>
            <td className="pl-8 pr-4 py-2 border border-slate-300 align-top">
              {job.applicationFee.map((f, i) => (
                <p key={i}>
                  <span className="text-xl">•</span>{" "}
                  <span className="job-desc-normal">{f.label}:</span>{" "}
                  <span className="job-desc-highlight">{f.value}</span>
                </p>
              ))}

              <p>
                <span className="text-xl">•</span> Payment Mode:{" "}
                <span className="job-desc-normal">
                  Pay the Examination Fee Through Credit Card, Debit Card, Net
                  Banking/ Pay Offline Through E-Challan.
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* More tables for Vacancy and Links... */}
    </div>
  );
}
