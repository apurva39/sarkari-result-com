// import { Header } from "../components/Header";
// import { HeroSection } from "../components/HeroSection";
import { LatestJobs } from "../components/LatestJobs";
import { ResultsSection } from "../components/ResultsSection";
import { AdmitCardSection } from "../components/AdmitCardSection";
import { AnswerKeySection } from "../components/AnswerKeySection";
import { SyllabusSection } from "../components/SyllabusSection";
// import { Footer } from "../components/Footer";
import { SarkariTicker } from "../components/SarkariTicker";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* <Header /> */}
      <SarkariTicker/>
      <main>
        {/* <HeroSection /> */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">

              {/* added for test*/}           


              <LatestJobs />
              <ResultsSection />
            </div>
            <aside className="space-y-6">
              <AdmitCardSection />
              <AnswerKeySection />
              <SyllabusSection />

            </aside>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
