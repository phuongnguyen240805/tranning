import { useState } from 'react';
import { SearchAlatIcons } from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/icon';

function GapTable() {
  const [search, setSearch] = useState('');
  const [dialogOpened, setDialogOpened] = useState(false);

  return (
    <>
      <div className=" max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-4">
        {/* Search Bar */}
        <div className="mb-2">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full pl-9 pr-4 py-2 rounded border border-[#e5e7eb] bg-[#f9fafb] text-sm text-black focus:outline-none focus:border-[#3b82f6] transition"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]">
              <SearchAlatIcons.Search className="w-4 h-4" />
            </span>
          </div>
        </div>
        {/* Table */}
        <div className="w-full rounded-lg overflow-hidden border border-[#f3f4f6]">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-[#f9fafb] text-xs text-[#6b7280] font-semibold">
                <th className="text-left px-6 py-3 border-b border-[#f3f4f6]">
                  <div className="flex items-center gap-1">
                    PRIMARY WEBSITE
                    <span className="text-[#9ca3af]">
                      <SearchAlatIcons.Drop className="inline w-3 h-3" />
                    </span>
                  </div>
                </th>
                <th className="text-left px-6 py-3 border-b border-[#f3f4f6]">
                  COMPETITOR WEBSITES
                </th>
                <th className="text-left px-6 py-3 border-b border-[#f3f4f6]">
                  <div className="flex items-center gap-1">
                    SEARCHED ON
                    <span className="text-[#9ca3af]">
                      <SearchAlatIcons.Drop className="inline w-3 h-3" />
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* No data row */}
              <tr>
                <td colSpan={3} className="py-16 bg-[#f5f8fe] text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-2">
                      {/* Envelope/empty icon */}
                      <SearchAlatIcons.Box className="w-12 h-12 text-[#d1d5db]" />
                    </div>
                    <div className="text-[#9ca3af] text-sm font-medium">
                      No data
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default GapTable;
