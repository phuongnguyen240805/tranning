import { SearchAlatIcons } from '../components/icon';

const topicData = [
  {
    url: 'https://neoinversionista.com/',
    keyword: 'inversiones, trading, neoinversionista',
    topicCount: 150,
    edge: 0,
    created: 0,
    published: 0,
  },
  {
    url: 'https://neoinversionista.com/',
    keyword: 'macro inversionista',
    topicCount: 150,
    edge: 0,
    created: 0,
    published: 0,
  },
  {
    url: 'https://neoinversionista.com/invertir-en-acciones-financieros/',
    keyword: 'invertir en acciones',
    topicCount: 150,
    edge: 0,
    created: 0,
    published: 0,
  },
  {
    url: 'https://neoinversionista.com/',
    keyword: 'macro inversionista',
    topicCount: 150,
    edge: 0,
    created: 0,
    published: 0,
  },
];

function TopicalMapsTable() {
  return (
    <>
      {/* control */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full mt-8 mb-4 px-6">
        <div className="flex items-center gap-3 mt-2 md:mt-0 flex-wrap">
          <button
            type="button"
            className="flex items-center bg-white border border-[#e2e8f0] rounded-md px-3 py-2 w-[180px] shadow-sm transition focus:border-[#3b82f6] text-left"
          >
            <SearchAlatIcons.Search />
            <span className="bg-transparent text-[16px] font-medium text-[#334155] w-full truncate">
              Pillar Page
            </span>
            <span className="ml-2 px-2 py-0.5 bg-transparent border-none rounded text-[#94a3b8] text-base font-medium flex items-center gap-1 transition">
              <SearchAlatIcons.Drop />
            </span>
          </button>

          <button
            type="button"
            className="flex items-center bg-white border border-[#e2e8f0] rounded-md px-3 py-2 w-[160px] shadow-sm transition focus:border-[#3b82f6] text-left"
          >
            <span className="bg-transparent text-[16px] font-medium text-[#334155] w-full truncate">
              Keyword
            </span>
            <span className="ml-2 px-2 py-0.5 bg-transparent border-none rounded text-[#94a3b8] text-base font-medium flex items-center gap-1 hover:bg-[#f1f5f9] transition">
              <SearchAlatIcons.Drop />
            </span>
          </button>
        </div>
      </div>

      {/* table */}
      <table className="min-w-full text-left text-sm text-[#181c23] border border-[#e2e8f0] rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-[#f3f4f6] text-[#374151] uppercase text-xs border-b border-[#e2e8f0]">
            <th className="px-6 py-3 font-semibold">PILLAR PAGE</th>
            <th className="px-6 py-3 font-semibold">KEYWORD</th>
            <th className="px-4 py-3 font-semibold text-center">TOPIC COUNT</th>
            <th className="px-4 py-3 font-semibold text-center">
              IDEAS IN TOPIC MAP
            </th>
            <th className="px-4 py-3 font-semibold text-center">
              CONTENT CREATED
            </th>
            <th className="px-4 py-3 font-semibold text-center">PUBLISHED</th>
            <th className="px-4 py-3 font-semibold text-center"></th>
          </tr>
        </thead>
        <tbody>
          {topicData.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-[#e2e8f0] hover:bg-[#e0f2fe] transition group"
            >
              <td className="px-6 py-3 font-medium text-[#2563eb] underline whitespace-nowrap">
                <a
                  href={row.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1d4ed8]"
                >
                  {row.url}
                </a>
              </td>
              <td className="px-6 py-3">{row.keyword}</td>
              <td className="px-4 py-3 text-center">{row.topicCount}</td>
              <td className="px-4 py-3 text-center">{row.edge}</td>
              <td className="px-4 py-3 text-center">{row.created}</td>
              <td className="px-4 py-3 text-center">{row.published}</td>
              <td className="px-4 py-3 flex items-center justify-center gap-2">
                <button
                  className="flex items-center justify-center h-10 min-w-[120px] bg-[#f3f4f6] border border-[#e2e8f0] hover:bg-[#60a5fa] hover:text-white text-[#2563eb] transition"
                  title="Xem bản đồ"
                >
                  View Topical Map
                </button>
                <button
                  className="flex items-center justify-center w-9 h-9 bg-[#f3f4f6] border border-[#e2e8f0] rounded-full hover:bg-[#60a5fa] hover:text-white text-[#374151] transition"
                  title="Tùy chọn"
                >
                  <SearchAlatIcons.MoreOptions />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-end px-6 py-4 bg-white border-t border-[#e2e8f0]">
        <span className="text-[#6b7280] text-sm pr-4">
          1-4 of 4 results shown
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
    </>
  );
}

export default TopicalMapsTable;
