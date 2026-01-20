"use client";

import { Briefcase, Calendar, MapPin, Users, ArrowRight, ExternalLink } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "SSC CGL 2025 Recruitment",
    department: "Staff Selection Commission",
    lastDate: "15 Feb 2025",
    vacancies: "17727",
    location: "All India",
    isNew: true,
    isHot: true,
  },
  {
    id: 2,
    title: "IBPS PO 2025 Notification",
    department: "Institute of Banking Personnel Selection",
    lastDate: "20 Feb 2025",
    vacancies: "4455",
    location: "All India",
    isNew: true,
    isHot: false,
  },
  {
    id: 3,
    title: "Railway RRB NTPC Recruitment",
    department: "Railway Recruitment Board",
    lastDate: "28 Feb 2025",
    vacancies: "35281",
    location: "All India",
    isNew: true,
    isHot: true,
  },
  {
    id: 4,
    title: "UPSC Civil Services 2025",
    department: "Union Public Service Commission",
    lastDate: "10 Mar 2025",
    vacancies: "1000+",
    location: "All India",
    isNew: false,
    isHot: true,
  },
  {
    id: 5,
    title: "Delhi Police Constable Recruitment",
    department: "Delhi Police",
    lastDate: "05 Mar 2025",
    vacancies: "6433",
    location: "Delhi NCR",
    isNew: true,
    isHot: false,
  },
  {
    id: 6,
    title: "UP Police SI Bharti 2025",
    department: "Uttar Pradesh Police",
    lastDate: "25 Feb 2025",
    vacancies: "9534",
    location: "Uttar Pradesh",
    isNew: false,
    isHot: false,
  },
];

export function LatestJobs() {
  return (
    <section id="latest-jobs" className="scroll-mt-20">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Latest Government Jobs</h2>
              <p className="text-sm text-slate-500">सरकारी नौकरी 2025</p>
            </div>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="divide-y divide-slate-100">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="group flex items-start gap-4 px-5 py-4 transition-colors hover:bg-slate-50"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  {job.isNew && (
                    <span className="inline-flex items-center rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-green-700">
                      New
                    </span>
                  )}
                  {job.isHot && (
                    <span className="inline-flex items-center rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-red-700">
                      Hot
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs text-slate-500">{job.department}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    Last Date: {job.lastDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {job.vacancies} Posts
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="shrink-0 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Apply Now
              </a>
            </article>
          ))}
        </div>

        <div className="border-t border-slate-100 px-5 py-3 sm:hidden">
          <a
            href="#"
            className="flex items-center justify-center gap-1 rounded-lg bg-blue-50 py-2 text-sm font-medium text-blue-600"
          >
            View All Jobs
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
