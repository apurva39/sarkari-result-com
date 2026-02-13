import React from "react";
import { JobLink } from "@/lib/jobData";

export default function ImportantLinks({ links }: { links: JobLink[] }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="mt-8 border border-slate-300 overflow-hidden">
      <div className="bg-white border-b border-slate-300 py-2 text-center font-bold text-red-600 uppercase tracking-tighter">
        SOME USEFUL IMPORTANT LINKS
      </div>
      <table className="w-full border-collapse">
        <tbody>
          {links.map((link, index) => (
            <tr
              key={index}
              className="bg-[#FFF9C4] hover:bg-yellow-100 border-b border-slate-300 last:border-0"
            >
              {/* Left Side: The Title of the link */}
              <td className="w-1/2 p-3 text-center font-bold text-slate-800 border-r border-slate-300">
                {link.label}
              </td>
              {/* Right Side: The Dynamic Action Button */}
              <td className="w-1/2 p-3 text-center font-bold text-blue-700">
                {link.url2 ? (
                  <div className="flex justify-center gap-2">
                    <a href={link.url} target="_blank" className="hover:underline">Link-I</a>
                    <span>|</span>
                    <a href={link.url2} target="_blank" className="hover:underline">Link-II</a>
                  </div>
                ) : (
                  <a href={link.url} target="_blank" className="hover:underline">
                    Click Here
                  </a>
                )}
              </td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
