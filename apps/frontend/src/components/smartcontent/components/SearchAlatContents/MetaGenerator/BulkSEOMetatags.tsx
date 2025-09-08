import InputField from '../components/FormHandle/InputField';
import VideoCard from '../components/VideoCard';

function BulkSEOMetatags() {
  return (
    <div className="flex-1 max-w-xl mx-auto">
      {/* Instructions */}
      <div className="text-[#222] text-sm flex flex-col gap-2">
        <ul className="list-disc pl-5 space-y-1">
          <li>Imported file should be in CSV format</li>
          <li>
            CSV should include <b>Company Name</b>, <b>Title</b> and
            <b>Keywords</b> columns
          </li>
          <li>
            <b>Company Name</b> column should be filled for all rows
          </li>
        </ul>
        <a
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/1w6rqVS9YpCI-UkUjYV2GmuKCbFgKqGFOdrjnZqA6kW4/edit?gid=1565953288#gid=1565953288"
          className="text-[#3a8bfd] font-semibold hover:underline mt-2"
        >
          Download template
        </a>
      </div>

      {/* Video/Image */}
      <div className="max-w-[340px] mb-1">
        <VideoCard
          src="https://www.youtube.com/embed/BUqoV8TdkKw?list=PLEpY4e8tcdVW1ib_iaBqvnDYV5DPL6Y4T"
          height={250}
          controls
          className="h-[210px] md:h-[240px]"
        />
      </div>

      {/* Company Name Input */}
      <InputField
        type="input"
        label="Company Name"
        placeholder="Company Name"
        className="w-full text-sm max-h-[42px]"
      />

      {/* File Upload */}
      <div className="w-full flex flex-col gap-2">
        <label className="flex flex-col p-2 border-2 border-dashed border-[#e2e8f0] rounded-lg bg-[#f8fafc] cursor-pointer hover:bg-[#e3f6ff] transition">
          <span className="text-gray-500 text-[15px] mb-1">
            Drop your file here, or
            <span className="text-[#3a8bfd] underline cursor-pointer">
              click to browse
            </span>
          </span>
          <span className="text-gray-400 text-[13px]">File format: CSV</span>
          <input
            type="file"
            accept=".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            className="hidden"
          />
        </label>
      </div>

      {/* Start Processing Button */}
      <button
        type="button"
        className="w-fit px-6 py-2 rounded bg-[#8456B3] hover:bg-[#6d4696] text-white font-semibold transition mt-1"
      >
        Start Processing
      </button>

      {/* Table */}
      <div className="w-full bg-white rounded-xl shadow border border-[#e5e7eb] mt-1">
        <div className="flex flex-row px-6 py-3 border-b border-[#e5e7eb] text-[#222] font-semibold text-sm">
          <div className="flex-1">NAME</div>
          <div className="flex-1">PROCESSED ON</div>
        </div>
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
          <span className="text-sm">No data</span>
        </div>
      </div>
    </div>
  );
}

export default BulkSEOMetatags;
