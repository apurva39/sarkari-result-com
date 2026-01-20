import PageLayout from "@/components/PageLayout";

export default function Disclaimer() {
  return (
    <PageLayout title="Disclaimer">
      <div className="prose max-w-none text-gray-700 space-y-6 text-[16px] leading-relaxed">
        
        {/* Intro */}
        <section>
          <p>
            If you need more details or have questions about this disclaimer, feel free to email us at{" "}
            <a href="mailto:sarkariresultim@gmail.com" className="text-blue-700 font-bold hover:underline">
              sarkariresultim@gmail.com
            </a>.
          </p>
        </section>

        {/* General Information */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2 border-b pb-1">General Information</h2>
          <p>
            The information provided on <span className="text-blue-600">https://sarkariresult.com.im/</span> is shared in good faith and for general information purposes only.
          </p>
          <ul className="list-none space-y-2 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">➤</span>
              <span>SarkariResult.com.im does not guarantee the completeness, accuracy, or reliability of any information on this site.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">➤</span>
              <span>Any action you take based on the information found here is strictly at your own risk.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">➤</span>
              <span>We are not responsible for any losses or damages resulting from the use of our website.</span>
            </li>
          </ul>
        </section>

        {/* External Links */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2 border-b pb-1">External Links</h2>
          <p>
            Our website may contain links to other external sites. While we aim to link only to useful and trusted sources, we have no control over the content or updates on those websites.
          </p>
          <p className="bg-blue-50 p-3 text-sm italic border-l-4 border-blue-400">
            Note: Site owners may change content without notice, and we may not always be able to remove outdated or inactive links immediately.
          </p>
        </section>

        {/* Third-Party Policies */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2 border-b pb-1">Third-Party Policies</h2>
          <p>
            Once you leave our website, please be aware that other sites may have different Privacy Policies and Terms of Service. We strongly advise you to review those policies before sharing personal information or engaging in any activity.
          </p>
        </section>

        {/* Consent & Updates */}
        <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-sm">
          <h3 className="font-bold text-gray-900 mb-2 text-lg">Consent</h3>
          <p className="mb-4">
            By accessing and using our website, you agree to this disclaimer and accept all its terms.
          </p>
          <p className="text-sm font-medium text-blue-800">
            Updates: Any future changes to this disclaimer will be clearly posted on this page.
          </p>
        </div>

      </div>
    </PageLayout>
  );
}