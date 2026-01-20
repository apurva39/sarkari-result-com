import { div } from "framer-motion/client"

export function SarkariTicker() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="text-black text-sm md:text-base font-semibold space-y-2 py-2 rounded-sm shadow-sm border border-amber-300 overflow-hidden">
        <div className="ticker-container h-6 bg-transparent border-none">
          <div className="ticker">
            Delhi DDA Admit Card 2025 || Bihar BTSC JE Recruitment 2026 (2809 Post) || HPCRA Patwari Recruitment 2026 (530 Post)
          </div>
        </div>

        <div className="ticker-container h-6 bg-transparent border-none">
          <div className="ticker ticker-medium">
            UPPSC LT Grade Teacher Admit Card 2025 || DRDO CEPTAM 11 Recruitment 2025 (764 Post) || UPSC CDS 1 Online Form 2026 (451 Post)
          </div>
        </div>

        <div className="ticker-container h-6 bg-transparent border-none">
          <div className="ticker ticker-slow">
            UPPSC LT Grade Teacher Admit Card 2025 || DRDO CEPTAM 11 Recruitment 2025 (764 Post) || UPSC CDS 1 Online Form 2026 (451 Post)
          </div>
        </div>
      </div>
    </div>
  );
}