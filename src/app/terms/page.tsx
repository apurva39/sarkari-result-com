import PageLayout from "@/components/PageLayout";

export default function TermsAndConditions() {
  return (
    <PageLayout title="Terms and Conditions">
      <div className="prose max-w-none text-gray-700 space-y-6 text-[15px] leading-relaxed">
        
        <section>
          <p>Welcome to <strong>SarkariResult.com.im</strong>!</p>
          <p>
            These terms and conditions outline the rules and regulations for the use of Sarkari Result's Website, 
            located at <span className="text-blue-600">https://sarkariresult.com.im/</span>.
          </p>
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use 
            SarkariResult.com.im if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </section>

        {/* 1. Cookies */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">1. Cookies</h2>
          <p>
            We employ the use of cookies. By accessing SarkariResult.com.im, you agreed to use cookies in 
            agreement with our Privacy Policy. Most interactive websites use cookies to let us retrieve the 
            user's details for each visit to enable the functionality of certain areas.
          </p>
        </section>

        {/* 2. License */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">2. License</h2>
          <p>
            Unless otherwise stated, SarkariResult.com.im and/or its licensors own the intellectual property 
            rights for all material on this website. All intellectual property rights are reserved.
          </p>
          <p className="font-semibold mt-2">You must not:</p>
          <ul className="list-none space-y-1 pl-4">
            <li>➤ Republish material from SarkariResult.com.im</li>
            <li>➤ Sell, rent or sub-license material from this website</li>
            <li>➤ Reproduce, duplicate or copy material</li>
            <li>➤ Redistribute content from SarkariResult.com.im</li>
          </ul>
        </section>

        {/* 3. User Comments */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">3. User Comments</h2>
          <p>
            Parts of this website offer an opportunity for users to post opinions. SarkariResult.com.im does 
            not filter, edit, or review Comments prior to their presence on the website. Comments reflect 
            the views of the person who posts them and not the views of our team.
          </p>
          <p>
            We reserve the right to monitor all Comments and to remove any Comments which can be considered 
            inappropriate, offensive, or causes a breach of these Terms and Conditions.
          </p>
        </section>

        {/* 4. Hyperlinking to our Content */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">4. Hyperlinking to our Content</h2>
          <p>The following organizations may link to our Website without prior written approval:</p>
          <ul className="list-none space-y-1 pl-4">
            <li>➤ Government agencies</li>
            <li>➤ Search engines</li>
            <li>➤ News organizations</li>
            <li>➤ Online directory distributors</li>
          </ul>
        </section>

        {/* 5. Content Liability */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">5. Content Liability</h2>
          <p>
            We shall not be held responsible for any content that appears on your Website. You agree to protect 
            and defend us against all claims arising on your Website that may be interpreted as libelous, 
            obscene, or criminal.
          </p>
        </section>

        {/* 6. Disclaimer */}
        <section className="bg-gray-50 p-4 border border-gray-200 rounded-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-2">6. Disclaimer</h2>
          <p className="text-sm">
            As long as the website and the information and services on the website are provided free of charge, 
            we will not be liable for any loss or damage of any nature. We do not ensure that the information 
            on this website is correct; we do not warrant its completeness or accuracy.
          </p>
        </section>

        <div className="pt-6 border-t border-gray-100">
          <p className="text-sm italic text-gray-500">
            Last Updated: January 2026
          </p>
        </div>
      </div>
    </PageLayout>
  );
}