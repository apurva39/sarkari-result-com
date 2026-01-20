import PageLayout from "@/components/PageLayout";

export default function About() {
  return (
    <PageLayout title="About Us">
      <div className="prose max-w-none text-gray-700 space-y-6 text-[16px] leading-relaxed">
        <section>
            <p className="text-lg font-medium text-gray-900">
                Welcome to <span className="text-blue-700">SarkariResult.com.im!</span>
            </p>
            <p>We are delighted to have you here.</p>
        </section>

        {/* Disclaimer Box */}
        {/* <div className="bg-gray-100 border-l-4 border-red-200 p-4 my-6"> */}
            <p className="text-sm text-red-500 font-semibold mb-1">Important Disclaimer:</p>
            <p className="text-black text-sm">
                We want to clearly inform our users that <strong>SarkariResult.com.im</strong> is not associated with any government organization, department, or agency. This website is independently operated.
            </p>
        

        <section>
            <p className="font-bold text-gray-900 mb-3">
              At SarkariResult.com.im, we publish updates and information related to:
            </p>
            <ul className="space-y-2 list-none pl-0">
                {[
              "Government Jobs (Sarkari Naukri)",
              "Central Government Schemes",
              "State Government Schemes",
              "Latest News & Updates",
              "Educational Notices",
              "Finance & Technology",
              "Entertainment and General Information",
            ].map((item,index)=>(
                <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">➤</span>
                    <span>{item}</span>
                </li>
            ))}
            </ul>
        </section>
        {/* Mission and Closing */}
        <section className="space-y-4">
          <p>
            We aim to provide reliable, useful, and timely information, updated daily for our visitors. 
            Your support, trust, and love inspire us to keep delivering quality content every day.
          </p>
          <p>
            We hope you enjoy reading our posts as much as we enjoy creating them for you.
          </p>
        </section>

        {/* Footer/Contact Section */}
        <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded-sm">
          <p className="font-bold text-gray-900 mb-2">Queries, Suggestions, or Feedback?</p>
          <p>Feel free to reach us at:</p>
          <a 
            href="mailto:sarkariresult.com.im@gmail.com" 
            className="text-blue-700 font-bold text-lg hover:underline block mt-1"
          >
            📩 sarkariresult.com.im@gmail.com
          </a>
          <p className="mt-4 font-medium italic">
            Thank you for visiting SarkariResult.com.im! Stay connected and keep supporting us. 🙏
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

