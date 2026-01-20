export default function LatestJobSidebar() {
    return(
    <aside className="flex flex-col gap-6">
      {/* Search Box */}
      <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-xs">
        <div className="flex">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none"
          />
          <button className="bg-slate-700 text-white px-4 py-2 hover:bg-slate-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Latest Jobs Section */}
      <div className="bg-white border border-gray-200 shadow-sm">
        <div className="bg-white py-3 border-b border-gray-100">
          <h2 className="text-xl font-bold text-center text-gray-900">★ Latest Jobs ★</h2>
        </div>
        <ul className="divide-y divide-gray-100">
          {["HSSC Haryana Police", "UP Police Constable", "BSEB Sakshamta"].map((job, idx) => (
            <li key={idx} className="p-4 hover:bg-gray-50 transition-colors">
              <a href="#" className="text-blue-700 hover:text-orange-600 text-[15px] font-medium leading-tight block">
                {job} Recruitment 2026 Apply Online
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}