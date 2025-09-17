import { useState } from 'react';
import { ModalWrapper } from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/ModalWrapper';
import InputField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/InputField';
import SelectField from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/FormHandle/SelectField';
import { SearchAlatIcons } from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/icon';

function MagicToolTable() {
  const [search, setSearch] = useState('');
  const [dialogOpened, setDialogOpened] = useState(false);

  return (
    <>
      <ModalWrapper
        showCloseButton={false}
        opened={dialogOpened}
        padding="24px 32px 32px"
      >
        <div className="flex h-[535px] max-h-[535px] max-w-[600px]">
          <form className="w-full h-full">
            {/* Title */}
            <div>
              <h2 className="text-xl font-semibold mb-6">
                Create Keyword List
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex justify-between">
                  {/* List name */}
                  <div>
                    <InputField
                      type="input"
                      label="List name"
                      placeholder=""
                      variant="secondary"
                      className="w-[360px] flex flex-1 px-4 py-2 text-sm text-gray-900 outline-none transition border-gray h-[42px]"
                    />
                  </div>
                  {/* Location */}
                  <div>
                    <SelectField
                      label=""
                      variant="secondary"
                      icon={
                        <span className="mr-2">
                          <span role="img" aria-label="flag">
                            🇺🇸
                          </span>
                        </span>
                      }
                      options={[
                        { label: 'United States', value: 'us' },
                        { label: 'United Kingdom', value: 'uk' },
                        { label: 'Canada', value: 'ca' },
                        { label: 'Australia', value: 'au' },
                      ]}
                      defaultValue="us"
                      className="min-w-[150px] max-h-[42px] bg-gray-50 border-none rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>
              {/* Keywords */}
              <div className="mb-2">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="keywords"
                >
                  Keywords
                </label>
                <textarea
                  id="keywords"
                  rows={7}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-400 transition resize-none"
                  placeholder="Enter one or more keywords separated by a new line (Shift + Enter)"
                />
              </div>
              {/* Import from file */}
              <div className="mb-2">
                <button
                  type="button"
                  className="text-[#3a8bfd] text-sm flex items-center hover:underline focus:outline-none mt-1"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Import from file
                </button>
              </div>
            </div>
            {/* Footer actions */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center text-xs text-gray-500 w-full max-w-[160px]">
                <span>Keywords: 5/5K</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={(e) => setDialogOpened(false)}
                  type="button"
                  className="h-10 px-6 rounded-md border border-gray-200 bg-white text-gray-700 font-medium text-sm transition hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-10 px-7 rounded-md bg-[#ff914d] hover:bg-[#ff7f1a] text-white font-medium text-sm transition"
                >
                  Create List
                </button>
              </div>
            </div>
          </form>
        </div>
      </ModalWrapper>

      <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
        {/* Tabs and Actions */}
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
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-500 font-semibold border-b border-gray-200">
                <th className="text-left px-6 py-3 font-semibold">
                  KEYWORDS HISTORY
                </th>
                <th className="text-left px-6 py-3 font-semibold">
                  SEARCH DATE{' '}
                  <span className="inline-block align-middle ml-1">
                    <svg
                      width="10"
                      height="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M7 10l5 5 5-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white text-sm">
              {[
                { keyword: 'phuong', date: 'September 11, 2025' },
                { keyword: 'cassava flour pancakes', date: 'August 31, 2025' },
                {
                  keyword: 'chickpea flour banana pancakes',
                  date: 'August 31, 2025',
                },
                { keyword: 'gluten free pancakes', date: 'August 31, 2025' },
              ].map((row, idx) => (
                <tr
                  key={row.keyword}
                  className="border-b border-[#e5e7eb] hover:bg-[#f8fafc] transition"
                >
                  <td className="px-6 py-3 flex items-center gap-2 border-l border-[#f1f5f9]">
                    <span className="text-lg mr-2">🇺🇸</span>
                    <span className="truncate">{row.keyword}</span>
                  </td>
                  <td className="px-6 py-3 text-gray-700 border-l border-[#f1f5f9]">
                    {row.date}
                  </td>
                  <td className="px-6 py-3 text-right border-l border-[#f1f5f9]">
                    <button className="px-4 py-1.5 rounded border border-[#e5e7eb] bg-white text-gray-700 text-sm font-medium hover:bg-[#f1f5f9] transition">
                      View
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
        </div>
      </div>
    </>
  );
}

export default MagicToolTable;
