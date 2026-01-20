"use client";

import { BookOpen, ArrowRight, FileText } from "lucide-react";

const syllabusItems = [
  {
    id: 1,
    title: "SSC CGL 2025 Syllabus",
    type: "PDF Available",
  },
  {
    id: 2,
    title: "IBPS PO 2025 Exam Pattern",
    type: "Updated",
  },
  {
    id: 3,
    title: "UPSC CSE 2025 Syllabus",
    type: "PDF Available",
  },
  {
    id: 4,
    title: "Railway NTPC Syllabus",
    type: "PDF Available",
  },
];

export function SyllabusSection() {
  return (
    <section id="syllabus" className="scroll-mt-20">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 shadow-lg shadow-cyan-500/30">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Syllabus</h2>
              <p className="text-xs text-slate-500">सिलेबस</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {syllabusItems.map((item) => (
            <article
              key={item.id}
              className="group flex items-start gap-2.5 px-4 py-3 transition-colors hover:bg-slate-50"
            >
              <FileText className="h-4 w-4 shrink-0 text-cyan-500 mt-0.5" />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-slate-900 group-hover:text-cyan-600 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{item.type}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="border-t border-slate-100 px-4 py-2.5">
          <a
            href="#"
            className="flex items-center justify-center gap-1 rounded-lg bg-cyan-50 py-2 text-sm font-medium text-cyan-600 hover:bg-cyan-100 transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
