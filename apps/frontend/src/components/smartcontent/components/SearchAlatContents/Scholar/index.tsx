import React, { useState } from 'react';

import Title from '../components/Title';
import FormHandle from '../components/FormHandle';
import { SearchAlatIcons } from '../components/icon';
import SearchAlatLayout from '../SearchAlatLayout';

const Scholar = () => {
  const [selectedFilter, setSelectedFilter] = useState('Search');

  const filterBar: { lable: string; icon?: React.ReactNode }[] = [
    {
      lable: 'Search',
      icon: <SearchAlatIcons.Search />,
    },
    {
      lable: 'Overall score',
    },
    {
      lable: 'Content clarity',
    },
    {
      lable: 'Freshness',
    },
    {
      lable: 'Factuality',
    },
    {
      lable: 'Human effort',
    },
  ];

  const tableColumns = [
    'TARGET KEYWORD / PAGE URL',
    'OVERALL SCORE',
    'CONTENT CLARITY',
    'FACTUALITY',
    'HUMAN EFFORT',
    'INFO GAIN',
    'CONTENT FRESHNESS',
    'USER INTENT',
    'ENTITY SCORE',
    'CONTEXT FLOW',
    'NUMERIC SCORE',
  ];

  return (
    <SearchAlatLayout
      // 🔹 HEADER SLOT
      header={
        <Title
          title="Scholar"
          subtitle="Analyze your page's content through advanced metrics, evaluating relevance, structure, and depth 
            around a targeted keyword. Gain actionable insights to optimize for clarity, engagement, and search 
            performance."
          gradientFrom="#2ecc71"
          gradientTo="#3a8bfd"
        />
      }
      // 🔹 MAIN SLOT (search + filters)
      main={
        <FormHandle
          keywordPlaceholder="Enter Target Keyword"
          urlPlaceholder="Enter Target Page URL"
          buttonText="Analyze page"
          buttonClassName="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold px-6 py-2.5 rounded-lg text-[15px] transition"
        />
      }
      // TABLE
      table={
        <>
          {/* page number */}
          <div className="px-2 mb-3">
            <span className="text-[15px] text-gray-700 font-medium">
              Analyzed: 0 pages
            </span>
          </div>

          {/* Filters and Table */}
          <main className="flex-1 w-full max-w-[1070px] mx-auto px-4 py-6 flex flex-col gap-6">
            {/* Filter Row */}
            <div className="flex flex-wrap gap-2">
              {filterBar.map((filter, idx) => (
                <button
                  key={idx}
                  className="flex items-center gap-2 bg-[#f7fafc] border border-[#e2e8f0] rounded-lg px-4 py-2 text-[15px] font-medium text-gray-700 hover:bg-[#e8f0fe] transition"
                >
                  {filter.icon}
                  {filter.lable}
                  <SearchAlatIcons.Drop />
                </button>
              ))}
              {/* More Filters Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 rounded-lg bg-[#f7fafc] border border-[#e2e8f0] text-[#181c23] text-sm font-medium hover:bg-[#e8f0fe] hover:text-[#3a8bfd] transition-colors flex items-center gap-1">
                  + More filters
                  <SearchAlatIcons.Drop />
                </button>
                {/* Dropdown menu (hidden by default, shown on hover) */}
                <div className="absolute left-0 mt-2 min-w-[180px] bg-white border border-[#e2e8f0] rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                  <ul className="py-2">
                    <li>
                      <button className="w-full text-left px-4 py-2 text-[#181c23] hover:bg-[#f3f4f6] hover:text-[#3a8bfd] text-sm transition">
                        User intent
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left px-4 py-2 text-[#181c23] hover:bg-[#f3f4f6] hover:text-[#3a8bfd] text-sm transition">
                        Entity score
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left px-4 py-2 text-[#181c23] hover:bg-[#f3f4f6] hover:text-[#3a8bfd] text-sm transition">
                        Context flow
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left px-4 py-2 text-[#181c23] hover:bg-[#f3f4f6] hover:text-[#3a8bfd] text-sm transition">
                        NUG score
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-2xl shadow border border-[#e2e8f0] overflow-x-auto w-full custom-scrollbar overflow-hidden">
              <table className="table-auto w-full text-[15px] border-collapse">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-[#e2e8f0] text-xs uppercase">
                    {tableColumns.map((col) => (
                      <th
                        key={col}
                        className="px-4 py-4 font-semibold whitespace-nowrap max-w-[280px] truncate text-ellipsis cursor-pointer"
                      >
                        <span className="flex items-center gap-1">
                          {col}
                          {/* Sort icon (inactive state) */}
                          <SearchAlatIcons.Sort />
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td colSpan={11}>
                      <div className="flex flex-col items-center justify-center py-14">
                        <div className="mb-2">
                          <SearchAlatIcons.Box />
                        </div>
                        <div className="text-[#888] text-base font-medium">
                          No data available
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-2 w-full">
              <span className="text-[#6b7280] text-sm pr-4">
                0-0 of 0 results shown
              </span>
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 rounded bg-[#f3f4f6] text-[#6b7280] hover:bg-[#60a5fa] hover:text-white text-sm border border-[#e2e8f0] transition"
                  disabled
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="px-3 py-1 rounded bg-[#3b82f6] text-white text-sm font-semibold border border-[#3b82f6] shadow transition">
                  1
                </button>
                <button
                  className="px-2 py-1 rounded bg-[#f3f4f6] text-[#6b7280] hover:bg-[#60a5fa] hover:text-white text-sm border border-[#e2e8f0] transition"
                  disabled
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <select className="ml-4 bg-[#f3f4f6] border border-[#e2e8f0] text-[#181c23] rounded px-2 py-1 text-sm focus:outline-none">
                  <option>10 / page</option>
                  <option>20 / page</option>
                  <option>50 / page</option>
                </select>
              </div>
            </div>
          </main>
        </>
      }
      isTableView
      showOverlay
      halfWidth
      footer={<></>}
    />
  );
};

export default Scholar;
