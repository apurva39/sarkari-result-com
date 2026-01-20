// // components/PageLayout.js
// import LatestJobSidebar from "./LatestJobSidebar";

// export default function PageLayout({ children, title }) {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          
//           {/* Main Content Area */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-white p-6 shadow-md border-t-4 border-blue-400 rounded-sm">
//               <div className="mb-6 inline-block">
//                 <h1 className="text-3xl font-bold text-blue-800 pb-1">{title}</h1>
//                 <div className="h-[2px] w-full bg-gradient-to-l from-transparent via-blue-500 to-blue-500"></div>
//               </div>
//               {children}
//             </div>
//           </div>

//           {/* Reusable Sidebar */}
//           <LatestJobSidebar />
          
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import LatestJobSidebar from "./LatestJobSidebar";

// 1. Define the Interface for the Props
interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

// 2. Apply the types to the function
export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 shadow-md border-t-4 border-blue-400 rounded-sm">
              <div className="mb-6 inline-block">
                <h1 className="text-3xl font-bold text-blue-800 pb-1">{title}</h1>
                <div className="h-[2px] w-full bg-gradient-to-l from-transparent via-blue-500 to-blue-500"></div>
              </div>
              {children}
            </div>
          </div>

          {/* Reusable Sidebar */}
          <LatestJobSidebar />
          
        </div>
      </div>
    </div>
  );
}