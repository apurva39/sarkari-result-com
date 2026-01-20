"use client";

import { Award, ArrowRight, Download, ExternalLink } from "lucide-react";

const admitCards = [
  {
    id: 1,
    title: "SSC CGL Tier 2 Admit Card 2025",
    examDate: "20-22 Jan 2025",
    isNew: true,
  },
  {
    id: 2,
    title: "IBPS SO Mains Admit Card",
    examDate: "25 Jan 2025",
    isNew: true,
  },
  {
    id: 3,
    title: "RRB NTPC CBT 2 Admit Card",
    examDate: "28 Jan 2025",
    isNew: true,
  },
  {
    id: 4,
    title: "NTA UGC NET Admit Card 2025",
    examDate: "01 Feb 2025",
    isNew: false,
  },
  {
    id: 5,
    title: "UP Police Constable Admit Card",
    examDate: "05 Feb 2025",
    isNew: false,
  },
];

export function AdmitCardSection() {
  return (
    <section id="admit-card" className="scroll-mt-20">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-500/30">
              <Award className="h-4 w-4 text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Admit Card</h2>
              <p className="text-xs text-slate-500">एडमिट कार्ड</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {admitCards.map((card) => (
            <article
              key={card.id}
              className="group flex items-start gap-2.5 px-4 py-3 transition-colors hover:bg-slate-50"
            >
              <Download className="h-4 w-4 shrink-0 text-purple-500 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-1.5">
                  <h3 className="text-sm font-medium text-slate-900 group-hover:text-purple-600 transition-colors leading-tight">
                    {card.title}
                  </h3>
                  {card.isNew && (
                    <span className="shrink-0 inline-flex items-center rounded bg-purple-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-purple-700">
                      New
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Exam: {card.examDate}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="border-t border-slate-100 px-4 py-2.5">
          <a
            href="#"
            className="flex items-center justify-center gap-1 rounded-lg bg-purple-50 py-2 text-sm font-medium text-purple-600 hover:bg-purple-100 transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
