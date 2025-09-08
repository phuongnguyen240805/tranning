function PageInBulk() {
  return (
    <div className="w-full max-w-[540px] mx-auto">
      {/* STEP 1 */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#e0f7f3] text-[#22c55e] font-bold text-[15px]">1</span>
          <span className="text-gray-800 font-bold text-[15px]">Download and complete the template</span>
        </div>
        <div className="text-gray-500 text-[14px] mb-4 pl-8">
          Make a copy of the template, fill the table and upload it to the form below. Don&apos;t forget to make the Google Sheet URL visible to anyone when sharing.
        </div>
        <div className="pl-8">
          <button
            type="button"
            className="flex items-center gap-2 bg-white border border-[#3ad6b0] text-[#3ad6b0] font-semibold px-4 py-2 rounded-lg hover:bg-[#e3f6ff] transition"
            disabled
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <rect
                width="20"
                height="20"
                rx="4"
                fill="#3ad6b0"
                fillOpacity="0.12"
              />
              <path
                d="M7 9.5V7.75A2.25 2.25 0 0 1 9.25 5.5h1.5A2.25 2.25 0 0 1 13 7.75V9.5m-6 0h6m-6 0v2.75A2.25 2.25 0 0 0 9.25 14.5h1.5A2.25 2.25 0 0 0 13 12.25V9.5m-6 0V7.75A2.25 2.25 0 0 1 9.25 5.5h1.5A2.25 2.25 0 0 1 13 7.75V9.5"
                stroke="#3ad6b0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Get .xls template
          </button>
        </div>
      </div>

      {/* STEP 2 */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#e0f7f3] text-[#22c55e] font-bold text-[15px]">2</span>
          <span className="text-gray-800 font-bold text-[15px]">Upload the filled template</span>
        </div>
        <div className="bg-white rounded-xl p-4 mb-4 border border-[#e2e8f0]">
          <div className="flex flex-col gap-3">
            <label className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-[#e2e8f0] rounded-lg bg-[#f8fafc] cursor-pointer hover:bg-[#e3f6ff] transition">
              <svg
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 40 40"
                className="mb-2"
              >
                <path
                  d="M20 28V12M20 12l-6 6M20 12l6 6"
                  stroke="#b5b5b5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="5"
                  y="32"
                  width="30"
                  height="2"
                  rx="1"
                  fill="#e2e8f0"
                />
              </svg>
              <span className="text-gray-500 text-[15px] mb-1">
                Drop your file here, or{' '}
                <span className="text-[#3ad6b0] underline hover:text-[#2ecc71] font-semibold cursor-pointer">
                  click to browse
                </span>
              </span>
              <span className="text-gray-400 text-[13px]">
                File format: XLS, Google Sheets
              </span>
              <input
                type="file"
                accept=".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                className="hidden"
              />
            </label>

            <div className="flex items-center my-2">
              <div className="flex-1 border-t border-[#e2e8f0]" />
              <span className="mx-3 text-gray-400 text-[13px]">or</span>
              <div className="flex-1 border-t border-[#e2e8f0]" />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Paste Google Sheets URL"
                className="flex-1 bg-white border border-[#e2e8f0] rounded-lg px-3 py-2 text-gray-800 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3ad6b0]/40"
              />
              <button
                type="button"
                className="bg-white border border-[#3ad6b0] text-[#3ad6b0] font-semibold px-4 py-2 rounded-lg hover:bg-[#e3f6ff] transition"
              >
                UPLOAD
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#f8fafc] rounded-lg px-4 py-3 mb-4 flex items-center gap-2 border border-[#e2e8f0]">
          <span className="bg-[#3ad6b0] text-white rounded-full px-2 py-1 text-xs font-bold mr-2">
            i
          </span>
          <span className="text-gray-700 text-[14px]">
            To customize the AI output, please check and adjust your{' '}
            <a
              href="#"
              className="text-[#3ad6b0] underline hover:text-[#2ecc71]"
            >
              Project AI Settings
            </a>
          </span>
        </div>

        <button
          type="button"
          className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-[16px] mt-2"
        >
          <span>Bulk Generate Articles</span> <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}

export default PageInBulk;
