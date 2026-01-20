"use client";

import { FileText, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";

const results = [
  {
    id: 1,
    title: "SSC CHSL 2024 Final Result",
    date: "12 Jan 2025",
    isNew: true,
  },
  {
    id: 2,
    title: "IBPS Clerk XIII Final Result",
    date: "10 Jan 2025",
    isNew: true,
  },
  {
    id: 3,
    title: "RRB Group D CBT Result 2024",
    date: "08 Jan 2025",
    isNew: true,
  },
  {
    id: 4,
    title: "UPSC CSE 2024 Prelims Result",
    date: "05 Jan 2025",
    isNew: false,
  },
  {
    id: 5,
    title: "UP TET 2024 Result Declared",
    date: "03 Jan 2025",
    isNew: false,
  },
  {
    id: 6,
    title: "NTA CUET UG 2024 Result",
    date: "01 Jan 2025",
    isNew: false,
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="scroll-mt-20">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Latest Results</h2>
              <p className="text-sm text-slate-500">रिजल्ट 2025</p>
            </div>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 rounded-lg bg-green-50 px-3 py-1.5 text-sm font-medium text-green-600 transition-colors hover:bg-green-100"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="divide-y divide-slate-100">
          {results.map((result) => (
            <article
              key={result.id}
              className="group flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-slate-50"
            >
              <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium text-slate-900 group-hover:text-green-600 transition-colors truncate">
                    {result.title}
                  </h3>
                  {result.isNew && (
                    <span className="shrink-0 inline-flex items-center rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-green-700">
                      New
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{result.date}</p>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>

        <div className="border-t border-slate-100 px-5 py-3 sm:hidden">
          <a
            href="#"
            className="flex items-center justify-center gap-1 rounded-lg bg-green-50 py-2 text-sm font-medium text-green-600"
          >
            View All Results
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
