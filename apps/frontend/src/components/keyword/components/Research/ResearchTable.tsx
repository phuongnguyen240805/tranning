import { useState } from 'react';
import { ModalWrapper } from '../../../smartcontent/components/SearchAlatContents/components/ModalWrapper';
import CreateKeywordForm from './CreateKeywordForm';

function ResearchTable() {
  const [activeTab, setActiveTab] = useState<'lists' | 'history'>('lists');
  const [search, setSearch] = useState('');
  const [dialogOpened, setDialogOpened] = useState(false);

  return (
    <>
      <ModalWrapper
        width="600px"
        onClose={() => setDialogOpened(!dialogOpened)}
        showCloseButton={false}
        opened={dialogOpened}
      >
        <div className="flex h-[530px] max-h-[530px] max-w-[600px]">
          <CreateKeywordForm setShowFolderSetting={setDialogOpened} />
        </div>
      </ModalWrapper>

      <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
        {/* Tabs and Actions */}
        <div className="flex items-center px-4 pt-4 pb-2 shadow-sm">
          <div className="flex items-center gap-6 flex-1">
            <button
              className={`pb-2 px-1 text-[15px] font-medium border-b-2 transition ${
                activeTab === 'lists'
                  ? 'border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-400 hover:text-blue-700'
              }`}
              onClick={() => setActiveTab('lists')}
            >
              Keyword lists
            </button>
            <button
              className={`pb-2 px-1 text-[15px] font-medium border-b-2 transition ${
                activeTab === 'history'
                  ? 'border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-400 hover:text-blue-700'
              }`}
              onClick={() => setActiveTab('history')}
            >
              History
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`${
                  activeTab == 'lists' ? 'Search List' : 'History List'
                }`}
                className="pl-9 pr-3 py-1.5 rounded bg-gray-50 border border-gray-200 text-sm text-gray-900 outline-none focus:border-blue-400 transition w-[160px]"
              />
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <button
              onClick={(e) => setDialogOpened(true)}
              className="text-sm font-medium px-4 py-1.5 rounded transition bg-blue-600 hover:bg-blue-700 text-white"
            >
              + Create List
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          {activeTab == 'lists' ? (
            <>
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="bg-blue-50 text-xs text-blue-500 font-semibold">
                    <th className="text-left px-6 py-3 font-semibold">LIST</th>
                    <th className="text-left px-6 py-3 font-semibold">
                      KEYWORDS
                    </th>
                  </tr>
                </thead>
              </table>
              {/* No data state */}
              <div className="flex flex-col items-center justify-center py-12">
                <div className="mb-2">
                  <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                    <rect
                      x="8"
                      y="16"
                      width="32"
                      height="20"
                      rx="2"
                      fill="#f3f4f6"
                    />
                    <rect
                      x="14"
                      y="22"
                      width="20"
                      height="2"
                      rx="1"
                      fill="#e5e7eb"
                    />
                    <rect
                      x="14"
                      y="26"
                      width="12"
                      height="2"
                      rx="1"
                      fill="#e5e7eb"
                    />
                    <rect
                      x="18"
                      y="30"
                      width="8"
                      height="2"
                      rx="1"
                      fill="#e5e7eb"
                    />
                    <rect
                      x="12"
                      y="12"
                      width="24"
                      height="4"
                      rx="2"
                      fill="#e5e7eb"
                    />
                  </svg>
                </div>
                <div className="text-gray-300 text-sm">No data</div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-[#eaf1ff] rounded-t-xl px-6 py-3 flex items-center text-xs font-semibold text-[#3a8bfd]">
                <div className="flex-1 flex items-center">KEYWORD</div>
                <div className="w-32"></div>
                <div className="w-8"></div>
              </div>
              <div>
                {/* Row 1 */}
                <div
                  className="flex items-center px-6 py-3 hover:bg-[#f5faff] transition"
                  style={{ backgroundColor: '#f8fbff' }}
                >
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-lg" role="img" aria-label="flag">
                      🇺🇸
                    </span>
                    <span className="text-gray-900 text-sm">
                      gluten free desserts
                    </span>
                  </div>
                  <div className="w-32 flex justify-end">
                    <button className="bg-[#eaf1ff] rounded px-4 py-1 text-sm text-[#3a8bfd] hover:bg-[#d6e6ff] transition">
                      View
                    </button>
                  </div>
                  <div className="w-8 flex justify-end">
                    <button className="text-gray-400 hover:text-[#3a8bfd] transition">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <circle cx="10" cy="4" r="1.5" fill="currentColor" />
                        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                        <circle cx="10" cy="16" r="1.5" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Row 2 */}
                <div
                  className="flex items-center px-6 py-3 hover:bg-[#f5faff] transition"
                  style={{ backgroundColor: '#f8fbff' }}
                >
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-lg" role="img" aria-label="flag">
                      🇺🇸
                    </span>
                    <span className="text-gray-900 text-sm">
                      naturally gluten-free desserts
                    </span>
                  </div>
                  <div className="w-32 flex justify-end">
                    <button className="bg-[#eaf1ff] rounded px-4 py-1 text-sm text-[#3a8bfd] hover:bg-[#d6e6ff] transition">
                      View
                    </button>
                  </div>
                  <div className="w-8 flex justify-end">
                    <button className="text-gray-400 hover:text-[#3a8bfd] transition">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <circle cx="10" cy="4" r="1.5" fill="currentColor" />
                        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                        <circle cx="10" cy="16" r="1.5" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ResearchTable;
