import { SearchAlatIcons } from '../components/icon';

export interface AuditRow {
  id: string | number;
  auditTitle: string;
  auditUrl: string;
  location: string;
  countryCode: string;
  contentScore: number;
  techScore: number;
}

export const tableData: AuditRow[] = [
  {
    id: 1,
    auditTitle: 'net worth',
    auditUrl: 'holisticnetworth.com/',
    location: 'United States',
    countryCode: 'US',
    contentScore: 77,
    techScore: 85,
  },
];

function OnpageAuditTable() {
  return (
    <>
      {/* control */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full mt-8 mb-4 px-6">
        <div
          className="flex items-center bg-white px-2 py-3 w-full max-w-full"
          style={{ maxWidth: '100%' }}
        >
          <span className="pr-2">
            <SearchAlatIcons.Search />
          </span>
          <input
            type="text"
            placeholder="Search by article titles or keywords"
            className="bg-transparent text-[15px] font-medium text-[#334155] w-full outline-none placeholder:text-[#94a3b8]"
            style={{ height: 32 }}
          />
        </div>
      </div>

      {/* table */}
      <div className="relative max-w-[1070px] min-w-[1050px] w-full bg-white rounded-2xl shadow-lg border border-[#e2e8f0]">
        <div className="relative overflow-x-auto scroll-smooth custom-scrollbar">
          {tableData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-14 min-w-[400px]">
              <div className="mb-2">
                <SearchAlatIcons.Box />
              </div>
              <div className="text-[#888] text-base font-medium">
                No data available
              </div>
            </div>
          ) : (
            <div className="relative">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-[#f8fafc] sticky top-0 z-20 text-left text-[#64748b] border-b border-[#e2e8f0]">
                    <th className="px-3 py-3 font-bold min-w-[220px] sticky left-0 bg-[#f8fafc] z-30">
                      AUDIT
                    </th>
                    <th className="px-2 py-3 font-bold min-w-[120px]">
                      LOCATION
                    </th>
                    <th className="px-2 py-3 font-bold min-w-[90px] text-center">
                      CONT. <br /> SCORE{' '}
                      <i className="fas fa-arrow-up text-xs ml-1" />
                    </th>
                    <th className="px-2 py-3 font-bold min-w-[90px] text-center">
                      TECH. <br /> SCORE{' '}
                      <i className="fas fa-arrow-up text-xs ml-1" />
                    </th>
                    <th className="px-2 py-3 font-bold min-w-[90px]"></th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {tableData.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-[#e2e8f0] transition-colors duration-150 hover:bg-[#f3f7fa] group"
                    >
                      {/* AUDIT */}
                      <td className="px-4 py-3 min-w-[220px] sticky left-0 bg-white z-20 group-hover:bg-[#f3f7fa]">
                        <div className="flex flex-col">
                          <span className="font-medium text-[#3a8bfd] hover:underline cursor-pointer flex items-center gap-1 text-[14px]">
                            {row.auditTitle}
                            <i className="fas fa-arrow-up-right-from-square text-xs text-[#3a8bfd]" />
                          </span>
                          <span className="text-xs text-[#64748b] flex items-center gap-1 mt-1">
                            {row.auditUrl}
                          </span>
                        </div>
                      </td>
                      {/* LOCATION */}
                      <td className="px-3 py-3 min-w-[120px]">
                        <span className="text-[15px] text-[#181c23] font-medium flex items-center gap-2">
                          {row.location}
                          {row.countryCode && (
                            <span className="ml-1 text-lg">
                              {/* You can use a flag emoji or an icon here */}
                              {row.countryCode === 'US'
                                ? '🇺🇸'
                                : row.countryCode}
                            </span>
                          )}
                        </span>
                      </td>
                      {/* CONTENT SCORE */}
                      <td className="px-3 py-3 min-w-[90px] text-center">
                        <span
                          className={`inline-flex items-center justify-center w-9 h-9 rounded-full border-2 text-[15px] font-bold ${
                            row.contentScore >= 75
                              ? 'border-[#22c55e] text-[#22c55e] bg-[#e6f9f0]'
                              : row.contentScore >= 50
                              ? 'border-[#facc15] text-[#facc15] bg-[#fff7e6]'
                              : 'border-[#e05a5a] text-[#e05a5a] bg-[#fbeaea]'
                          }`}
                        >
                          {row.contentScore}
                        </span>
                      </td>
                      {/* TECH SCORE */}
                      <td className="px-3 py-3 min-w-[90px] text-center">
                        <span
                          className={`inline-flex items-center justify-center w-9 h-9 rounded-full border-2 text-[15px] font-bold ${
                            row.techScore >= 75
                              ? 'border-[#22c55e] text-[#22c55e] bg-[#e6f9f0]'
                              : row.techScore >= 50
                              ? 'border-[#facc15] text-[#facc15] bg-[#fff7e6]'
                              : 'border-[#e05a5a] text-[#e05a5a] bg-[#fbeaea]'
                          }`}
                        >
                          {row.techScore}
                        </span>
                      </td>
                      {/* ACTION */}
                      <td className="flex px-3 py-3 min-w-[90px] text-right">
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
              {/* Shadow fade bên phải */}
              <div
                className="pointer-events-none absolute top-0 right-0 h-full w-8 z-30"
                style={{
                  background:
                    'linear-gradient(to left, #fff 80%, rgba(255,255,255,0) 100%)',
                }}
              />
            </div>
          )}
        </div>
        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            height: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #e2e8f0;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          @media (max-width: 900px) {
            table {
              min-width: 700px !important;
            }
          }
          @media (max-width: 600px) {
            table {
              min-width: 500px !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default OnpageAuditTable;
