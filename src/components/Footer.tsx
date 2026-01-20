import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-slate-900 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        

        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} SarkariResult. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-slate-500">
              
              
              <Link href="/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors">
                Disclaimer
              </Link>
              <Link href="/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors">
                Terms and Conditions
              </Link>
              <Link href="/about-us" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                About Us
              </Link>
              <Link 
                href="/contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-400 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>


  );
}
