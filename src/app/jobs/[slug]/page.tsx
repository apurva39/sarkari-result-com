// src/app/jobs/[slug]/page.tsx
import { jobData } from "@/lib/jobData";
import { notFound } from "next/navigation";

export default async function JobDetailPage({params 
}: { 
  params: Promise<{ slug: string }> // 2. Params is now a Promise
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
      <h1 className="text-2xl font-bold text-blue-900 text-center border-b-2 border-red-600 pb-2 mb-4">
        {job.title}
      </h1>

      <div className="bg-yellow-50 border border-yellow-200 p-4 mb-6">
        <p className="text-sm font-medium">Short Information: {job.shortInfo}</p>
      </div>

      <table className="w-full border-collapse border border-slate-300 text-sm">
        <tbody>
          <tr className="bg-purple-800 text-white font-bold text-center">
            <td className="p-2 border border-slate-300">Important Dates</td>
            <td className="p-2 border border-slate-300">Application Fee</td>
          </tr>
          <tr>
            <td className="p-2 border border-slate-300 align-top">
              {job.importantDates.map((d, i) => (
                <p key={i}>• {d.label}: <strong>{d.value}</strong></p>
              ))}
            </td>
            <td className="p-2 border border-slate-300 align-top">
              {job.applicationFee.map((f, i) => (
                <p key={i}>• {f.label}: <strong>{f.value}</strong></p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>

      {/* More tables for Vacancy and Links... */}
    </div>
  );
}