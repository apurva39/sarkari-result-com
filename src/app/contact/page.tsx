import PageLayout from "@/components/PageLayout";

export default function Contact() {
  return (
    <PageLayout title="Contact Us">
      <div className="prose max-w-none text-gray-700 space-y-4 text-[16px] leading-relaxed">
        <p>
          <span className="font-bold text-gray-900">Sarkariresult.com.im</span>{" "}
          is not associated with any government department. We are an individual
          creator providing updates on government jobs, central and state
          schemes, finance, and technology.
        </p>
        <p>
          If you have any issues related to the content available on this
          website, please contact us via e-mail. We will try our best to solve
          your problem completely.
        </p>

        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-700">
          <p className="text-lg">
            <span className="font-bold text-gray-900">Email:</span>{" "}
            <a
              href="mailto:contact@sarkariresult.com"
              className="text-blue-700 font-bold hover:underline"
            >
              contact@sarkariresult.com
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
