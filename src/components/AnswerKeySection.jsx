"use client";

import { FileCheck, ArrowRight, ExternalLink } from "lucide-react";

const answerKeys = [
  {
    id: 1,
    title: "SSC MTS 2024 Answer Key",
    status: "Released",
    isNew: true,
  },
  {
    id: 2,
    title: "UPSC EPFO Answer Key 2024",
    status: "Released",
    isNew: true,
  },
  {
    id: 3,
    title: "RRB Group D Answer Key",
    status: "Released",
    isNew: false,
  },
  {
    id: 4,
    title: "CTET December 2024 Answer Key",
    status: "Released",
    isNew: false,
  },
];

export function AnswerKeySection() {
  return (
    <section id="answer-key" className="scroll-mt-20">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/30">
              <FileCheck className="h-4 w-4 text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Answer Key</h2>
              <p className="text-xs text-slate-500">आंसर की</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {answerKeys.map((key) => (
            <article
              key={key.id}
              className="group flex items-start gap-2.5 px-4 py-3 transition-colors hover:bg-slate-50"
            >
              <ExternalLink className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-1.5">
                  <h3 className="text-sm font-medium text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">
                    {key.title}
                  </h3>
                  {key.isNew && (
                    <span className="shrink-0 inline-flex items-center rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-amber-700">
                      New
                    </span>
                  )}
                </div>
                <p className="text-xs text-green-600 font-medium mt-0.5">{key.status}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="border-t border-slate-100 px-4 py-2.5">
          <a
            href="#"
            className="flex items-center justify-center gap-1 rounded-lg bg-amber-50 py-2 text-sm font-medium text-amber-600 hover:bg-amber-100 transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
