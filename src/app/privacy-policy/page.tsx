import PageLayout from "@/components/PageLayout";

export default function PrivacyPolicy() {
  return (
    <PageLayout title="Privacy Policy">
      <div className="prose max-w-none text-gray-700 space-y-6 text-[16px] leading-relaxed">
        
        <section>
          <p>
            At <strong>Sarkari Result.com.im</strong>, accessible from{" "}
            <span className="text-blue-600">https://sarkariresult.com.im/</span>, protecting the privacy of our visitors is one of our highest priorities. This Privacy Policy explains what information we collect and how it is used.
          </p>
        </section>

        {/* Who We Are */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2 border-b pb-1">Who We Are</h2>
          <p>Sarkari Result.com.im is a private information platform covering updates related to:</p>
          <ul className="list-none space-y-2 pl-0">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">➤</span> Government recruitments
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">➤</span> Exams and admit cards
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">➤</span> Results and education information
            </li>
          </ul>
          <p className="mt-4">
            If you have questions or concerns, kindly email us at:{" "}
            <a href="mailto:sarkariresultim@gmail.com" className="text-blue-700 font-bold hover:underline">
              sarkariresultim@gmail.com
            </a>
          </p>
        </section>

        {/* Information Collection */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-sm border border-gray-200">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Log Files</h3>
            <p className="text-sm">
              We use standard log files to collect IP addresses, browser types, and date/time stamps. 
              This data is used to analyze trends and improve website management without identifying you personally.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Cookies</h3>
            <p className="text-sm">
              We use cookies to store user preferences and personalize content. 
              You can disable cookies anytime through your specific browser settings.
            </p>
          </div>
        </section>

        {/* Third-Party Links */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2 border-b pb-1">Third-Party Links</h2>
          <p>
            Our website may include links to external websites. Please note:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            <li>We do not control third-party sites or their privacy practices.</li>
            <li>Their policies may differ from ours.</li>
            <li>Review the Privacy Policies of external sites before sharing information.</li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h2 className="text-lg font-bold text-blue-900 mb-1">Children's Privacy</h2>
          <p className="text-sm text-blue-800">
            Sarkari Result.com.im does not knowingly collect personal information from children under 13. 
            If you believe a child has shared such information, please contact us immediately for its removal.
          </p>
        </section>

        {/* Consent & Updates */}
        <section className="pt-6">
          <p className="font-bold text-gray-900">Consent</p>
          <p className="text-sm mb-4">By using our website, you agree to the terms of this Privacy Policy.</p>
          
          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs text-gray-500 italic">
              Last Updated: January 18, 2026
            </p>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}