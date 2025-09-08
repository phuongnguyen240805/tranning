import React from 'react';
import SelectField from '../FormHandle/SelectField';
import { languageList } from '../FormHandle';

interface FormData {
  title: string;
  keywords: string;
  bulkTitles: string;
  bulkKeywords: string;
}

interface WriteYourselfProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onCreateArticle?: () => void;
}

const WriteYourself: React.FC<WriteYourselfProps> = ({
  formData,
  setFormData,
  onCreateArticle,
}) => {
  return (
    <div>
      {/* Input Title */}
      <input
        placeholder="Article title (optional)..."
        className="mb-3 w-full bg-white text-gray-800 text-[15px] font-medium px-4 py-3 rounded border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#3ad6b0] transition placeholder:text-gray-400"
        type="text"
        value={formData.title}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, title: e.target.value }))
        }
      />

      {/* Input Keywords */}
      <input
        placeholder="Enter keyword(s) you want to rank for, separated by commas..."
        className="mb-3 w-full bg-white text-gray-800 text-[15px] font-medium px-4 py-3 rounded border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#3ad6b0] transition placeholder:text-gray-400"
        type="text"
        value={formData.keywords}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, keywords: e.target.value }))
        }
      />

      {/* Import from URL */}
      <a
        href="#"
        className="flex items-center gap-2 text-[#3a8bfd] text-[15px] font-semibold hover:underline hover:text-[#2563eb] transition w-fit mb-4"
      >
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <path
            stroke="#3a8bfd"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17l5-5m0 0l5-5m-5 5V3m9 9a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Import page from URL
      </a>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between mt-2">
        <button
          className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-5 py-2 rounded flex items-center gap-2 transition text-[15px]"
          type="button"
          onClick={onCreateArticle}
        >
          Create Article <span className="text-lg">→</span>
        </button>

        <div className="flex items-center gap-2 text-gray-500 text-[15px]">
          <span>
            <SelectField options={languageList} defaultValue="United States" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WriteYourself;
